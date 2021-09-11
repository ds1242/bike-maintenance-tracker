import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function MyModal (props) {

    const {show, onClose} = props;

    return(
        <Modal show={show} centered>
            <Modal.Title>Add Ride Details</Modal.Title>
            <Modal.Body>
                <form>
                    <Col>
                        <h5>Ride Time:</h5>
                        <input type="text" placeholder="Hours" />
                    </Col>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default MyModal;