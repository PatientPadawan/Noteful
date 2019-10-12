import React from 'react'
import './NotePageNav.css'

export default function NotePageNav(props) {
  return (
    <div className='notePageNav'>
      <button
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        id='backButton'
        className='button'
      >
      Back
      </button>
      {props.folder && (
        <h2 className='folderName'>
          {props.folder.name}
        </h2>
      )}
    </div>
  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}