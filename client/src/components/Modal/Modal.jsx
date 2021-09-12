import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_BIKE } from '../../utils/mutations';

function MyModal (props) {

    const {show, onClose, shockHours, forkHours, cassetteMiles, chainMiles, chainringMiles, frontDeraileurMiles, rearDeraileurMiles, _id} = props;

    const [bikeData, setBikeData] = useState({
        shockHours: shockHours,
        forkhours: forkHours,
        cassetteMiles: cassetteMiles,
        chainMiles: chainMiles,
        chainringMiles: chainringMiles,
        frontDeraileurMiles: frontDeraileurMiles, 
        rearDeraileurMiles: rearDeraileurMiles
    });

    const [updateBike] = useMutation(UPDATE_BIKE, {
        variables: { _id: _id }
    });

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