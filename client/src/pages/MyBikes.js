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

    return (
        <div>
            <h2>
                {bikeName}
            </h2>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
            <p>{bikeType}</p>
            <p>{shockMake}</p>
            <p>{shockModel}</p>
            <p>{shockHours}</p>
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
            <p>{bikePhoto}</p>
            <p>{user_id}</p>
        </div>
    )
}

export default MyBikes;