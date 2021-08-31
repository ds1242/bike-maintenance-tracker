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
            My Bikes Page
        </div>
    )
}

export default MyBikes;