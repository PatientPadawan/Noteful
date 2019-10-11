import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
          <Route 
            exact 
            path='/'
            render={() =>
              <SideBar 
                folderList={this.state.DATASTORE.folders}
              />
            }
          />
          <Route
            exact
            path='/'
            render={() =>
              <Main 
                noteList={this.state.DATASTORE.notes}
              />
            }
          />
        </main>
      </div>
    );
  }
}

export default App;