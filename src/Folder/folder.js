import React from 'react';
import './folder.css';

export default function Folder(props) {
    return (
        <div className='folder'>
           Folder {props.folderNumber + 1}
        </div>
    )
}