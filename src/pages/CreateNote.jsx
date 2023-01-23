import { Link } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import { useState } from "react";
import {v4 as uuid} from 'uuid';

const CreateNote = () => {
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

    if (title && details ){
    const note = {id: uuid(), title, details}
    console.log(note)
    }
  } 

  return (
<section>
  <header className="create-note__header">
    <Link to="/" className="btn"><IoIosArrowBack/></Link>
    <button className="btn lg primary" onClick={handleSubmit}>Save</button>
  </header>
  <form  className="create-note__form" onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle (e.target.value)} autoFocus />
    <textarea rows="28" placeholder="Note details..." value={details} onChange={(e) => setDetails (e.target.value)}  ></textarea>
  </form>
</section>
  )
}

export default CreateNote