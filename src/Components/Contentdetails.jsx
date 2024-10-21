import React from 'react';
import truec from '../images/truec.svg';
import LabModuleCard from './LabModuleCard';
import richerd from '../images/richerd.svg';
import certificate from "../images/certificate.png";
import qrcode from "../images/qr.png";
import share from "../images/share.svg";

const Contentdetails = () => {
  return (

    <>
    <div className='px-3 pt-2 contdetails '>
      <p>Completed class / DP-100T01: Designing and Implementing a Data Science Solution on Azure (Data Scientist)</p>
      <p className='MB30'><span className='spanbutton1'>Microsoft</span> <span className='spanbutton2'>Public Class</span></p>
       <h3>DP-100T01: Designing and Implementing a Data Science Solution on Azure(Data Scientist)</h3>
       <div className='dflex'>
        <p>Completed On : 24 Feb, 2023</p><p><img src={richerd} alt="true"/> Richard B</p>
       </div>
       <p className='fgreen'><img src={truec} alt="true"/>  Your Attendance:100%</p>

       <div className='dflex MB30'>
        <button className='actives'>Last Day Evaluation</button> <button>Buy Exam</button> <button>Access Digital Assets</button> <button>Class Recordings</button>
         <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Aditional Resource
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li  class="dropdown-item">Courseware</li>
                <li  class="dropdown-item">Extra Help Session</li>
                <li  class="dropdown-item">E-learning Access</li>
            </ul>
          </div>
       </div>
    </div>
    <div className='dflex MB30 mobtab'>
      <div className='dflex box-css ML10'>
      <div><h5>Claim Your Badge</h5>
      <p>Scan QR to download on mobile Phone</p>
       <button  className='actives'>Download</button>
      </div>
       <div><img  src ={qrcode} alt=""/></div>
      </div>
      <div className='dflex box-css'>
      <div><h5>Download Certificate</h5>
      <p>Downlload your certificate and share it to your social.</p>
       <button  className='actives'>Download</button> <img src={share} alt = "share download"/>
      </div>
       <div><img  src ={certificate} alt=""/></div>
      </div>
    </div>

    {/* <div className='dflex MB30 boxs'>
      <div className='dflex       '>
      <div><h5>Access <br/>Lab Module</h5>
      </div>
      <div className='dflex box1'>
      <div><h6>Lab Module</h6>
      <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Aditional Resource
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li  class="dropdown-item">Courseware</li>
                <li  class="dropdown-item">Extra Help Session</li>
                <li  class="dropdown-item">E-learning Access</li>
            </ul>
          </div>
          <p>Exprire in 180 days(valid till: Mon 20 dac 2024)</p>
       
      </div>
       <div><button  className='actives'>Access LAB</button></div>
      </div> </div>
      </div> */}
      <LabModuleCard/>
    
    </>
    
  );
}


export default Contentdetails;
