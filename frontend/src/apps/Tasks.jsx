import { useState } from "react";
import CreateTask from "../forms/CreateTask";

function Tasks() {
    const [create, setCreate] = useState(false);

    return (
        <>
            <div className="d-flex flex-column">
                <div className="p-1 d-flex flex-row justify-content-around">
                    <div>Task App</div>
                    <button
                        onClick={() => setCreate(true)}
                        className="btn btn-primary"
                    >
                        + Add Task
                    </button>
                </div>
                <div>
                    Tasks
                </div>
            </div>
            {
                create && <CreateTask 
                    show={() => setCreate(true)} 
                    onClose={() => setCreate(false)}
                />
            }
        </>
    )
}

export default Tasks;