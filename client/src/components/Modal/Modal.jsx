import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_BIKE } from '../../utils/mutations';

function MyModal (props) {

    const {show, onClose, shockHours, forkHours, cassetteMiles, chainMiles, chainringMiles, frontDeraileurMiles, rearDeraileurMiles, _id} = props;

    const [bikeData, setBikeData] = useState({
        shockHours: shockHours,
        forkHours: forkHours,
        cassetteMiles: cassetteMiles,
        chainMiles: chainMiles,
        chainringMiles: chainringMiles,
        frontDeraileurMiles: frontDeraileurMiles, 
        rearDeraileurMiles: rearDeraileurMiles
    });

    const [updateBike] = useMutation(UPDATE_BIKE, {
        variables: { _id: _id }
    });

    const handleFormSubmit = async event => {
        event.preventDefault();

        let rideTime = Number(document.getElementById('ride-time').value);
        let rideDistance = Number(document.getElementById('ride-distance').value);
        
        let newShockHours = Number(shockHours) + rideTime;
        let newForkHours = Number(forkHours) + rideTime;
        let newCassetteMiles = Number(cassetteMiles) + rideDistance;
        let newChainMiles = Number(chainMiles) + rideDistance;
        let newChainRingMiles = Number(chainringMiles) + rideDistance;
        let newFrontDeraileurMiles = Number(frontDeraileurMiles) + rideDistance;
        let newRearDeraileurMiles = Number(rearDeraileurMiles) + rideDistance;

        setBikeData({
            shockHours: newShockHours.toString(),
            forkHours: newForkHours.toString(),
            cassetteMiles: newCassetteMiles.toString(),
            chainMiles: newChainMiles.toString(),
            chainringMiles: newChainRingMiles.toString(),
            frontDeraileurMiles: newFrontDeraileurMiles.toString(),
            rearDeraileurMiles: newRearDeraileurMiles.toString()
        })

        try {
            await updateBike({
                variables: {
                    ...bikeData
                }
            });
            console.log(bikeData)
            console.log('bike updated');
        } catch(e) {
            console.error(e);
        }
    };

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