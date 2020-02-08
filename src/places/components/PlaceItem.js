import React, {useState} from "react";

import Card from "./../../shared/UIElements/Card/Card";
import Button from './../../shared/Components/FormElements/Button';
import "./PlaceItem.css";
import Modal from '../../shared/Components/FormElements/Modal';

const PlaceItem = props => {
  const [showMap,setShowMap] = useState(false);

  const openMapHandler = ()=>{setShowMap(true)}
  const closeMapHandler = () =>{setShowMap(false)}

    // console.log(props) Receiving the Props from the parent component PlaceList
  return (
    <React.Fragment>
    <Modal 
      show={showMap}
      onCancel={closeMapHandler}
      header={props.address}
      contentClass="place-item__modal-content"
      footerClass="place-item__modal-actions"
      footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
    >
       <div className="map-container">
          {/* <Map center={props.coordinates} zoom={16} /> */}
          <h1>View my Map</h1>
        </div>
    </Modal>
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>

        <div className="place-item__actions">
          <Button onClick={openMapHandler} inverse>View on Map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
    </React.Fragment>
  );
};

export default PlaceItem;
