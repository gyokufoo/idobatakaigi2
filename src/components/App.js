import React, {useState} from 'react';
import SignIn from './SignIn';
import Main from './Main';
import config from "../config.json";

export default () => {
  const [name, setName] = useState('');
  if (name==='' && config.signInEnabled === true){
    return <SignIn setName={setName}></SignIn>;
  }else{
    return <Main name={name}></Main>
  }
};
