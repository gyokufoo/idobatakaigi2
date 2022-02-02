import React, { useState } from "react";
import { Box } from "@mui/system";
import { Grid, Avatar } from "@mui/material";
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton'

import {gravatarPath} from "../gravatar"

const MessageInputField = ({name}) => {
    const[text, setText] = useState('');
    const avatarPath = gravatarPath(name);
    return (
        <Box sx={{gridRow:2,margin:"26px"}}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath}/>
                </Grid>
                <Grid item xs={10}>
                    <MessageField setText={setText} text={text} name={name}></MessageField>
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButton name={name} text={text} setText={setText}></MessageSubmitButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MessageInputField;