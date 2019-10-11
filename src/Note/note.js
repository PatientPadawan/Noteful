import React from 'react';
import { Link } from 'react-router-dom';
import './note.css';

export default function Note(props) {
    const dateObject = new Date(props.modified)
    const options = { day: 'numeric', year: 'numeric', month: 'short'}
    const date = dateObject.toLocaleString(['en-GB'], options)
    return (
        <div className='note'>
            <h2 className='noteTitle'>
                <Link to={`/note/${props.id}`} className='linkNote'>
                    {props.name}
                </Link>
            </h2>
            <div className='descriptionContainer'> 
                Date modified on {date}
                <button className='button' id='note'>
                    Delete Note
                </button>
            </div>
        </div>
    )
}