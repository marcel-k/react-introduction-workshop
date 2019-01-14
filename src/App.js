import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className={'container'}>
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
