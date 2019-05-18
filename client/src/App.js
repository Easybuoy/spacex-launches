import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launch/Launches';

import './App.css';
import logo from './spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client} >
    <div className="container">
      <img src={logo} alt="Spacex" style={{ width: '300px', height: '150px', margin: 'auto'}} />
      <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;
