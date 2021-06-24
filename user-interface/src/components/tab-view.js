import React from "react";
import {Tabs as TabsBlueprint, Tab as TabBlueprint, makeStyles, withStyles} from '@material-ui/core';


function buildProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const Tabs = withStyles({
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
        marginBottom: '-4px'
    },
    indicator: {
        backgroundColor: '#675BE8',
        height: '4px'
    }
})(TabsBlueprint);

const Tab = withStyles({
    root: {
        fontFamily: 'Brandon Text',
        fontWeight: '600',
        color: '#675BE8',
        opacity: 0.45,
        '&:hover': {
            opacity: 1
        },
        '&$selected': {
            color: '#675BE8'
        },
        '&:focus': {
            color: '#675BE8'
        }

    }
})(TabBlueprint);

const TabBar = (props) => {
    const[value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.tabChangeNotifier(newValue);
    };
    const tabs = [];
    for (let i = 0; i < props.length; i++) {
        tabs.push(
            <Tab label={props.tabs[i]} {...buildProps(i)} />
        );
    }
    return (
        <div className="tab-bar">
            <Tabs value={value} onChange={handleChange}>
                {tabs}
            </Tabs>
            {props.actions}
        </div>
    );

}


const TabView = (props) => {
    const {children, currentIndex, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={currentIndex !== index} aria-labelledby={`tab-${index}`}
             className={"tabbed-content " + (currentIndex === index ? "active": "")}>
            {props.children}
        </div>
    );
}

export {
    TabBar,
    TabView
};