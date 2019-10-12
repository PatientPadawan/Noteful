import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DATASTORE from './DATASTORE';
import Header from './Header/header';
import SideBar from './Sidebar/sidebar';
import NotePageNav from './NotePageNav/NotePageNav';
import Main from './Main/main';
import AddNote from './AddNote/addnote';
import AddFolder from './AddFolder/addfolder';
import NotePage from './NotePage/notepage';
import {getNotesForFolder, findNote, findFolder} from './notes-helpers';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(DATASTORE), 600);
  }
  
  renderNavRoutes() {
    const {notes, folders} = this.state;
    return (
        <>
        {['/', '/folder/:folderId'].map(path => (
            <Route
                exact
                key={path}
                path={path}
                render={routeProps => (
                    <SideBar
                        folders={folders}
                        notes={notes}
                        {...routeProps}
                    />
                )}
            />
        ))}
            <Route
                path="/note/:noteId"
                render={routeProps => {
                    const {noteId} = routeProps.match.params;
                    const note = findNote(notes, noteId) || {};
                    const folder = findFolder(folders, note.folderId);
                    return <NotePageNav {...routeProps} folder={folder} />;
                }}
            />
            <Route path="/add-folder" component={AddFolder} />
            <Route path="/add-note" component={AddNote} />
        </>
    );
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
        <>
            {['/', '/folder/:folderId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    render={routeProps => {
                        const {folderId} = routeProps.match.params;
                        const notesForFolder = getNotesForFolder(
                            notes,
                            folderId
                        );
                        return (
                            <Main
                                {...routeProps}
                                notes={notesForFolder}
                            />
                        );
                    }}
                />
            ))}
            <Route
                path="/note/:noteId"
                render={routeProps => {
                    const {noteId} = routeProps.match.params;
                    const note = findNote(notes, noteId);
                    return <NotePage {...routeProps} note={note} />;
                }}
            />
        </>
    );
  }





  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>       
          {this.renderNavRoutes()}
          {this.renderMainRoutes()}
        </main>
      </div>
    );
  }
}

export default App;