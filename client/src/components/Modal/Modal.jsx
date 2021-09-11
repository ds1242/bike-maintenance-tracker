import React from 'react';
import { Modal, Button } from 'react-bootstrap'

function MyModal (props) {

    const {show, onClose} = props;

    return(
        <Modal show={show} centered>
            <Modal.Title>Modal Opens</Modal.Title>
            <Modal.Footer>
                <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default MyModal;