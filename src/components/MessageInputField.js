import React from "react";
import { Box } from "@mui/system";
import { Grid, Avatar } from "@mui/material";

const MessageInputField = () => {
    return (
        <Box sx={{gridRow:2,margin:"26px"}}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar />
                </Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
    );
}

export default MessageInputField;