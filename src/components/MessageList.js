import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { messagesRef } from "../firebase";
import { limitToLast, onValue, orderByKey, query } from "firebase/database";
import { List } from "@mui/material";
import MessageItem from "./MessageItem";

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        onValue(
            query(
                messagesRef,
                orderByKey(),
                limitToLast(20)
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
    return (
        <List sx={{gridRow:1, width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflow:"auto"}}>
            {
                messages.map(({key, name, text}) => {
                    return  <MessageItem key={key} name={name} text={text}>MessageItem</MessageItem>
                })
            }
        </List>
    )
}

export default MessageList;