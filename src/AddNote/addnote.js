import React, { Component } from 'react';
import ValidationError from '../validationerror';
import config from '../config';
import './addnote.css';

export default class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folder: {
                value: '',
                touched: false
            },
            date: {
                value: ''
            }
        }
    }

    updateNoteName(noteName) {
        this.setState({ name: { value: noteName, touched: true }})
    }

    updateNoteContent(noteContent) {
        this.setState({ content: {value: noteContent, touched: true }})
    }

    updateNoteFolder(noteFolder) {
        this.setState({ folder: {value: noteFolder, touched: true }})
    }

    handleCancelClick = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        const { name, content, folder } = this.state;
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            body: JSON.stringify({
                "id": "",
                "name": `${name.value}`,
                "modified": "",
                "folderId": `${folder.value}`,
                "content": `${content.value}`
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => {
            if (!res.ok)
            return res.json()
        })
        .then(() => {
            this.props.history.push('/');
        })
        .catch(error => {
            console.log({ error })
        })
    }

    render() {
        return(
            <form className='addNoteForm'>
                <h2 className='addNoteHeader'>Create a new note</h2>
                <div className='addNoteInputContainer'>
                    <div className='addNoteInput'>
                        <label>Note name: </label>
                        <input
                            type='text'
                            name='noteName'
                            id='noteName'
                            onChange={e => this.updateNoteName(e.target.value)}
                        />
                    </div>
                    <div className='addNoteInput'>
                        <label>Content: </label>
                        <input
                            type='text'
                            name='noteContent'
                            id='noteContent'
                        onChange={e => this.updateNoteContent(e.target.value)}
                        />       
                    </div>
                    <div className='addNoteInput'>           
                        <label>Folder name: </label>
                        <input
                            type='text'
                            name='noteFolderName'
                            id='noteFolderName'
                            onChange={e => this.updateNoteFolder(e.target.value)}
                        />
                    </div>
                </div>
                <div className='addNoteButtonGroup'>
                    <button 
                        onClick={this.handleSubmitClick}
                        type='submit'
                        className='addNoteButton'
                        /* disabled={
                            this.validateFolderName()
                        } */
                    >
                    Submit
                    </button>
                    <button
                        onClick={this.handleCancelClick}
                        className='addNoteButton'
                    >
                    Cancel
                    </button>
                </div>
            </form>
        )
    }
}