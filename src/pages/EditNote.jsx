import { Link, useParams } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {RiDeleteBin6Line} from "react-icons/ri"
import { useState } from "react";

const EditNote = ({notes, setNotes}) => {

  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  return (
<section>
  <header className="create-note__header">
    <Link to="/" className="btn"><IoIosArrowBack/></Link>
    <button className="btn lg primary">Save</button>
    <button className="btn danger"><RiDeleteBin6Line/></button>
  </header>
  <form  className="create-note__form">
    <input type="text" placeholder="Title" autoFocus />
    <textarea rows="28" placeholder="Note details..."></textarea>
  </form>
</section>
  )
}

export default EditNote