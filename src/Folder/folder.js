import React from 'react';
import './folder.css';

export default function Folder(props) {
    return (
        <li className='folder'>
           {props.folderName}
        </li>
    )
}