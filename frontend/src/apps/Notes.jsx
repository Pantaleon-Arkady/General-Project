import { useState } from "react";
import CreateNotes from "../forms/CreateNotes";

function Notes() {
    const [create, setCreate] = useState(false);

    return (
        <>
            <div className="border border-2 border-danger">
                <div className="border border-2 border-primary d-flex justify-content-center p=1">
                    <button 
                        className="btn btn-primary m-1"
                        onClick={() => setCreate(true)}
                    >
                        Add Notes
                    </button>
                </div>
                <div className="p-2">
                    Notes List Div
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