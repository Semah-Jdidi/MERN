import React, { useState } from 'react'

export const ColorForm = (props) => {
  const [color, setColor] = useState("#000000");
  const {addBoxColor} = props;

  const createBox = (e) =>{
    e.preventDefault();
    const newBox = {color};
    addBoxColor(newBox);
  };

  return (
    <div>
    <form onSubmit={createBox}>
      <div style={{display:'flex', justifyContent:'center'}}>
      <input style={{width:'100px', height:'50px', borderRadius:'10px', marginRight:'20px'}} type="color" value={color} onChange={(e)=>{setColor(e.target.value)}} />
      <input style={{width:'100px', height:'50px', fontSize:'18px', borderRadius:'10px'}} type="submit" value="Add" />
      </div>
    </form>
    </div>
  )
}

export default ColorForm;
