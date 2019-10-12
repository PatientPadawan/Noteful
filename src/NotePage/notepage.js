import React from 'react'
import Note from '../Note/note'
import './notepage.css'

export default function NotePage(props) {
  return (
    <section className='notePage'>
      <div className='noteBox'>
        <Note
          id={props.note.id}
          name={props.note.name}
          modified={props.note.modified}
          className='note'
        />
      </div>
      <div className='notePageContent'>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}

NotePage.defaultProps = {
  note: {
    content: '',
  }
}