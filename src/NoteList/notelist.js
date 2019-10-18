import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/note';
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
            <section id='noteSection'>
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
                <Link 
                    to={'/add-note'}
                    className="button" 
                    id='addNote'
                >
                    Add note
                </Link>
            </section>
        )
    }
}
