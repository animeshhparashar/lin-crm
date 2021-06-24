import React from "react";


export const TitleBar = (props) => {
    return (
        <div className="titlebar">
            <div className="titlebar-text">{props.title}</div>
            <div className="titlebar-actions">
                {props.search}
                <div className="titlebar-buttons">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export const TitleBarCondensed = (props) => {
    return(
        <div className="titlebar">
            <div className="titlebar-text">{props.title}</div>
            <div className="titlebar-actions">
                {props.children}
            </div>
        </div>
    );
}

