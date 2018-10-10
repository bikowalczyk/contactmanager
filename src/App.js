import React, { Component } from 'react';
import Contact from './compontents/Contact';
import Header from './compontents/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact name="Smith" email="karen@gmail.com" phone="333-333-3333" />
      </div>
    );
  }
}

export default App;
