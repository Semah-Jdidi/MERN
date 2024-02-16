import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAuthors = props => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.log(err))
  }, [])

  const deleteHandler = authorId => {
    axios.delete(`http://localhost:8000/api/delete/${authorId}`)
      .then(res => setAuthors(authors.filter(author => author._id != authorId)))
      .catch(err => console.log(err))
  };

  return (
    <div className='AuthorsDisplay'>
      <Link className='LinkStyle' to={'/authors/new'}>Add an Author</Link>
      <div>
              <h3>We Have Quotes By: </h3>
              <table className='AuthorsTable'>
                <thead>
                  <tr>
                    <th className='ThColumn'>Author</th>
                    <th className='ThColumn'>Actions Available</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    authors.map((author) => {
                      return (
                        <tr key={author._id}>
                          <td className='TdColumn'>
                            {author.name}
                          </td>
                          <td className='TdColumn'>
                            <div className='BtnWrapper'>
                              <Link className='Btn1' to={`/authors/${author._id}/edit`}>Edit</Link>
                              <a className='Btn2' onClick={e => {deleteHandler(author._id)}}>Delete</a>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default DisplayAuthors