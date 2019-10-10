import React, { Component } from 'react';
import NoteList from '../NoteList/notelist';
import AddNote from '../AddNote/addnote';

class Main extends Component {
    render() {
        return (
            <div>
                <NoteList />
                <AddNote />
            </div>
        )
    }
}

export default Main;