import { useState } from "react";
import DeleteWarning from "./DeleteWarning";
import axios from "../api/axios";

function TasksList({tasks, userId}) {
    const [deleteWarning, setDeleteWarning] = useState(false);
    const [taskFocus, setTaskFocus] = useState({});

    const handleDeleteWarning = (task) => {
        setTaskFocus(task);
        setDeleteWarning(true);
    }

    const handleDelete = async() => {
        
        const deleteData = {
            task_id: taskFocus.id,
            user_id: userId
        }

        try {
            const res = await axios.post('/delete-task', deleteData );

            if (res.data.stat) {
                console.log("Delete success");
                // setDeleteWarning(false);
            }
        } catch (err) {
            console.log(err.response)
        }
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