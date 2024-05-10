import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserGraduate, faUserCheck } from '@fortawesome/free-solid-svg-icons'; // Required icons
import 'bootstrap/dist/css/bootstrap.min.css';

const Attendance = () => {
  const handleHomeIconClick = () => {
    // Handle any logic you need for the home icon click
  };

  return (
    <div className="attendance-container">
      <div className="home-icon" onClick={handleHomeIconClick}>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px', fontSize: '24px' }} />
      </div>

      <div className="attendance-header">
        <h1 className="attendance-title">Attendance Management</h1>
      </div>

      <div className="icon-row" style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div className='Data-Exploration' style={iconStyle}>
          <FontAwesomeIcon icon={faUser} style={{ color: '#B7950B', height: '56px' }} />
          <h3>Admin</h3>
        </div>

        <div className='Data-Exploration' style={iconStyle}>
          <FontAwesomeIcon icon={faUserCheck} style={{ color: '#2874A6', height: '56px' }} />
          <h3>Staff</h3>
        </div>

        <div className='Data-Exploration' style={iconStyle}>
          <FontAwesomeIcon icon={faUserGraduate} style={{ color: '#5DADE2', height: '56px' }} />
          <h3>Student</h3>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  color: 'black',
  height: 'auto',
  width: '30%',
  padding: '10px',
  fontSize: '20px',
  borderBottom: '1px solid #02133805',
  boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  background: 'linear-gradient(to right, #F4D03F, #E6E6FA)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
};

export default Attendance;
