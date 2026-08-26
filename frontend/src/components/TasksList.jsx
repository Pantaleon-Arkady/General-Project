import { useState } from "react";
import DeleteWarning from "./DeleteWarning";

function TasksList({tasks}) {
    const [deleteWarning, setDeleteWarning] = useState(false);
    const [taskFocus, setTaskFocus] = useState({});

    const handleDeleteWarning = (task) => {
        setTaskFocus(task);
        setDeleteWarning(true);
    }

    const handleDelete = () => {
        console.log("Deleting...");
        setDeleteWarning(false);
    }

    return (
        <>
            <div className="d-flex flex-column p-2">
                {tasks.map((task, i) => (
                    <div
                        key={i}
                        className={`${task.isDone === true ? "finished_tasks" : "unfinished_tasks"} tasks_list_div`}
                    >
                        <span>{task.task}</span>
                        <div>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteWarning(task)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {deleteWarning && 
            <DeleteWarning 
                show={() => setDeleteWarning(true)}
                onClose={() => setDeleteWarning(false)}
                deleteName={taskFocus.task}
                onDelete={handleDelete}
            />}
        </>
    )
}

export default TasksList;