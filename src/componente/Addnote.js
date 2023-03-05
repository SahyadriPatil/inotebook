import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
    const context = useContext(noteContext);
    const {  addNote } = context;

    const [note,setNote] = useState({title:"", description:"",tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"", description:"",tag:""});
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3 my-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title'  aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">tag</label>
                    <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} minLength={5} required/>
                </div>

                <button disabled = {note.title.length<5||note.title.description<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default Addnote


// const Addnote = () => {
//     const context = useContext(noteContext);
//     const {addNote} = context
//     const [note, setNote] = useState({title:"", description:"", tag:""})
//     const handleClick=(e)=>{
//       e.preventDefault()
//         addNote(note.title,note.description,note.tag);
//     }
//     const onChange=(e)=>{
//         setNote({...note , [e.target.name]:e.target.value
//         })
//     }
//   return (
//     <div>
//       <h1>Add Notes</h1>
//       <form>
//   <div className="mb-3">
//     <label htmlFor="title" className="form-label">Title</label>
//     <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange
//     }/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="description" className="form-label">Description</label>
//     <input type="text" className="form-control" id="description" name='description' onChange={onChange
//     }/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="Tag" className="form-label">Tag</label>
//     <input type="Tag" className="form-control" id="Tag" name='description' onChange={onChange
//     }/>
//   </div>
//   <div className="mb-3 htmlForm-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
// </form>  
//     </div>
//   )
// }

// export default Addnote
