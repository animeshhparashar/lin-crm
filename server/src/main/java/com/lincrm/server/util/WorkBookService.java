package com.lincrm.server.util;

import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toMap;

@Service
public class WorkBookService {

    @Autowired
    WorkBookUtil workBookUtil;

    public List<Map<String, String>> parseXLSXFile(MultipartFile file) throws IOException {

        Path tempDir = Files.createTempDirectory("");

        File tempFile = tempDir.resolve(file.getOriginalFilename()).toFile();

        file.transferTo(tempFile);

        Workbook workbook = WorkbookFactory.create(tempFile);

        Sheet sheet = workbook.getSheetAt(0);

        Supplier<Stream<Row>> rowStreamSupplier = workBookUtil.getRowStreamSupplier(sheet);

        Row headerRow = rowStreamSupplier.get().findFirst().get();

        List<String> headerCells = workBookUtil.getStream(headerRow)
                .map(Cell::getStringCellValue)
                .collect(Collectors.toList());

        int colCount = headerCells.size();

        return rowStreamSupplier.get()
                .skip(1)
                .map(row -> {
                    List<String> cellList = workBookUtil.getStream(row)
                            .map(cell -> {
                                if(cell.getCellType() == CellType.BOOLEAN) {
                                    return Boolean.toString(cell.getBooleanCellValue());
                                }
                                if(cell.getCellType()== CellType.NUMERIC){
                                    if(headerCells.get(cell.getColumnIndex()).equals("date_of_birth")) {
                                        return new SimpleDateFormat("dd-MM-yyyy HH:mm").format(cell.getDateCellValue());
                                    }
                                    else if (headerCells.get(cell.getColumnIndex()).equals("phone")) {
                                        DataFormatter fmt = new DataFormatter();
                                        return fmt.formatCellValue(cell);
                                    }
                                    else {
                                        DataFormatter fmt = new DataFormatter();
                                        return fmt.formatCellValue(cell);
                                    }
                                }
                                else{
                                    return cell.getStringCellValue();
                                }
                            })
                            .collect(Collectors.toList());

                    return workBookUtil.cellIteratorSupplier(colCount)
                            .get()
                            .collect(toMap(headerCells::get, cellList::get));
                })
                .collect(Collectors.toList());
    }
}
