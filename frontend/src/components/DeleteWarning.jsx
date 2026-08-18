import { Modal, Button } from "react-bootstrap";

function DeleteWarning({ onDelete, deleteName, show, onClose }) {

    return (
        <>
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Deleting Note
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Note: <span className="fw-bold">{deleteName}</span>
                    </div>
                    <div className="border-top border-2 border-secondary my-2 p-2 d-flex flex-row justify-content-around">
                        <Button
                            variant="secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="danger"
                            onClick={onDelete}
                        >
                            Delete
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteWarning;