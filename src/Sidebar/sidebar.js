import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FolderList from '../FolderList/folderlist';
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <div className='sideBar'>
                <FolderList />
                <Link
                    to={'/add-folder'} 
                    className="button" 
                    id='addFolder'
                >
                    Add folder
                </Link>
            </div>
        )
    }
}

export default SideBar;