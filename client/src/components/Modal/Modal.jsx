import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_BIKE } from '../../utils/mutations';

function MyModal (props) {

    const {show, onClose, shockHours, forkHours, cassetteMiles, chainMiles, chainringMiles, frontDeraileurMiles, rearDeraileurMiles, _id} = props;

    const [bikeData, setBikeData] = useState({
        shockHours: Number(shockHours),
        forkhours: Number(forkHours),
        cassetteMiles: Number(cassetteMiles),
        chainMiles: Number(chainMiles),
        chainringMiles: Number(chainringMiles),
        frontDeraileurMiles: Number(frontDeraileurMiles), 
        rearDeraileurMiles: Number(rearDeraileurMiles)
    });

    const [updateBike] = useMutation(UPDATE_BIKE, {
        variables: { _id: _id }
    });

    const handleFormSubmit = async event => {
        event.preventDefault();

        let rideTime = Number(document.getElementById('ride-time').value);
        let rideDistance = Number(document.getElementById('ride-distance').value);
        console.log(rideTime);
        console.log(rideDistance);
    }

    return(
        <Modal show={show} centered>
            {console.log(bikeData)}
                <form onSubmit={handleFormSubmit}>
            <Modal.Title>Add Ride Details</Modal.Title>
            <Modal.Body>
                    <Row>
                        <Col>
                            <h5>Ride Time:</h5>
                            <input type="number" id='ride-time' placeholder="Hours rounded to nearest hour" />
                        </Col>
                        <Col>
                            <h5>Ride Distance:</h5>
                            <input type="number" id='ride-distance' placeholder="Miles rounded to nearest full mile" />
                        </Col>
                    </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" variant='primary'>Submit</Button>
                <Button onClick={onClose}>Add Ride</Button>
            </Modal.Footer>
                </form>
        </Modal>

    )
}

export default MyModal;