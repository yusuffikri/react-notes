import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Notes = () => {
  return (
    <section>
    <header className="notes__header">
      <h2>My Notes</h2>
      <input type="text" autoFocus placeholder="Keyword..." />
      <button className="btn"><BsSearch/></button>
    </header>
    <div className="notes__container"></div>
    </section>
  )
}

export default Notes