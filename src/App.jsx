import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/about/About';
import Products from './components/products/Products';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
