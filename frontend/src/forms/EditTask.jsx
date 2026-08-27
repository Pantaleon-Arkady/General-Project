import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function EditTask({ task, show, onClose }) {
    const [taskContent, setTaskContent] = useState(task.task);
    const [taskStatus, setTaskStatus] = useState(task.isDone);

    const handleStatusChange = (e) => {
        setTaskStatus(e.target.value === "true");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updating");
        console.log("Task: ");
        console.log(taskContent);
        console.log("Status: ");
        console.log(taskStatus);
    }

    return (
        <Modal centered show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Editing Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="task"
                            value={taskContent}
                            onChange={(e) => setTaskContent(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridState" className="mb-3">
                        <Form.Label>Change status</Form.Label>
                        <Form.Select 
                            value={String(taskStatus)} 
                            onChange={handleStatusChange}
                        >

                            <option value="" disabled>Status</option>
                            <option value="true" >Done</option>
                            <option value="false">Not Done</option>

                        </Form.Select>
                    </Form.Group>

                    <div className="border-top border-2 border-secondary my-2 p-2 d-flex flex-row justify-content-around">
                        <Button
                            onClick={onClose}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                        >
                            Update
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditTask;