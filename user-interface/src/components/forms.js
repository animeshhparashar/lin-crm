import React from "react";
import '../assets/scss/main.scss';
import {makeStyles, TextField} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

export function Form(props) {
    const classes = useStyles();

    return(
        <form style={props.style} className={classes.root}>
            <div className="form-body">
                {props.children}
            </div>
        </form>
    );
}

export const FormRow = (props) => {
    return (
        <div className="form-row">
            {props.children}
        </div>
    );
}

export const FormColumn = (props) => {
    return (
        <div className="form-col">
            {props.children}
        </div>
    );
}

