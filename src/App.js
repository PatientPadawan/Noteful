import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotefulContext from './notefulcontext';
import Header from './Header/header';
import SideBar from './Sidebar/sidebar';
import NotePageNav from './NotePageNav/NotePageNav';
import Main from './Main/main';
import AddNote from './AddNote/addnote';
import AddFolder from './AddFolder/addfolder';
import NotePage from './NotePage/notepage';
import config from './config';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
  }
  
  renderNavRoutes() {
    return (
        <>
          {['/', '/folder/:folderId'].map(path => (
            <Route
              exact
              key={path}
              path={path}
              component={SideBar}
            />
          ))}
          <Route path="/note/:noteId" component={NotePageNav}/>
          <Route path="/add-folder" component={AddFolder} />
          <Route path="/add-note" component={AddNote} />
        </>
    );
  }

  renderMainRoutes() {
    return (
        <>
          {['/', '/folder/:folderId'].map(path => (
              <Route
                  exact
                  key={path}
                  path={path}
                  component={Main}
              />
          ))}
          <Route path="/note/:noteId" component={NotePage}/>
        </>
    );
  }





  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    }

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className='App'>
          <header>
            <Header />
          </header>
          <main>       
            {this.renderNavRoutes()}
            {this.renderMainRoutes()}
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;