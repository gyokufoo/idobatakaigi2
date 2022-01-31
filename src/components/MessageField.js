import React, { useState } from "react";
import { TextField } from "@mui/material";

const MessageField = ({setText,text,name}) => {
    const [isComposed, setIsComposed] = useState(false);
    console.log({text});
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
                console.log("push message to firebase");
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