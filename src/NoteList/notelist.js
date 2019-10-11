import React, { Component } from 'react';
import Note from '../Note/note';
import AddNote from '../AddNote/addnote'
import './notelist.css';

class NoteList extends Component {
    render() {
        const { noteList } = this.props
        return (
            <div className='noteList'>
                {noteList.map(function (x, i) {
                    return (
                        <Note 
                            key={i} 
                            content={noteList[i].content}
                            folderId={noteList[i].folderId}
                            id={noteList[i].id}
                            modified={noteList[i].modified}
                            name={noteList[i].name}
                        />
                    )
                })}
                <AddNote />
            </div>
        )
    }
}

export default NoteList;
