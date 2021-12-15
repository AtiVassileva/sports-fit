import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    title,
    text,
    show,
    onClose,
    onSave,
    saveButtonClass,
    saveButtonText
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{text}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant={saveButtonClass} onClick={onSave}>{saveButtonText}</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;