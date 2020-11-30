import React from 'react';
import './App.css';

// Components
import AddTransaction from './Components/AddTransaction'
import TransactionHistory from './Components/TransactionHistory';

import { GlobalProvider } from './Context/GlobalState';
import Balance from './Components/Balance';
import AccountSummary from './Components/AccountSummary';
import firebase from './firebase'
import Footer from './Components/Footer';
//import { GetToken } from './FirebaseService';
function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    messaging.getToken().then((currentToken: any) => {
      if (currentToken) {
        console.log("Token:", currentToken);
      } else {
        console.log('No Instance ID token available. Request permission to generate one.');
      }
    }).catch((err: any) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  })
  messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken: any) => {
      console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
      console.log("Refreshed Token", refreshedToken);
      // ...
    }).catch((err: any) => {
      console.log('Unable to retrieve refreshed token ', err);
    });
  });
  return (
    <GlobalProvider>

      <div className="App">
        <br />
        <br />
        <Balance />
        <br />
        <br />
        <AccountSummary />
        <br />
        <br />
        <AddTransaction />
        <br />
        <br />
        <TransactionHistory />
        <br />
        <br />

      </div>
      <Footer />
      
    </GlobalProvider>
  );
}

export default App;