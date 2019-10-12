import React, { Component } from 'react';
import FolderList from '../FolderList/folderlist';
import AddFolder from '../AddFolder/addfolder';
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <div className='sideBar'>
                <FolderList folders={this.props.folders}/>
                <AddFolder />
            </div>
        )
    }
}

export default SideBar;