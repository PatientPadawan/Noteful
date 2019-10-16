import React, { Component } from 'react';
import Folder from '../Folder/folder';
import NotefulContext from '../notefulcontext';
import './folderlist.css'

class FolderList extends Component {
    static contextType = NotefulContext;
    
    render() {
        const { folders=[] } = this.context
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