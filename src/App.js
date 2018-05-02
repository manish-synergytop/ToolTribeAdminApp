import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <Content />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
