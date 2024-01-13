import React, { useState } from "react";

const PersonCard = props => {
    const [age, setAge] = useState(props.age);
    const ageCount = () => {
      setAge(age + 1);
    };
    return (
        <div>
          <h2>{props.lastName}, {props.firstName}</h2>
          <p>Age: {age}</p>
          <p>Hair Color: {props.hairColor}</p>
          <button onClick={ ageCount }>Increase Age</button>
        </div>
    )
}

export default PersonCard;