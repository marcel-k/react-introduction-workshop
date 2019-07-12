import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className={'container'}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
