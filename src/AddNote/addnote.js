import React, { Component } from 'react';
import ValidationError from '../validationerror';
import NotefulContext from '../notefulcontext';
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
    static defaultProps = {
        onAddNote: () => {},
        folders: [],
    }
    static contextType = NotefulContext;
    

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
        const modified = new Date();
        const { name, content, folder } = this.state;
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            body: JSON.stringify({
                "id": "",
                "name": `${name.value}`,
                "modified": `${modified.toISOString()}`,
                "folderId": `${folder.value}`,
                "content": `${content.value}`
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e));
        })
        .then(() => {
            this.context.addNote()
            this.props.onAddNote()
            this.props.history.push('/')
        })
        .catch(error => {
            console.error({ error })
        })
    }

    validateNoteName() {
        const noteName = this.state.name.value.trim();
        if (noteName.length === 0) {
            return 'Note name is required to proceed';
        }
    }

    validateNoteContent() {
        const noteContent = this.state.content.value.trim();
        if (noteContent.length === 0) {
            return 'Note content is required to proceed';
        }
    }

    validateFolderName() {
        const folders = this.context.folders;
        const folderName = this.state.folder.value.trim();
        for (var name of folders) {
            console.log(name);
        }
    }

    render() {
        const noteNameError = this.validateNoteName();
        const noteContentError = this.validateNoteContent();
        const noteFolderError = this.validateFolderName(); 
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
                        {this.state.name.touched && <ValidationError message={noteNameError}/>}
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