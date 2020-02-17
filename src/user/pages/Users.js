import React from 'react';

import UserList from '../components/userList';

const User = () =>{
    const USERS = [
        {
        id:'u1',
        name:'Naveen',
        image:'https://www.usnews.com/dims4/USNEWS/ba94fe9/2147483647/crop/2000x1333%2B0%2B0/resize/1200x1200%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F8e%2F03%2F39f9a53f47b99658d932f88ac641%2F1.%20Intro-Submitted.jpg',
        places:3
        
    },
    {
        id:'u2',
        name:'Sunny',
        image:'https://www.usnews.com/dims4/USNEWS/ba94fe9/2147483647/crop/2000x1333%2B0%2B0/resize/1200x1200%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F8e%2F03%2F39f9a53f47b99658d932f88ac641%2F1.%20Intro-Submitted.jpg',
        places:3
        
    }
];
    return <UserList items = {USERS} />

}

export default User;