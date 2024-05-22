
import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = ({ title }) => {
  const [selectedMedium, setSelectedMedium] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [attendance, setAttendance] = useState({
    admin: '',
    student: '',
    class: '',
    staff: '',
    teacher: '',
  });
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const [showClassAndStaff, setShowClassAndStaff] = useState(false); // State to toggle Class and Staff visibility

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

  const handleAdminClick = () => {
    setShowClassAndStaff(true); // Show Class and Staff inputs when Admin is clicked
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
          {/* Admin */}
          <input
            type="text"
            placeholder="Admin"
            name="admin"
            value={attendance.admin}
            onChange={handleAttendanceChange}
            onClick={handleAdminClick}
            className="center-input admin-attendance-input"
          />
          {/* Student */}
          <input
            type="text"
            placeholder="Student"
            name="student"
            value={attendance.student}
            onChange={handleAttendanceChange}
            className="center-input student-attendance-input"
          />
          {/* Teacher */}
          <input
            type="text"
            placeholder="Teacher"
            name="teacher"
            value={attendance.teacher}
            onChange={handleAttendanceChange}
            className="center-input teacher-attendance-input"
          />
        </div>
        {/* Class and Staff in the same line */}
        {showClassAndStaff && (
          <div className="bottom-line-container">
            <div className="card bottom-line-card">
              {/* Class */}
              <input
                type="text"
                placeholder="Class"
                name="class"
                value={attendance.class}
                onChange={handleAttendanceChange}
                className="center-input class-attendance-input"
              />
              {/* Staff */}
              <input
                type="text"
                placeholder="Staff"
                name="staff"
                value={attendance.staff}
                onChange={handleAttendanceChange}
                className="center-input staff-attendance-input"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
