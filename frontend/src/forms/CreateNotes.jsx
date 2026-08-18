import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import axios from "../api/axios";

function CreateNotes({ show, onClose }) {
    const [note, setNote] = useState("");

    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedNote = note.trim();

        if (!trimmedNote) {
            return;
        }

        if (trimmedNote.length > 1000) {
            return;
        }

        const noteData = {
            note: trimmedNote
        }

        console.log("Note Data:");
        console.log(noteData);

        try {
            const res = await axios.post('/create-note', noteData);

            if (res.data.stat) {
                console.log(res.data.note);
                onClose();
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Create a Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Type your note..."
                            autoFocus
                            name="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            required
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

export default CreateNotes;