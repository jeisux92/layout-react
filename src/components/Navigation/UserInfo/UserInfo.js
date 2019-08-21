import React from "react"
import classes from "./UserInfo.module.scss";

function UserInfo(props) {
    return (
        <div className={classes.UserInfo} onClick={props.onClosed.bind(this)}>
            <p>Gabriel Martinez</p>
        </div>
    )
}

export default UserInfo;