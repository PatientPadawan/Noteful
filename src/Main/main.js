import React, { Component } from 'react';
import NoteList from '../NoteList/notelist';
import './main.css';

class Main extends Component {
    render() {
        return (
            <section className="mainContainer">
                <NoteList {...this.props}/>
            </section>
        )
    }
}

export default Main;