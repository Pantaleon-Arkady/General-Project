import { Modal, Form, Button } from "react-bootstrap";

function EditNotes({ show, onClose, noteId, note}) {

    return (
        <>
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Editing note with id {noteId}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="note"
                                value={note}
                            />
                        </Form.Group>
                        <div>

                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditNotes;