import React from 'react';
import Recommendpath from './Recommendpath';

const Recommended = () => {
  return (
    <>
    <div  className='dflex mobtab'>
    <div className='w100'> 
    <h5>Instructor’s notes</h5>
    <div class="course-container">
    <div class="tabs">
        <div class="tab active">Day 1</div>
        <div class="tab">Day 2</div>
        <div class="tab">Day 3</div>
    </div>
    <div class="course-outline">
        <h6>Course Outline</h6>
        <ul>
            <li>a. Get Started with Cisco Command-Line Interface (CLI)</li>
            <li>b. Observe How a Switch Operates</li>
            <li>c. Perform Basic Switch Configuration</li>
            <li>d. Implement the Initial Switch Configuration</li>
            <li>e. Inspect TCP/IP Applications</li>
            <li>f. Configure an Interface on a Cisco Router</li>
        </ul>
    </div>
</div>

    </div>

    <div className='w100'>
    <h5> Recommended Learning Path  </h5> 
    <div className="course-card">
    <Recommendpath/> <hr/>
    <Recommendpath/> 
    </div>
     
   </div>
    </div>

        
    
    </>
  );
}

export default Recommended;
