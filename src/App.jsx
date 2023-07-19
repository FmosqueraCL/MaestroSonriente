import React from 'react';
import { initializeApp } from "../node_modules/firebase/app";
import { getAnalytics } from "../node_modules/firebase/analytics";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import LobbyScreen from './screens/LobbyScreen';


const firebaseConfig = {
  apiKey: "AIzaSyBkjvoCOEUn6ZydY6_QVzTp6_zx4qmSnfU",
  authDomain: "maestro-sonriente.firebaseapp.com",
  projectId: "maestro-sonriente",
  storageBucket: "maestro-sonriente.appspot.com",
  messagingSenderId: "496082291418",
  appId: "1:496082291418:web:07d71818c2c79ead65b3e3",
  measurementId: "G-7V51Q5BFQD"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/lobby" component={LobbyScreen} />
      </Switch>
    </Router>
  );
}

export default App;

