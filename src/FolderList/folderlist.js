import React, { Component } from 'react';
import Folder from '../Folder/folder';
import './folderlist.css'

class FolderList extends Component {
    render() {
        return (
            <div className='folderList'>
                {Array.apply(0, Array(3)).map(function (x, i) {
                    return <Folder key={i} folderNumber={i}/>;
                })}
            </div>
        )
    }
}

export default FolderList;