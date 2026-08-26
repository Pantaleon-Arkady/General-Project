import axios from "../api/axios";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

function CreateTask({show, onClose}) {
    const [task, setTask] = useState("");
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Task submit");

        const taskCreationData = {
            task: task,
            user_id: user?.id
        }

        try {
            const res = await axios.post('/create-task', taskCreationData);

            if (res.data.stat) {
                console.log("Task creation success");
                console.log(res.data.task);
            }
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <Modal centered show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Create a Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="task"
                            placeholder="Enter a task..."
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </Form.Group>

                    <div className="border-top border-2 border-secondary my-2 p-2 d-flex flex-row justify-content-end">
                        <Button variant="secondary" onClick={onClose}>
                            Cance
                        </Button>
                        <Button className="mx-2" variant="success" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CreateTask;