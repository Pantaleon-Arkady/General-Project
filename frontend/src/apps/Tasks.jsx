import { useState, useEffect } from "react";
import CreateTask from "../forms/CreateTask";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

function Tasks() {
    const [create, setCreate] = useState(false);
    const { user } = useAuth();
    const [tasks, setTasks] = useState([]);

    async function fetchTasks() {

        try {
            const res = await axios.get('/retrieve-tasks', {params: { user_id: user?.id }})

            if (res.data.stat) {
                setTasks(res.data.tasks);
                console.log("Retrieved tasks successfully");
                console.log(res.data.tasks);
            }
        } catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        if (user) {
            fetchTasks();
        }

    }, [user])

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
                <div className="notes_list_main_div p-2 d-flex flex-column bg-light">
                    {tasks ? "Tasks retrieved" : "Task not retrieved"}
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