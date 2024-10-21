import React  , { useState } from 'react';
import dashboard from "../images/dashboard-icon.svg";
import traningclass from "../images/traningclass.svg";
import Contentdetails from './Contentdetails';
import Recommended from './Recommended';
import elearning from "../images/e-learning.png";
import help from "../images/help.svg";
import resource from "../images/resource.png";
import settings from "../images/settings.png";
 
const Content = () => {
    const [hover, setHover] = useState(false);
  return (
   <>
   <div className="container-fluid " > 
    <div className="row flex-nowrap fixed-left">
        <div className="col-sm-3 col-md-2  col-xs-12 sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
               
                <ul className="nav nav-pills flex-column boxshadows mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={dashboard} alt ="dashboard-icon" />
                            <span className="ms-1 d-sm-inline fblack">Dashboard</span>
                        </a>
                    </li> 
                    <li className="nav-item actives">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={traningclass} alt ="traningclass-icon" className='w25' />
                            <span className="ms-1  d-sm-inline fwhite">Training Classes</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={elearning} alt ="elearning-icon"  className='w25'/>
                            <span className="ms-1  d-sm-inline fblack">e-learning</span>
                        </a>
                    </li>
                    <li className="nav-item course">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={dashboard} alt ="dashboard-icon" />
                            <span className="ms-1  d-sm-inline fblack "    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                >{hover ? 'Training course' : 'Course catelog'}<span> &nbsp;&gt;</span> </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={resource} alt ="resource-icon" className='w25' />
                            <span className="ms-1  d-sm-inline fblack">Resource</span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={elearning} alt ="dashboard-icon" className='w25'/>
                            <span className="ms-1  d-sm-inline fblack">Training Calender</span>
                        </a>
                    </li>

                          
                </ul>
              
                 <br/>
                 <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                          <img src={help} alt ="dashboard-icon" className='w25'/>
                            <span className="ms-1  d-sm-inline fblack">Help Center</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                        <img src={settings} alt ="dashboard-icon" className='w25'/>
                            <span className="ms-1  d-sm-inline fblack">Settings</span>
                        </a>
                    </li>
                    <br/>
                    <li className='drops'>                   
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <img src={elearning} alt ="traningclass-icon" className='w25' />  <span className="ms-1  d-sm-inline fblack">Training Classes <span>&gt;</span></span> </a>
                        <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className=" d-sm-inline fblack">Ongoing Classes</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className=" d-sm-inline fblack">Upcoming Classes</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className=" d-sm-inline fblack">Completed Classes</span></a>
                            </li>
                        </ul>
                    </li>
                    
                  </ul>
              
              
            </div>
        </div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-tab-offset-2 col-md-offset-2 col-xs-12  topcont main">
            <Contentdetails/>
            <Recommended/>
           
        </div>
    </div>
</div>
   
   </>
  );
}

export default Content;
