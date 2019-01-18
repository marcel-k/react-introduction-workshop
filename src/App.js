import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MenuContentContainer from './components/menu-content-container/MenuContentContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className={'container'}>
        <Header />
        <MenuContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
