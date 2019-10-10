import React from 'react';
import './note.css';

export default function Note() {
    return (
        <div className='note'>
            <h1>Note 1</h1>
            Date modified on 3rd Jan 2019
            <button className='button'>
                Delete Note
            </button>
        </div>
    )
}