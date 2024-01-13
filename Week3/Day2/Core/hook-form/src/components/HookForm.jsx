import React, { useState} from 'react'

const HookForm = (props) =>{
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div>
      <form className='form'>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </form>
      <h3>Your Form Data</h3>
      <ul>
        <li>
          First Name: {firstName}
        </li>
        <li>
          Last Name: {lastName}
        </li>
        <li>
          Email: {email}
        </li>
        <li>
          Password: {password}
        </li>
        <li>
          Confirm Password: {confirmPassword}
        </li>
      </ul>
    </div>
  );
};

export default HookForm;
