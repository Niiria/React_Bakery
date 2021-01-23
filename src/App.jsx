import React from 'react';
import './App.scss';
import {  Switch, Route, HashRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/about/About';
import Products from './components/products/Products';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
