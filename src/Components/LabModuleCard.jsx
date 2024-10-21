import React, { useState } from 'react';


const LabModuleCard = () => {
  const [selectedModule, setSelectedModule] = useState("01 Exploring the Lab Environment");

  return (
    <div className="lab-module-card">
      <div className="lab-module-card-content">
        <h3>Access<br/> lab module</h3>
        <div className="lab-module-selection">
          <label>Lab module</label>
          <div className='dflex'>
          <div className="lab-dropdown">
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              <option value="01 Exploring the Lab Environment">01 Exploring the Lab Environment</option>
            </select>
            
          </div>
          <button className="access-btn">Access LAB</button>
          </div>
          
          <div className="expiry-info">
            <span> <span className='alrt'>!</span>Expires in 180 Days (Valid till: Mon, 20 Sep 2023)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabModuleCard;
