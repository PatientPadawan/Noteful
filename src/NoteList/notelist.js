import React, { Component } from 'react';
import Note from '../Note/note';
import AddNote from '../AddNote/addnote'
import NotefulContext from '../notefulcontext';
import { getNotesForFolder } from '../notes-helpers'
import './notelist.css';

export default class NoteList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotefulContext

    render() {
        const { folderId } = this.props.match.params
        const { notes=[] } = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)

        return (
            <section>
                <ul className='noteList'>
                {notesForFolder.map(note =>
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
}
