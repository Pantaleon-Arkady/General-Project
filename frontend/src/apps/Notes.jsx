import { useEffect, useState } from "react";
import CreateNotes from "../forms/CreateNotes";
import { useOutletContext } from "react-router-dom";
import axios from "../api/axios";
import NotesList from "../components/NotesList";

function Notes() {
    const [create, setCreate] = useState(false);
    const [notes, setNotes] = useState([]);

    const { user } = useOutletContext();

    async function fetchNotes() {
        const userId = user.id;

        try {
            const res = await axios.get('/retrieve-notes', {
                params: {
                    userId: user?.id
                }
            });

            if (res.data.stat) {
                setNotes(res.data.notes);
                console.log("Notes data retrieval: Success!");
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    useEffect(() => {
        if (user) {
            fetchNotes();
        }
    }, [user])

    return (
        <>
            <div className="">
                <div className="d-flex justify-content-center p=1">
                    <button 
                        className="btn btn-primary m-1"
                        onClick={() => setCreate(true)}
                    >
                        Add Notes
                    </button>
                </div>
                <div className="notes_list_main_div p-2 d-flex flex-column">
                    <NotesList
                        notes={notes}
                    />
                </div>
            </div>

            <CreateNotes
                show={create}
                onClose={() => setCreate(false)}
            />
        </>
    )
}

export default Notes;