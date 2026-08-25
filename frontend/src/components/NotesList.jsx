import { useState } from "react";
import DeleteWarning from "./DeleteWarning";
import axios from "axios";
import EditNotes from "../forms/EditNotes";

function NotesList({ notes, refresh }) {
    const [deleteWarning, setDeleteWarning] = useState(false);
    const [edit, setEdit] = useState(false);
    const [noteId, setNoteId] = useState("");
    const [note, setNote] = useState("");

    const handleEdit = (noteId, note) => {
        setEdit(true);
        setNoteId(noteId);
        setNote(note);
    }

    const handleDeleteWarning = (noteId, note) => {
        setNoteId(noteId);
        setNote(note);
        setDeleteWarning(true);
    }

    const handleDelete = async() => {
        console.log("Deleting:");
        console.log(noteId);
        console.log(note);

        try {
            const res = await axios.post('/delete-note', {noteId: noteId});

            if (res.data.stat) {
                console.log("Deletion success");
                setDeleteWarning(false);
                refresh();
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    return (
        <>
            {notes.map((note, i) => (
                <div
                    key={i}
                    className="notes_list_div bg-white rounded border-start border-3 border-warning mb-3 py-1 px-2 d-flex justify-content-between"
                >
                    <div className="align-content-center">
                        <span className="fw-bold">{note.title ? note.title : "Untitled"}</span> - {note.note}
                    </div>

                    <div className="notes_mod_div">
                        <button
                            onClick={() => handleEdit(note.id, note.note)}
                            className="btn btn-outline-primary mx-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteWarning(note.id, note.note)}
                            className="btn btn-outline-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            { deleteWarning && 
                <DeleteWarning
                    show={deleteWarning}
                    onClose={() => setDeleteWarning(false)}
                    deleteId={noteId}
                    deleteName={note}
                    onDelete={() => handleDelete()}
                /> 
            }

            { edit &&
                <EditNotes
                    show={edit}
                    onClose={() => setEdit(false)}
                    noteId={noteId}
                    note={note}
                    refresh={() => refresh()}
                />
            }
        </>
    )
}

export default NotesList;