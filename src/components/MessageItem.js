import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider } from "@mui/material";
import React from "react";

const MessageItem = ({key,name,text}) => {
  return (
    <ListItem divider={true} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {text}
              </Typography>
          }
        />
      </ListItem>
    )
}

export default MessageItem;