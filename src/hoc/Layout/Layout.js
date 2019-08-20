import React, { useState } from "react";
import classes from "./Layout.module.scss"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideBar from "../../components/Navigation/SiderBar/SideBar";

function Layout(props) {

    const [showSideBar, setSideBar] = useState(false);

    function showSideBarHandler() {
        setSideBar(!showSideBar)
    }
    let sideBar = null;
    if (showSideBar) {
        sideBar = (
            <div className={classes.SideBar}>
                <SideBar show={showSideBar} />
            </div>
        );
    }

    return (
        <div className={classes.Layout}>
            <div className={classes.Toolbar}>
                <Toolbar showSideBar={showSideBarHandler} />
            </div>
            {sideBar}
            <div className={classes.Content}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;