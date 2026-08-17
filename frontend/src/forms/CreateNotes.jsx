import { Modal, Form, Button } from "react-bootstrap";

function CreateNotes({ show, onClose }) {

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Create a Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Type your note..."
                            autoFocus
                        />
                    </Form.Group>
                    <div className="border-top border-2 border-secondary my-2 p-2 d-flex flex-row justify-content-end">
                        <Button variant="secondary" onClick={onClose}>
                            Cance
                        </Button>
                        <Button className="mx-2" variant="success">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CreateNotes;