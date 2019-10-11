import React, { Component } from 'react';
import Folder from '../Folder/folder';
import './folderlist.css'

class FolderList extends Component {
    render() {
        const { folderList } = this.props
        return (
            <ul className='folderList'>
                {folderList.map(function (x, i) {
                    return (
                        <Folder 
                            key={i} 
                            id={folderList[i].id} 
                            folderName={folderList[i].name}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default FolderList;