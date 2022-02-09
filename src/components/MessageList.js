import React, { useEffect, useState } from "react";
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

    const length = messages.length;

    return (
        <List sx={{gridRow:1, width: '100%', bgcolor: 'background.paper', overflow:"auto"}}>
            {
                messages.map(({key, name, text}, index) => {
                    const isLastItem = length === index + 1;
                    return  <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />
                })
            }
        </List>
    )
}

export default MessageList;