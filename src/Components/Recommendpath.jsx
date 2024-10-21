import React from 'react';
import clock from '../images/clock.svg';
import virtual from '../images/virtual.svg';

const Recommendpath = () => {
  return (
    <div className='recomendpath '>
       
      <div className="course-header">
        <span className='spanbutton1'>Microsoft</span>
        <span className='spanbutton1'>GTR</span>
      </div>
      <h3>DP-100T01: Designing and Implementing a Data Science Solution on Azure (Data Scientist)</h3>
      <div className="course-details">
        <p className='dflex'>
          <span className="duration"><img src={clock} />4.00 days (32 Hrs)</span>
          <span className="type"><img src={virtual} />Virtual Instructor-Led</span>
        </p>
        <div className="ratings">
          <span className="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-full"></i><i class="fa fa-star-o"></i></span>
          <span className="rating-value">3.5</span>
        </div>
        
        <span className="start-date">Starting in 7 days</span>
        <button className="register-btn">Register</button>
      </div>
    </div>
    
  );
}

export default Recommendpath;
