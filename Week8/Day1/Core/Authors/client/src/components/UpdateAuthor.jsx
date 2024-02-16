import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateAuthor = props => {
  const [author, setAuthor] = useState({
    name: ""
  });
  const [errors, setErrors] = useState([]);
  const nav = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => setAuthor(res.data))
      .catch(err => console.log(err))
  }, [])

  const changeHandler = e => {
    setAuthor({...author, [e.target.name] : e.target.value});
  };

  const submitHandler = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/edit/${id}`, author)
      .then(res => nav('/authors'))
      .catch(err => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorarr = [];
        for (const key of Object.keys(errorResponse)) {
          errorarr.push(errorResponse[key].message)
        };
        setErrors(errorarr);
      })
  };

  return (
    <div className='FormContainer'>
      <Link className='LinkStyle' to={'/authors'}>Home</Link>
      <h3>Edit This Author: </h3>
      <form className='FormStyle' onSubmit={submitHandler}>
        {
          errors.map((err, i) => {
            return( 
            <p key={i}>{err}</p>
            )
          })
        }
        <label>Name: <input type="text" name="name" value={author.name} onChange={changeHandler} /></label>
        <div className='BtnContainer'>
          <button className='FormBtn'>Submit</button>
          <Link className='FormBtn' to={'/authors'}>Cancel</Link>
        </div>
      </form>
    </div>
  )
};

export default UpdateAuthor;