import { Modal, Form, Button } from "react-bootstrap";

function CreateTask({show, onClose}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task submit");
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
                        <Form.Control type="text" name="task" placeholder="Enter a task..." />
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