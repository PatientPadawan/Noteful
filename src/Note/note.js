import React from 'react';
import './note.css';

export default function Note(props) {
    const dateObject = new Date(props.modified)
    const options = { day: 'numeric', year: 'numeric', month: 'short'}
    const date = dateObject.toLocaleString(['en-GB'], options)
    return (
        <div className='note'>
            <h2 className='noteTitle'>{props.name}</h2>
            <div className='descriptionContainer'> 
                Date modified on {date}
                <button className='button' id='note'>
                    Delete Note
                </button>
            </div>
        </div>
    )
}