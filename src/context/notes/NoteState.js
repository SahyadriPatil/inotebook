import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    // const s1 = {
    //     "name":"sai",
    //     "clas":"TYA"
    // }
    // const [state,setState]=useState(s1);

    // const update=()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"Sushant",
    //             "class":"bcom"
    //         })
    //     },1000)
    // }
     const initialnotes = [
        {
            "_id": "63fjjc480f8300d26f0ccbc54f",
            "user": "63fb876a6136ec026da98df6",
            "title": "stgg note",
            "description": "weakhhh up early",
            "tag": "1st",
            "__v": 0
        },
        {
            "_id": "63fckl56957f1880c079225a48",
            "user": "63fb876a6136ec026da98df6",
            "title": "stgg note",
            "description": "weakhhh up early",
            "tag": "1st",
            "__v": 0
        },
        {
            "_id": "63fffc480f8300d26f0ccbc54f",
            "user": "63fb876a6136ec026da98df6",
            "title": "stgg note",
            "description": "weakhhh up early",
            "tag": "1st",
            "__v": 0
        },
        {
            "_id": "63kkfc56957f1880c079225a48",
            "user": "63fb876a6136ec026da98df6",
            "title": "stgg note",
            "description": "weakhhh up early",
            "tag": "1st",
            "__v": 0
        }
        ,
        {
            "_id": "63fhhhhc480f8300d26f0ccbc54f",
            "user": "63fb876a6136ec026da98df6",
            "title": "stgg note",
            "description": "weakhhh up early",
            "tag": "1st",
            "__v": 0
        },
        {
            "_id": "63fyyc56957f1880c079225a48",
            "user": "63fb876a6136ec026da98df6",
            "title": "stgg note",
            "description": "weakhhh up early",
            "tag": "1st",
            "__v": 0
        }
    ]
    //       import { useState } from "react";
    // import NoteContext from "./noteContext";
    // const NoteState = (props) => {
    //     const host = "http://localhost:5000"
    //     const notesInitial = []
    // const [notes, setNotes] = useState( initialnotes)
    //     //get all notes
    //     // const getNotes = async () => {

    //     //     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    //     //         method: "GET",
    //     //         headers: {
    //     //             "Content-Type": "application/json",
    //     //             "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmY2I4ZjM3OTVkNzdjOTU4M2Q1ZDRkIn0sImlhdCI6MTY3NzUwNzY0Nn0.OR_329GxpOQr-x-z6PizotNqhdLLjGLMdBBZlZj3x7Y"
    //     //         },
    //     //     });
    //     //     const json = await response.json();
    //     //     console.log(json)
    //     //     setNotes(json)
    //     // }
    //     //Add note
    //     const addNote = async (title, description, tag) => {

    //         const response = await fetch(`${host}`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmY2I4ZjM3OTVkNzdjOTU4M2Q1ZDRkIn0sImlhdCI6MTY3NzUwNzY0Nn0.OR_329GxpOQr-x-z6PizotNqhdLLjGLMdBBZlZj3x7Y"

    //             },
    //             body: JSON.stringify({ title, description, tag })
    //         });
    //         const json = await response.json();
    //         console.log(json)

    //         console.log("adding a new note")
    //         const note = {
    //             "_id": "63fcc153f942122cc318f27e",
    //             "user": "63fcb8f3795d77c9583d5d4d",
    //             "title": title,
    //             "description": description,
    //             "tag": tag,
    //             "date": "2023-02-27T14:42:27.029Z",
    //             "__v": 0
    //         }
    //         setNotes(notes.concat(note))
    //     }

    //     //Edit Note

    //     const editNote = async (id, title, description, tag) => {
    //         //API call
    //         const response = await fetch(`${host}/api/nodes/updatenote/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYjg3NmE2MTM2ZWMwMjZkYTk4ZGY2In0sImlhdCI6MTY3NzQyODU4Nn0.rXFaZkmp3rq7o07wd7E6jn91Vr6fu1C5l4Iz5fB0niA"

    //             },
    //             body: JSON.stringify(title, description, tag)
    //         });
    //         const json = await response.json();
    //         console.log(json)

    //         let newNotes = JSON.parse(JSON.stringify(notes))
    //         //logic to edit the client
    //         for (let index = 0; index < newNotes.length; index++) {
    //             const element = newNotes[index];
    //             if (element._id === id) {
    //                 newNotes[index].title = title;
    //                 newNotes[index].description = description;
    //                 newNotes[index].tag = tag;
    //                 break;

    //             }
    //             setNotes(newNotes);
    //         }
    //     }

    //     //Delete Note
    //     const deleteNote = async (id) => {
    //         //API call
    //         //API call
    //         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYjg3NmE2MTM2ZWMwMjZkYTk4ZGY2In0sImlhdCI6MTY3NzQyODU4Nn0.rXFaZkmp3rq7o07wd7E6jn91Vr6fu1C5l4Iz5fB0niA"

    //             },
    //         });
    //         const json = response.json();
    //         console.log(json);

    //         console.log("deleting a node with id" + id);
    //         const newNotes = notes.filter((note) => { return note._id !== id })
    //         setNotes(newNotes);
    //     }




    //     return (
    //         <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
    //             {props.children}
    //         </NoteContext.Provider>
    //     )
    // }

    // export default NoteState;
    const [notes, setnotes] = useState(initialnotes)

    // Add Notes

    const addNote = async (title, description, tag) => {
        //API call

        const responce = await fetch("http://localhost:5000/api/nodes/addnodes", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYjg3NmE2MTM2ZWMwMjZkYTk4ZGY2In0sImlhdCI6MTY3NzQyODU4Nn0.rXFaZkmp3rq7o07wd7E6jn91Vr6fu1C5l4Iz5fB0niA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = await responce.json();
        // console.log(json);
        
        console.log("Adding a new note")
        // const note = {
        //     "_id": "640443431a4d78333f84e5720",
        //     "user": "6404450d06f6a7959c3a3d510",
        //     "title": "sahyadri patil",
        //     "description": "descriptionjjjj",
        //     "tag": "tag",
        //     "__v": 0
        // }
        const note = await responce.json();
        setnotes(notes.concat(note))
        //setnotes(notes.concat(note))
    }

    //Delete Notes
    const deleteNote = (id) => {
        console.log("deleting note with id" + id);
        const newNote = notes.filter((note) => { return note._id !== id; });
        setnotes(newNote);

    }

    //Edit notes
    const editNotes = async (id, title, description, tag) => {

        //API call
        const responce = await fetch(`${host}/api/nodes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYjg3NmE2MTM2ZWMwMjZkYTk4ZGY2In0sImlhdCI6MTY3NzQyODU4Nn0.rXFaZkmp3rq7o07wd7E6jn91Vr6fu1C5l4Iz5fB0niA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = responce.json();

        //Logic to added in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                
            }


        }

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNotes }}>
            {
                props.children
            }
        </NoteContext.Provider>)
}
export default NoteState;