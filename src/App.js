import React, { Component } from 'react';
import DATASTORE from './DATASTORE';
import Header from './Header/header';
import SideBar from './Sidebar/sidebar';
import Main from './Main/main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {DATASTORE}
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>        
          <SideBar />
          <Main />
        </main>
      </div>
    );
  }
}

export default App;