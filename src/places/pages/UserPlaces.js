import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const dummyPlaces = [{
    id:'p1',
    title:'Empire State Building',
    description:'Best Place on Earth',
    imageUrl:'http://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
    address:'350 Fifth Avenue Manhattan, New York 10118',
    location:{
        lat:'40.445436',
        log:'73.590836'
    },
    creator:'u1'
},
{
    id:'p2',
    title:'Empire State Building',
    description:'Best Place on Earth',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
    address:'350 Fifth Avenue Manhattan, New York 10118',
    location:{
        lat:'404454.36',
        log:'73590836'
    },
    creator:'u2'
}];

const UserPlaces = ()=>{
    const userId = useParams().userId;
    const loadedPalces = dummyPlaces.filter(place => place.creator === userId)
    return <PlaceList items ={loadedPalces} />
}

export default UserPlaces;