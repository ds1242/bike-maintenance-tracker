import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { CREATE_BIKE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'

const AddBike = () => {

    const [bikeData, setBikeData] = useState({
        make: '', 
        model: '', 
        year: '', 
        bikeType: '', 
        shockMake: '', 
        shockModel: '', 
        shockHours: '', 
        rearDeraileurModel: '', 
        rearDeraileurMake: '', 
        rearDeraileurMiles: '',
        frontDeraileurModel: '',
        frontDeraileurMake: '',
        frontDeraileurMiles: '',
        forkMake: '',
        forkModel: '',
        forkHours: '',
        chainringModel: '',
        chainringMiles: '',
        chainringMake: '',
        chainMake: '',
        chainModel: '',
        chainMiles: '',
        cassetteModel: '',
        cassetteMiles: '',
        cassetteMake: '',
        bikePhoto: '',
        bikeName: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBikeData({
            ...bikeData,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addBike({
                variables: {
                    ...bikeData
                }
            });
        } catch (e) {
            console.error(e);
        }
    };

    const [addBike, {error}] = useMutation(CREATE_BIKE, {
        refetchQueries: [
            { query: QUERY_ME}
        ]
    })

    return (
        <Container fluid="md">
            <h2>Please Enter Your Bike's Information:</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Make:</Form.Label>
                        <Form.Control type="text" name="make" value={bikeData.make} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Model:</Form.Label>
                        <Form.Control type="text" name="model" value={bikeData.model} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Year:</Form.Label>
                        <Form.Control type="year" name="year" id="datepicker" autoComplete="off" value={bikeData.year} onChange={handleChange}/>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )

}

export default AddBike;