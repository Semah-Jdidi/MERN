import React from 'react'

export const Display = (props) => {
  const {list, handleChecked, handleDelete} = props;

  return (
    <div className='Container'>
      <ul className='TodoList'>
        {
          list.map((task, i) => {
            return (
              <li key={i}>
                <input type="checkbox" onClick={() => handleChecked(i)} />
                <span style={{textDecoration: task.checked? "line-through" : "none" }}>{task.name}</span> 
                <button onClick={() => handleDelete(task)}>Delete</button>
              </li>
            )
          }
          )
        }
      </ul>
    </div>

  )
}

export default Display;