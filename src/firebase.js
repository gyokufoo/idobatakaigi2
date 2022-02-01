import {initializeApp} from 'firebase/app';
import {getDatabase, push, ref} from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyAW1Wt_O7MqU99oHLuhcZq1cs_U4gQarjQ",
    authDomain: "idobatakaigi2-a7196.firebaseapp.com",
    projectId: "idobatakaigi2-a7196",
    storageBucket: "idobatakaigi2-a7196.appspot.com",
    messagingSenderId: "725130924755",
    appId: "1:725130924755:web:49e12d61370d6bc39e3a26"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const messageRef = ref(database, 'messages');

  export const pushMessage = ({name, text}) => {
    push(messageRef,{name,text});

  };