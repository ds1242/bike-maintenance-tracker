import React from 'react';
import { Modal, Button } from 'react-bootstrap'

function MyModal (props) {

    const {show, onClose} = props;

    return(
        <Modal show={show} centered>
            <Modal.Title>Modal Opens</Modal.Title>
        </Modal>

    )
}

export default MyModal;