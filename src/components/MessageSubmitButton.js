import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
        inputEl.current.focus();
      }}
    >
      <SendIcon></SendIcon>
    </IconButton>
  );
};

export default MessageSubmitButton;
