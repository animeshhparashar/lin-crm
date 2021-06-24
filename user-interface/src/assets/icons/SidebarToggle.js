import React from "react";

import { BiLeftArrowAlt,BiRightArrowAlt } from "react-icons/all";

const SidebarToggle = (props) => {
    return (
        <BiLeftArrowAlt className={"toggle-icon " + props.className}  onClick = {props.onClick}/>
    );
}

export default SidebarToggle;