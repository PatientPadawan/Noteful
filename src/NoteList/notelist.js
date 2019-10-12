import React from 'react';
import Note from '../Note/note';
import AddNote from '../AddNote/addnote'
import './notelist.css';

export default function NoteList(props) {
    return (
      <section>
            <ul className='noteList'>
            {props.notes.map(note =>
                <li key={note.id} className='note'>
                <Note
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                />
                </li>
            )}
            </ul>
            <AddNote />
        </section>
    )
}
