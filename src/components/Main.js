import React from 'react';
import { Box } from '@mui/system';
import MessageList from './MessageList';
import MessageInputField from './MessageInputField';

const Main = ({name}) => {
    return (
        <Box
            sx={{
                display:'grid',
                height:'100vh',
                gridTemplateRows: '1fr auto'
            }}
        >
            <MessageList></MessageList>
            <MessageInputField name={name}></MessageInputField>
        </Box>
    )
}

export default Main;