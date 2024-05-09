import React, { useState } from 'react';
import './BoxGenerator.css'

const BoxGenerator = () => {
  const [color, setColor] = useState(''); 
  const [boxes, setBoxes] = useState([]); 
  const [boxSize, setBoxSize] = useState(100);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleAddBox = (e) => {
    e.preventDefault();
    if (color) {
      setBoxes([...boxes, color]);
      setColor(''); 
    }
  };

  
  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10); 
    setBoxSize(newSize || 100); 
  };

  return (
    <div className="box-generator">
      <form onSubmit={handleAddBox}>
        <input
          type="text"
          placeholder="Enter a color "
          value={color}
          onChange={handleColorChange}
        />
         <input
          type="number"
          placeholder="Box size (pixels)"
          value={boxSize}
          onChange={handleSizeChange}
        />
        <button type="submit">Add Box</button>
      </form>
      <div className="box-container">
        {boxes.map((chosenColor, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: chosenColor, 
              width: `${boxSize}px`,
            height: `${boxSize}px`,
            
            }
          
          }
            
            
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
