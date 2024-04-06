import React from 'react'
import flower1 from './assets/flower1.jpg'
import flower2 from './assets/flower2.webp'
import flower3 from './assets/flower3.webp'
function Flower() {
  return (
      <div className="flower-page ">
          <img src={flower1} alt="Flower" className="flower-image" /> 
          <img src={flower2} alt="Flower" className="flower-image" /> 
          <img src={flower3} alt="Flower" className="flower-image" />
      </div>
  );
}

export default Flower
