package com.lincrm.server.service;

import com.lincrm.server.model.Lead;
import com.lincrm.server.model.Opportunity;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.OpportunityRepository;
import com.lincrm.server.util.WorkBookService;

import com.lincrm.server.util.enums.OppStage;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileWriter;
import java.io.IOException;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class OpportunityService {

    @Autowired
    OpportunityRepository opportunityRepository;

    @Autowired
    LeadsService leadsService;
    @Autowired
    UserService userService;

    @Autowired
    WorkBookService workBookService;

    public void createOpportunitiesXLSX(MultipartFile file, User admin) throws IOException {
        List<Map<String, String>> data = workBookService.parseXLSXFile(file);
        Date currentDate = new Date();

        System.out.println("Creating Opportunity Records...");
        System.out.println("Found " + data.size() + " records in XLSX File");

        int counter = 1;
        for (Map<String, String> record : data){
            Lead lead = leadsService.fetchLeadInfoByName(record.get("lead_firstname"), record.get("lead_lastname"));
            User assignedTo = userService.fetchUser(record.get("assignedTo"));
            Opportunity opportunity = new Opportunity();

            opportunity.setName(record.get("units"));
            opportunity.setDescription(record.get("description"));
            opportunity.setAmount(Double.parseDouble(record.get("amount")));
            opportunity.setProbability(Double.parseDouble(record.get("probability")));
            opportunity.setType(Opportunity.Type.valueOf(record.get("type") + "_BUSINESS"));

            String stage = record.get("stage").toUpperCase().replaceAll(" ", "_");
            opportunity.setStage(OppStage.valueOf(stage));

            opportunity.setSource(lead.getSource());
            opportunity.setLead(lead);
            opportunity.setAccount(lead.getAccount());

            opportunity.setAssignedTo(assignedTo);

            opportunity.setCreatedBy(admin);
            opportunity.setCreatedOn(currentDate);

            opportunityRepository.save(opportunity);

            System.out.print("\r\r" + counter + "/" + data.size() + " records created...");
            counter++;
        }
        System.out.println("\nRecords Creation Complete...");
    }

    public void createCSVFile() throws Exception {
        List<Opportunity> opportunities = opportunityRepository.findAll();
        String[] HEADERS = {"units","amount","probability","type", "stage","source","account","assignedTo"};

        FileWriter out = new FileWriter("opp.csv");
        try(CSVPrinter printer = new CSVPrinter(out, CSVFormat.DEFAULT.withHeader(HEADERS))) {
            int counter = 1;
            for (Opportunity op :
                    opportunities) {
                printer.printRecord(
                        op.getName(),
                        op.getAmount(),
                        op.getProbability(),
                        op.getType().toString(),
                        op.getStage().toString(),
                        op.getSource().toString(),
                        op.getAccount().getName(),
                        op.getAssignedTo().getFullName());

                System.out.print("\r\r" + counter + "/" + opportunities.size() + " records created...");
                counter++;
            }
        }
    }
}
