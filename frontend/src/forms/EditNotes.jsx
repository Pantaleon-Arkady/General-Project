import { Modal, Form, Button } from "react-bootstrap";
import axios from "../api/axios";
import { useState } from "react";

function EditNotes({ show, onClose, noteId, note, refresh}) {
    const [newNote, setNewNote] = useState(note);

    const handleUpdate = async(e) => {
        e.preventDefault();
        const updateData = {
            noteId: noteId,
            note: newNote
        }

        try {
            const res = await axios.post('/update-note', updateData);

            if (res.data.stat) {
                console.log(res.data);
                refresh();
                onClose();
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    return (
        <>
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Editing note with id {noteId}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={handleUpdate}
                    >
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="note"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                            />
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
        </>
    )
}

export default EditNotes;