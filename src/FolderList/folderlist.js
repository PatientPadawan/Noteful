import React, { Component } from 'react';
import Folder from '../Folder/folder';
import './folderlist.css'

class FolderList extends Component {
    render() {
        const { folders } = this.props
        return (
            <ul className='folderList'>
                {folders.map(function (x, i) {
                    return (
                        <Folder 
                            key={i} 
                            id={folders[i].id} 
                            folderName={folders[i].name}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default FolderList;