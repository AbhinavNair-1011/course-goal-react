import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]= useState(true);

 


  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.length==0){
      setIsValid(false)
    }else{
    props.onAddGoal(enteredValue);

    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}  className={`form-control ${!isValid ? "invalid" :""}`}  />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
