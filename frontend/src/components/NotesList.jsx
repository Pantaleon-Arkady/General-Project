import { useState } from "react";
import DeleteWarning from "./DeleteWarning";
import axios from "axios";

function NotesList({ notes, refresh }) {
    const [deleteWarning, setDeleteWarning] = useState(false);
    const [noteId, setNoteId] = useState("");
    const [note, setNote] = useState("");

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
                    className="bg-white rounded mb-2 py-1 px-2 d-flex flex-row justify-content-between"
                >
                    <div>
                        {note.note}
                    </div>

                    <div>
                        <button
                            onClick={() => handleDeleteWarning(note.id, note.note)}
                            className="btn btn-danger"
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
        </>
    )
}

export default NotesList;