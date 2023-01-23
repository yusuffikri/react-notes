import React from 'react'
import {BsSearch, BsPlusLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

const Notes = ({notes}) => {
  return (
    <section>
    <header className="notes__header">
      <h2>My Notes</h2>
      <input type="text" autoFocus placeholder="Keyword..." />
      <button className="btn"><BsSearch/></button>
    </header>
    <div className="notes__container">
      {
        notes.map(note => <NoteItem key={note.id} note={note}/>)
      }
    </div>
    <Link className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes