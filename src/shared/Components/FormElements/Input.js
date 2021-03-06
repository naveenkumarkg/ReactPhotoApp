import React, {useReducer} from "react";
import "./Input.css";

import {validate} from './../../util/validators';

const inputReducer = (state,action)=>{
  switch(action.type){
    case 'CHANGE': return {
      ...state,
      value: action.val,
      isValid: validate(action.val,action.validators)
    }
    case 'TOUCH': return {
      ...state,
      isTouched:true
    }
    default: return state;
  }
}


const Input = props => {

  const [inputState,dispatch] = useReducer(inputReducer,{
      value: props.initialValue || '', 
      isTouched: false,
      isValid:props.initialValid || true})
  
  const changeHandler = (event)=>{
    dispatch({type:'CHANGE',
      val:event.target.value,
      validators:props.validators})
  }

  const touchHandler =()=>{
    dispatch({type:'TOUCH'})
  }

  const element =
    props.element === "input" ? (
      <input id={props.id}  
        placeholder={props.placeholder} 
        value={inputState.value} 
        onBlur={touchHandler}
        onChange={changeHandler}/>
    ) : (
      <textarea id={props.id} 
        rows={props.rows || 3} 
        value={inputState.value}
        onBlur={touchHandler} 
        onChange={changeHandler}/>
    );

  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched &&  'form-control--invalid'}`}>
      <label>{props.label}</label>
      {element}

      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;