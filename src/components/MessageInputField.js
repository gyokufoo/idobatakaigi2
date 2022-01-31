import React from "react";
import { Box } from "@mui/system";
import { Grid, Avatar } from "@mui/material";

import {gravatarPath} from "../gravatar"

const MessageInputField = ({name}) => {
    const avatarPath = gravatarPath(name);
    return (
        <Box sx={{gridRow:2,margin:"26px"}}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath}/>
                </Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
    );
}

export default MessageInputField;