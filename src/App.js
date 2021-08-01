import React from 'react';

import { Header } from './components';
import { Footer } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
