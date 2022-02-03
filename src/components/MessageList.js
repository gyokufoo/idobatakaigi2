import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { messagesRef } from "../firebase";
import { limitToLast, onValue, orderByKey, query } from "firebase/database";

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        onValue(
            query(
                messagesRef,
                orderByKey(),
                limitToLast(3)
            ),
            (snapshot)=>{
                const messages = snapshot.val();
                if(messages===null) return;
                const entries = Object.entries(messages);
                const newMessages = entries.map((entry) => {
                    const [key, nameAndText] = entry;
                    return {key, ...nameAndText};
                })
                setMessages(newMessages);
            }
        )
    },[]);

    // messagesRef.on('value', (snapshot)=>{
    //     console.log(snapshot.val());
    // })
    return <Box sx={{gridRow:1}}>MessageList</Box>
}

export default MessageList;