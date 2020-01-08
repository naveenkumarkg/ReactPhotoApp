import React from "react";


import "./userList.css";
import UserItem from './userItem';
import './userList.css';
import Card from './../../shared/UIElements/Card/Card';

const UserList = (props) => {

  if (props.items.length === 0) {
  return (
    <div className="center">
      <Card>
        <h1 >No Data Available</h1>
      </Card>
    </div>
  );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem 
        key={user.id} 
        name={user.name} 
        image={user.image} 
        places={user.places} />
      ))}
    </ul>
  );
};

export default UserList;
