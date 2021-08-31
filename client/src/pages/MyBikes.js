import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom'
import {GET_SINGLE_USER_BIKES} from '../utils/queries';
// import Auth from '../utils/auth';

function MyBikes() {
    const { id: bikeId } = useParams();
    console.log(bikeId);

    return (
        <div>
            My Bikes Page
        </div>
    )
}

export default MyBikes;