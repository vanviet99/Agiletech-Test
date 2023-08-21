import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import axios from 'axios';
import SliderComponent from './SliderComponent';

function Testimonials() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    axios.get(`https://test-react.agiletech.vn/galleries`)
      .then(res => {
        const img = res.data;
        setImageUrls(img);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='Testimonials'>
      <h3 className='Testimonials_heading'>Testimonials</h3>
      {imageUrls.length > 0 && <SliderComponent imageUrls={imageUrls} />}
    </div>
  );
}

export default Testimonials;
