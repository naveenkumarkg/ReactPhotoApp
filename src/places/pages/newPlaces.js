import React from 'react';
import './PlaceForm.css';

import {VALIDATOR_REQUIRE} from '../../shared/util/validators';

import Input from '../../shared/Components/FormElements/Input';

const NewPlaces = ()=>{
    return <form className="place-form">
       <Input 
        element="input"
        type="text"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        />
    </form>
};

export default NewPlaces;