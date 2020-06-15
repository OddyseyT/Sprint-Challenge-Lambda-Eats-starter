import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import {Button, Navbar, Card, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';
import Orderform from './components/Orderform';

import './App.css';

const App = () => {
  return (
    <>
    <Navbar color="info">
    <h1 style={{color: "white"}}>Lambda Eats</h1>
    <Link to={"/"}>
        <Button color="info">
          Home
        </Button>
      </Link>
      </Navbar>
      <Route exact path='/'>
        <Card>
          <CardImg src={require('./Assets/Pizza.jpg')} />
          <Link to={'/pizza'}>
            <Button color="info" style={{position: 'absolute', left: '50%', top: '50%'}}>
              Pizza!
              </Button>
        
            </Link>
        </Card>
        </Route>
        <Route path="/pizza">
          <Orderform />
        </Route>
    </>
  );
};
export default App;
