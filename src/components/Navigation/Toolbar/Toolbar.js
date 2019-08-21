import React, { useState } from "react";
import classes from "./Toolbar.module.scss"
import UserInfo from "../UserInfo/UserInfo"
import Icon from '@material-ui/core/Icon';
import { Tooltip, IconButton } from "@material-ui/core";

const Toolbar = (props) => {
    const [userInfo, setuserInfo] = useState(false)
    let userInfoCard = null;
    const onUserInfoClose = (e) => {
        setuserInfo(false);
    }

    if (userInfo) {
        userInfoCard = (
            <div className={classes.UserInfo} >
                <UserInfo onClosed={onUserInfoClose} />
            </div>
        )
    }

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
                <IconButton aria-label="menú" color="primary" size="small" onClick={() => setuserInfo(!userInfo)}>
                    <Icon fontSize="large" >account_circle</Icon>
                </IconButton>
            </div>
            {userInfoCard}
        </div>
    )
}

export default Toolbar;