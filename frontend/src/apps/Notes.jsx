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
            <div className="app_page">

                <div className="app_header d-flex flex-row justify-content-center p=1">
                    <div className="align-content-center mx-5 fs-5">
                        Notes Page
                    </div>
                    <button 
                        className="btn btn-primary m-3"
                        onClick={() => setCreate(true)}
                    >
                        + Add Notes
                    </button>
                </div>

                <div className="app_list_main_div p-2 d-flex flex-column bg-light">
                    <NotesList
                        notes={notes}
                        refresh={fetchNotes}
                    />
                </div>

            </div>

            <CreateNotes
                show={create}
                onClose={() => setCreate(false)}
                refresh={fetchNotes}
            />
        </>
    )
}

export default Notes;