import React, { useState } from "react";
import { TextField } from "@mui/material";
import { pushMessage } from "../firebase";

const MessageField = ({setText,text,name}) => {
    const [isComposed, setIsComposed] = useState(false);
    return (
    <TextField
        fullWidth={true}
        variant="standard"
        onChange={(e)=>(setText(e.target.value))}
        onKeyDown={(e)=>{
            if(isComposed) return;
            const text = e.target.value;
            if(text === '') return;
            if(e.key === "Enter"){
                pushMessage({name:'gyoku',text});
                setText('');
                e.preventDefault();
            }
        }}
        onCompositionStart={()=>{
            setIsComposed(true);
        }}
        onCompositionEnd={()=>{
            setIsComposed(false);
        }}
        value = {text}
    >
    </TextField>
    );
}

export default MessageField;