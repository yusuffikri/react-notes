import { Link } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import { useState } from "react";

const CreateNote = () => {
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');

  return (
<section>
  <header className="create-note__header">
    <Link to="/" className="btn"><IoIosArrowBack/></Link>
    <button className="btn lg primary">Save</button>
  </header>
  <form  className="create-note__form">
    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle (e.target.value)} autoFocus />
    <textarea rows="28" placeholder="Note details..." value={details} onChange={(e) => setDetails (e.target.value)}  ></textarea>
  </form>
</section>
  )
}

export default CreateNote