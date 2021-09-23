import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom'
import { QUERY_SINGLE_BIKE } from '../utils/queries';
// import Auth from '../utils/auth';
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap';
import MyModal from '../components/Modal';

function MyBikes() {
    const { id: bikeId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_BIKE, {
        variables: { _id: bikeId }
    });

    
    const { 
        _id,
        make, 
        model, 
        year, 
        bikeType, 
        shockMake, 
        shockModel, 
        shockHours, 
        rearDeraileurModel, 
        rearDeraileurMake, 
        rearDeraileurMiles,
        frontDeraileurModel,
        frontDeraileurMake,
        frontDeraileurMiles,
        forkMake,
        forkModel,
        forkHours,
        chainringModel,
        chainringMiles,
        chainringMake,
        chainMake,
        chainModel,
        chainMiles,
        cassetteModel,
        cassetteMiles,
        cassetteMake,
        bikePhoto,
        bikeName,
        user_id
    } = data?.bike || {};

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    if(loading) {
        return (
            <h2>Loading...</h2>
        )
    };
    if(bikeType === 'Mountain Bike') {       


        return (
            <Container fluid>
                <h3>{make} {model} {year}</h3>
                <h4> Bike Name: {bikeName} </h4>
                <img src={bikePhoto} alt="User's uploaded bike" />
                
                {handleShow && <MyModal 
                    key={_id}
                    show={show}
                    _id={_id}
                    forkHours={forkHours}
                    shockHours={shockHours}
                    cassetteMiles={cassetteMiles}
                    chainMiles= {chainMiles}
                    frontDeraileurMiles={frontDeraileurMiles}
                    rearDeraileurMiles={rearDeraileurMiles}
                    chainringMiles={chainringMiles}
                    onClose={handleClose}

                />}
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Part Type</th>
                            <th scope='col'>Part Make</th>
                            <th scope='col'>Part Model</th>
                            <th scope='col'>Miles or Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Shock</th>
                            <td>{shockMake}</td>
                            <td>{shockModel}</td>
                            <td>{shockHours}</td>
                        </tr>
                        <tr>
                            <th scope="row">Fork</th>
                            <td>{forkMake}</td>
                            <td>{forkModel}</td>
                            <td>{forkHours}</td>
                        </tr>
                        <tr>
                            <th scope="row">Front Deraileur</th>
                            <td>{frontDeraileurMake}</td>
                            <td>{frontDeraileurModel}</td>
                            <td>{frontDeraileurMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Rear Deraileur</th>
                            <td>{rearDeraileurMake}</td>
                            <td>{rearDeraileurModel}</td>
                            <td>{rearDeraileurMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Front Chainring(s)</th>
                            <td>{chainringMake}</td>
                            <td>{chainringModel}</td>
                            <td>{chainringMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Chain</th>
                            <td>{chainMake}</td>
                            <td>{chainModel}</td>
                            <td>{chainMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cassette</th>
                            <td>{cassetteMake}</td>
                            <td>{cassetteModel}</td>
                            <td>{cassetteMiles}</td>
                        </tr>
                    </tbody>
                </table>
                <p>{bikeType}</p>
                
                
                
                
                
                {/* <img src={bikePhoto} alt="user uploaded bike"/> */}
                <p>{user_id}</p>
                <Row>
                    <Link to={`/`}>
                        <Button>Back to Home</Button>
                    </Link>
                    <Col>
                        <Button variant="secondary" onClick={handleShow}>Add Ride</Button>
                    </Col>
                </Row>
            </Container>
    )
    } else if(bikeType === 'Road Bike') {
        return (
                <div>
                <h3>{make} {model} {year}</h3>
                <h4> Bike Name: {bikeName} </h4>
                {handleShow && <MyModal 
                    key={_id}
                    show={show}
                    _id={_id}
                    forkHours={forkHours}
                    shockHours={shockHours}
                    cassetteMiles={cassetteMiles}
                    chainMiles= {chainMiles}
                    frontDeraileurMiles={frontDeraileurMiles}
                    rearDeraileurMiles={rearDeraileurMiles}
                    chainringMiles={chainringMiles}
                    onClose={handleClose}

                />}
                <img src={bikePhoto} alt="User's uploaded bike" />
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Part Type</th>
                            <th scope='col'>Part Make</th>
                            <th scope='col'>Part Model</th>
                            <th scope='col'>Miles or Hours</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr>
                            <th scope="row">Front Deraileur</th>
                            <td>{frontDeraileurMake}</td>
                            <td>{frontDeraileurModel}</td>
                            <td>{frontDeraileurMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Rear Deraileur</th>
                            <td>{rearDeraileurMake}</td>
                            <td>{rearDeraileurModel}</td>
                            <td>{rearDeraileurMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Front Chainring(s)</th>
                            <td>{chainringMake}</td>
                            <td>{chainringModel}</td>
                            <td>{chainringMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Chain</th>
                            <td>{chainMake}</td>
                            <td>{chainModel}</td>
                            <td>{chainMiles}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cassette</th>
                            <td>{cassetteMake}</td>
                            <td>{cassetteModel}</td>
                            <td>{cassetteMiles}</td>
                        </tr>
                    </tbody>
                </table>
                <p>{bikeType}</p>
                
                
                
                
                
                {/* <img src={bikePhoto} alt="user uploaded bike"/> */}
                <p>{user_id}</p>
                <Row>
                    <Link to={`/`}>
                        <Button>Back to Home</Button>
                    </Link>
                    <Col>
                        <Button variant="secondary" onClick={handleShow}>Add Ride</Button>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default MyBikes;