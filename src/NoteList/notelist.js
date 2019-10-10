import React, { Component } from 'react';
import Note from '../Note/note';
import AddNote from '../AddNote/addnote'
import './notelist.css';

class NoteList extends Component {
    render() {
        return (
            <div className='noteList'>
                {Array.apply(0, Array(4)).map(function (x, i) {
                    return <Note key={i} noteNumber={i}/>;
                })}
                <AddNote />
            </div>
        )
    }
}

export default NoteList;
