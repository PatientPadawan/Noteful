import React, { Component } from 'react';
import NoteList from '../NoteList/notelist';
import './main.css';

class Main extends Component {
    render() {
        return (
            <div className="mainContainer">
                <NoteList history={this.props.history} notes={this.props.notes}/>
            </div>
        )
    }
}

export default Main;