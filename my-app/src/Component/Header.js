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
  const [showClassBox, setShowClassBox] = useState(false); // State for showing class box
  const [className, setClassName] = useState('');
  const [sectionName, setSectionName] = useState(''); // State for section name
  const [dateName, setDateName] = useState(''); // State for date name
  const [selectedClass, setSelectedClass] = useState(''); // State for selected class

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

  const handleFillAttendance = () => {
    // Implement your fill attendance logic here
    console.log('Filling attendance...');
    setShowClassBox(true); // Show the class box after filling attendance
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
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
          <div className="class title">
            <label htmlFor="classDropdown" className="header-label">Class:</label>
            <select
              id="classDropdown"
              value={selectedClass}
              onChange={handleClassChange}
              className="dropdown-select"
            >
              <option value="">Select class</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <h1>{title}</h1>
      </div>
      {/* Main Panel */}
      <div className="main-panel">
        <div className="card">
          <div className="attendance-container">
            {/* Student Attendance */}
            <input
              type="text"
              placeholder="Student Attendance"
              name="studentAttendance"
              value={attendance.studentAttendance}
              onChange={handleAttendanceChange}
              className="centered-input student-attendance-input" // Updated class name
            />
            {/* Staff Attendance */}
            <input
              type="text"
              placeholder="Staff Attendance"
              name="staffAttendance"
              value={attendance.staffAttendance}
              onChange={handleAttendanceChange}
              className="centered-input staff-attendance-input" // Updated class name
            />
          </div>
        </div>
        {/* Fill Attendance button */}
        <button onClick={handleFillAttendance}>Fill Attendance</button>
        {/* Class name */}
        {showClassBox && (
          <div className="class-box">
            {/* Section box */}
            <div className="section-box">
              {/* Date box */}
              <div className="date-box">
                {/* Box in front of class name */}
                <div className="box-in-front"></div>
                <p>Class: {className}</p>
                <p>Section: {sectionName}</p>
                <p>Date: {dateName}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

