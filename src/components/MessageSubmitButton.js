import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

import {pushMessage} from '../firebase'

const MessageSubmitButton = ({name, setText, text}) => {
    return (
        <IconButton disabled={text===''} onClick={()=>{
            pushMessage({name:'gyoku',text});
            setText('');
        }}>
            <SendIcon></SendIcon>
        </IconButton>
    );
}

export default MessageSubmitButton;