import React from 'react'

export const DisplayColor = (props) => {
  const {boxColor} = props;
  return (
    <div style={{display:'flex', gap:'10px', marginTop:'50px', justifyContent:'center', flexWrap:'wrap'}}>
      {
      boxColor.map((newBox, i) =>{
        return <div key={i} style={{backgroundColor: newBox.color, width:'200px', height:'200px'}}></div>
      })
      }
    </div>
  )
}

export default DisplayColor;