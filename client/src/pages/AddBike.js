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
            <Form onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Bike Make:</Form.Label>
                        <Form.Control type="text" name="make" value={bikeData.make} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Bike Model:</Form.Label>
                        <Form.Control type="text" name="model" value={bikeData.model} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Bike Year:</Form.Label>
                        <Form.Select name="year" value={bikeData.year} onChange={handleChange}>
                            <option>Select a Year</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                            <option value='2018'>2018</option>
                            <option value='2017'>2017</option>
                            <option value='2016'>2016</option>
                            <option value='2015'>2015</option>
                            <option value='2014'>2014</option>
                            <option value='2013'>2013</option>
                            <option value='2012'>2012</option>
                            <option value='2011'>2011</option>
                            <option value='2010'>2010</option>
                            <option value='2009'>2009</option>
                            <option value='2008'>2008</option>
                            <option value='2007'>2007</option>
                            <option value='2006'>2006</option>
                            <option value='2005'>2005</option>
                            <option value='2004'>2004</option>
                            <option value='2003'>2003</option>
                            <option value='2002'>2002</option>
                            <option value='2001'>2001</option>
                            <option value='2000'>2000</option>
                            <option value='1999'>1999</option>
                            <option value='1998'>1998</option>
                            <option value='1997'>1997</option>
                            <option value='1996'>1996</option>
                            <option value='1995'>1995</option>
                            <option value='1994'>1994</option>
                            <option value='1993'>1993</option>
                            <option value='1992'>1992</option>
                            <option value='1991'>1991</option>
                            <option value='1990'>1990</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <h3>Fork</h3>
                    <Form.Group as={Col}>
                        <Form.Label>Make:</Form.Label>
                        <Form.Control type="text" name="forkMake" value={bikeData.forkMake} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Model:</Form.Label>
                        <Form.Control type="text" name="forkModel" value={bikeData.forkModel} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Current Hours (since last lower leg service):</Form.Label>
                        <Form.Control type="text" name="forkHours" value={bikeData.forkHours} onChange={handleChange}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <h3>Shock</h3>
                    <Form.Group as={Col}>
                        <Form.Label>Make:</Form.Label>
                        <Form.Control type="text" name="shockMake" value={bikeData.shockMake} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Model:</Form.Label>
                        <Form.Control type="text" name="shockModel" value={bikeData.shockModel} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Current Hours (since last sleeve service):</Form.Label>
                        <Form.Control type="text" name="shockHours" value={bikeData.shockHours} onChange={handleChange}/>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )

}

export default AddBike;