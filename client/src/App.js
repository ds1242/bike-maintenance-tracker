// import logo from './logo.svg';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import './App.css';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Nav from './components/Nav'


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Router>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
