import React from 'react';
import { NavLink } from 'react-router-dom';
import './folder.css';

export default function Folder(props) {
    return (
        <li className='folder'>
           <NavLink 
                to={`/folder/${props.id}`} 
                className="navLink"
            >
                {props.folderName}
           </NavLink>
        </li>
    )
}