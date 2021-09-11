import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function MyModal (props) {

    const {show, onClose} = props;

    return(
        <Modal show={show} centered>
            <Modal.Title>Add Ride Details</Modal.Title>
            <Modal.Body>
                <form>
                    <Row>
                        <Col>
                            <h5>Ride Time:</h5>
                            <input type="text" placeholder="Hours" />
                        </Col>
                        <Col>
                            <h5>Ride Distance:</h5>
                            <input type="text" placeholder="Miles" />
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>Add Ride</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default MyModal;