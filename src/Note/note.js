import React from 'react';
import './note.css';

export default function Note() {
    return (
        <div className='note'>
            <h2 className='noteTitle'>Note 1</h2>
            <div className='descriptionContainer'> 
                Date modified on 3rd Jan 2019
                <button className='button' id='note'>
                    Delete Note
                </button>
            </div>
        </div>
    )
}