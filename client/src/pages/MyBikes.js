import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom'
import { QUERY_SINGLE_BIKE } from '../utils/queries';
// import Auth from '../utils/auth';

function MyBikes() {
    const { id: bikeId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_BIKE, {
        variables: { _id: bikeId }
    });

    console.log(data);
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
        chainName,
        chainMiles,
        cassetteModel,
        cassetteMiles,
        cassetteMake,
        bikePhoto,
        bikeName,
        user_id
    } = data?.bike || {};

    if(loading) {
        return (
            <h2>Loading...</h2>
        )
    };

    return (
        <div>
            <h3>{make} {model} {year}</h3>
            <h4> Bike Name: {bikeName} </h4>

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
                </tbody>
            </table>
            <p>{bikeType}</p>

            <p>{forkMake}</p>
            <p>{forkModel}</p>
            <p>{forkHours}</p>
            <p>{frontDeraileurMake}</p>
            <p>{frontDeraileurModel}</p>
            <p>{frontDeraileurMiles}</p>
            <p>{rearDeraileurMake}</p>
            <p>{rearDeraileurModel}</p>
            <p>{rearDeraileurMiles}</p>
            <p>{chainringModel}</p>
            <p>{chainringMiles}</p>
            <p>{chainringMake}</p>
            <p>{chainMiles}</p>
            <p>{chainName}</p>
            <p>{cassetteMake}</p>
            <p>{cassetteModel}</p>
            <p>{cassetteMiles}</p>
            <img src={bikePhoto} alt="user uploaded bike"/>
            <p>{user_id}</p>
        </div>
    )
}

export default MyBikes;