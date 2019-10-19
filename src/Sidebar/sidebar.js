import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FolderList from '../FolderList/folderlist';
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <nav className='sideBar'>
                <FolderList />
                <Link
                    to={'/add-folder'} 
                    className="button" 
                    id='addFolder'
                >
                    Add folder
                </Link>
            </nav>
        )
    }
}

export default SideBar;