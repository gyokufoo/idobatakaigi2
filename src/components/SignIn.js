import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        gyoku
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({setName}) {

  const [disabled, setDisabeld ] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState('false');
  console.log({string, disabled, isComposed});

  useEffect(()=>{
    const disabled = string === ''
    setDisabeld(disabled);
  }, [string]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(e)=>{setString(e.target.value)}}
              onKeyDown={(e)=>{
                console.log({key: e.key});
                if(isComposed) return;
                if(e.key === "Enter"){
                  setName(e.target.value)
                e.preventDefault();}
              }}
              onCompositionStart={()=>{
                setIsComposed(true);
                console.log('日本語入力始まった')
              }}
              onCompositionEnd={()=>{
                setIsComposed(false);
                console.log('日本語入力終わった')
              }}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={() => {setName(string);}}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}