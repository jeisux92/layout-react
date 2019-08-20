import React from "react";
import classes from "./Toolbar.module.scss"
import UserInfo from "../UserInfo/UserInfo"
import Icon from '@material-ui/core/Icon';
import { Tooltip, IconButton } from "@material-ui/core";

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.Toggle}>
                <Tooltip title="Mostrar menú">
                    <IconButton aria-label="menú" size="medium" onClick={props.showSideBar}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Tooltip>
            </div>
            <div className={classes.UserIcon}>
                <IconButton aria-label="menú" color="primary" size="small">
                    <Icon fontSize="large" >account_circle</Icon>
                </IconButton>
            </div>
            <div className={classes.UserInfo} style={{ display: 'none', margin: '10px' }}>
                <UserInfo />
            </div>
        </div>
    )
}

export default Toolbar;