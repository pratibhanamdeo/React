

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// MatrixTable component to display attendance data in a table
const MatrixTable = () => {
  // Sample attendance data
  const attendanceData = [
    {  class: '9', section: 'A', month: 'March', present: 'Yes', absent: 'No', leave: 'No' }
  ];

  return (
    <div style={{ width: '100%', marginLeft: 'auto' }}>
      <table border="1" style={{ width: '100%' }}>
        {/* Table header */}
        <thead>
          <tr>
            <th>Class</th>
            <th>Section</th>
            <th>Month</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Leave</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Mapping through attendance data to display rows */}
          {attendanceData.map((record, idx) => (
            <tr key={idx}>
              {/* <td>{record.sno}</td>
              <td>{record.rollNo}</td>
              <td>{record.studentName}</td> */}
              <td>{record.class}</td>
              <td>{record.section}</td>
              <td>{record.month}</td>
              <td>{record.present}</td>
              <td>{record.absent}</td>
              <td>{record.leave}</td>
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
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Event handlers for dropdown and input changes
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      {/* Navbar header */}
      <div style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', height: '10vh' }}>
        <h1>Student</h1>
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
        <MatrixTable />
      </div>
    </div>
  );
};

export default Navbar;
