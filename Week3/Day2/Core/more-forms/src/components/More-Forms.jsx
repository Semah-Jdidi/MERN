import React, { useState} from 'react'

const MoreForms = (props) =>{
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div>
      <form className='form'>
        {
          firstName.length < 2?
          <p>First Name Must Be At Least 3 Characters!</p>:
          null
        }
        <div>
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        {
          lastName.length < 3?
          <p>Last Name Must Be At Least 3 Characters!</p>:
          null
        }
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        {
          email.length < 5?
          <p>Email Must Be At Least 5 Characters!</p>:
          null
        }
        <div>
          <label>Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        {
          password.length < 8?
          <p>Password Must Be At Least 8 Characters!</p>:
          null
        }
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {
          confirmPassword.length < 8?
          <p>Password Must Be At Least 8 Characters!</p>:
          null
        }
        {
          confirmPassword != password?
          <p>Passwords Must Match!</p>:
          null
        }
        <div>
          <label>Confirm Password: </label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
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

export default MoreForms;