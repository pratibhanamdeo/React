import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// MatrixTable component to display attendance data in a table
const MatrixTable = () => {
  // Sample attendance data
  const attendanceData = [
    { sno: 1, rollNo: '001', studentName: 'John Doe', class: '9', section: 'A', present: 'Yes', absent: 'No', leave: 'No' },
    { sno: 2, rollNo: '002', studentName: 'Jane Smith', class: '9', section: 'A', present: 'No', absent: 'Yes', leave: 'No' },
    { sno: 3, rollNo: '003', studentName: 'Michael Johnson', class: '9', section: 'A', present: 'No', absent: 'No', leave: 'Yes' }
  ];

  return (
    <div style={{ width: '50%', marginLeft: 'auto' }}>
      <table border="1" style={{ width: '100%' }}>
        {/* Table header */}
        <thead>
          <tr>
            <th>S.No</th> {/* Serial number */}
            <th>Roll No</th> {/* Roll number */}
            <th>Student Name</th> {/* Student name */}
            <th>Class</th> {/* Class */}
            <th>Section</th> {/* Section */}
            <th>Present</th> {/* Present status */}
            <th>Absent</th> {/* Absent status */}
            <th>Leave</th> {/* Leave status */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Mapping through attendance data to display rows */}
          {attendanceData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.sno}</td> {/* Displaying serial number */}
              <td>{record.rollNo}</td> {/* Displaying roll number */}
              <td>{record.studentName}</td> {/* Displaying student name */}
              <td>{record.class}</td> {/* Displaying class */}
              <td>{record.section}</td> {/* Displaying section */}
              <td>{record.present}</td> {/* Displaying present status */}
              <td>{record.absent}</td> {/* Displaying absent status */}
              <td>{record.leave}</td> {/* Displaying leave status */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  // State variables
  const [selectedClass, setSelectedClass] = useState(''); // Selected class
  const [selectedSection, setSelectedSection] = useState(''); // Selected section
  const [selectedDate, setSelectedDate] = useState(''); // Selected date
  const [searchTerm, setSearchTerm] = useState(''); // Search term

  // Event handlers for dropdown and input changes
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value); // Update selected class state
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value); // Update selected section state
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // Update selected date state
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      {/* Navbar header */}
      <div style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', height: '10vh' }}>
        <h1>Admin </h1> {/* Main heading */}
        <a className="nav-link" href="" style={{ position: 'absolute', left: 0, top: 0 }}>
          <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginTop: '35px', marginLeft: '1450px' }} />
        </a>
      </div>
      {/* Sub navigation links */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        <h2 style={{ fontSize: '10px' }}>Home</h2>
        <h2 style={{ fontSize: '10px' }}>Attendance</h2>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />

      {/* Attendance filling section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div className="fill-attendance-container" style={{ marginLeft: '10px' }}>
          <div className="fill-attendance-box">
            <h2 className="fill-attendance-title">Fill Attendance</h2>
            <div className="fill-attendance-details">
              {/* Dropdown for Class */}
              <div className="dropdown-container" style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label htmlFor="classDropdown" className="dropdown-label" style={{ marginBottom: '8px' }}>Class:</label> 
                <select
                  id="classDropdown"
                  value={selectedClass}
                  onChange={handleClassChange}
                  className="dropdown-select"
                  style={{ width: '200px' }}
                >
                  <option value="">Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              {/* Dropdown for Section */}
              <div className="dropdown-container" style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {/* Dropdown for Section Header (positioned at the top) */}
                <label htmlFor="sectionDropdown" className="dropdown-label" style={{ marginBottom: '8px' }}>Section:</label> 
                <select
                  id="sectionDropdown"
                  value={selectedSection}
                  onChange={handleSectionChange}
                  className="dropdown-select"
                  style={{ width: '200px' }}
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
              {/* Date picker */}
              <div className="dropdown-container" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label htmlFor="datePicker" className="dropdown-label" style={{ marginBottom: '8px' }}>Date:</label>
                <input
                  type="date"
                  id="datePicker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="date-input"
                  style={{ width: '200px' }}
                />
              </div>
              {/* Fill Attendance button */}
              <div className="buttons-container">
                <button className="fill-attendance-button" style={{ background: 'green', color: 'white', marginBottom: '0px' }}>Fill Attendance</button>
              </div>
            </div>
          </div>
        </div>
        <MatrixTable /> {/* Rendering the MatrixTable component */}
      </div>
      {/* View Attendance section */}
      <div className="view-attendance-container">
        <div className="view-attendance-box">
          <div className="buttons-container">
            <button className="view-attendance-button" style={{ background: 'blue', color: 'white',marginLeft: '10px' }}>View Attendance</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;