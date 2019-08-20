import React from "react"
import classes from "./SideBar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";

function SideBar() {
    return (
        <div className={classes.SideBar}>
            <NavigationItems />
        </div>
    )
}

export default SideBar;