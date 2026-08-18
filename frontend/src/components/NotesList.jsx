import { useState } from "react";

function NotesList({ notes }) {
    const [deleteWarning, setDeleteWarning] = useState(false);
    const [noteId, setNoteId] = useState("");
    const [note, setNote] = useState("");

    const handleDeleteWarning = (noteId, note) => {
        setNoteId(noteId);
        setNote(note);
        setDeleteWarning(true);

        console.log("Deleting:");
        console.log("id: " + noteId);
        console.log("note: " + note);
    }

    const handleDelete = () => {

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
        </>
    )
}

export default NotesList;