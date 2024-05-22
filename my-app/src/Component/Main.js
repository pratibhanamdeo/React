// Fill Attendance
import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = ({ title }) => {
  const [selectedMedium, setSelectedMedium] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [attendance, setAttendance] = useState({
    studentAttendance: '',
    staffAttendance: '',
  });
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const handleMediumChange = (e) => {
    setSelectedMedium(e.target.value);
  };

  const handleSessionChange = (e) => {
    setSelectedSession(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAttendanceChange = (e) => {
    const { name, value } = e.target;
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="header-container">
        <div className="menu-bar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={menuOpen ? 'hamburger open' : 'hamburger'}></div>
          </div>
          <div className={menuOpen ? 'menu-items open' : 'menu-items'}>
            {/* Add your menu items here */}
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="medium-session-container">
          <div className="medium-session-title">
            <label htmlFor="mediumDropdown" className="header-label">Medium:</label>
            <select
              id="mediumDropdown"
              value={selectedMedium}
              onChange={handleMediumChange}
              className="dropdown-select"
            >
              <option value="">Select Medium</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>
          <div className="medium-session-title">
            <label htmlFor="sessionDropdown" className="header-label">Session:</label>
            <select
              id="sessionDropdown"
              value={selectedSession}
              onChange={handleSessionChange}
              className="dropdown-select"
            >
              <option value="">Select Session</option>
              <option value="2012-13">2012-13</option>
              <option value="2013-14">2013-14</option>
            </select>
          </div>
        </div>
        <h1>{title}</h1>
      </div>
    {/* Main Panel */}
      <div className="main-panel">
        <div className="card">
          {/* Student Attendance */}
          <input
            type="text"
            placeholder="Student Attendance"
            name="studentAttendance"
            value={attendance.studentAttendance}
            onChange={handleAttendanceChange}
            style={{ marginBottom: '10px' }} // Add margin-bottom style
          />
          {/* Staff Attendance */}
          <input
            type="text"
            placeholder="Staff Attendance"
            name="staffAttendance"
            value={attendance.staffAttendance}
            onChange={handleAttendanceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
