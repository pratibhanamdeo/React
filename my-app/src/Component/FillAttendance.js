

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// MatrixTable component to display attendance data in a table
const MatrixTable = ({ attendanceData, searchTerm }) => {
  // Filtered attendance data based on search term
  const filteredData = attendanceData.filter((record) =>
    record.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Attendance options for the dropdown
  const attendanceOptions = ['P', 'A', 'L', 'P/2'];

  // State variable for attendance dropdown value
  const [attendanceValue, setAttendanceValue] = useState('');

  // Event handler for attendance dropdown change
  const handleAttendanceChange = (event, idx) => {
    const { value } = event.target;
    const updatedData = [...filteredData];
    updatedData[idx].attendance = value;
    setAttendanceValue(value);
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        {/* Table header with custom background color */}
        <thead className="thead-dark">
          <tr>
            <th>S.No</th> {/* Serial number */}
            <th>Roll No</th> {/* Roll number */}
            <th>Student Name</th> {/* Student name */}
            <th>Class</th> {/* Class */}
            <th>Section</th> {/* Section */}
            <th>Attendance</th> {/* Attendance status */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Mapping through filtered attendance data to display rows */}
          {filteredData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.sno}</td> {/* Displaying serial number */}
              <td>{record.rollNo}</td> {/* Displaying roll number */}
              <td>{record.studentName}</td> {/* Displaying student name */}
              <td>{record.class}</td> {/* Displaying class */}
              <td>{record.section}</td> {/* Displaying section */}
              {/* Attendance dropdown */}
              <td>
                <select value={record.attendance} onChange={(event) => handleAttendanceChange(event, idx)} className="form-control">
                  {attendanceOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  // Sample attendance data
  const [attendanceData, setAttendanceData] = useState([
    { sno: 1, rollNo: '001', studentName: 'John Doe', class: '9', section: 'A', attendance: 'P' },
    { sno: 2, rollNo: '002', studentName: 'Jane Smith', class: '9', section: 'A', attendance: 'A' },
    { sno: 3, rollNo: '003', studentName: 'Michael Johnson', class: '9', section: 'A', attendance: 'P/2' }
  ]);

  // State variables
  const [searchTerm, setSearchTerm] = useState(''); // Search term

  // Event handler for search term change
  const handleSearchTermChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value); // Update search term state
  };

  const handleButtonClick = () => {
    // Update attendance automatically based on presence or absence
    const updatedAttendanceData = attendanceData.map((record) => ({
      ...record,
      attendance: record.attendance === 'P' ? 'P' : 'A', // Assume 'P' for present and 'A' for absent
    }));
    setAttendanceData(updatedAttendanceData);

    // Handle submit button click logic here
    console.log('Attendance data submitted:', updatedAttendanceData);
  };

  return (
    <div className='container'>
      {/* Navbar header */}
      <div className="bg-primary text-light p-3">
        <h1>Attendance</h1> {/* Main heading */}
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faHome} style={{ height: '26px' }} />
        </a>
      </div>
  
      {/* Displaying the Attendance Date and Class/Section information with Search Box */}
      <div className="mt-3 d-flex align-items-center">
        <h3 className="mr-3">Attendance Date :</h3>
        {/* Dropdown for date */}
        <select className="form-control mr-3" style={{ width: '120px' }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          {/* Add more options as needed */}
        </select>
        {/* Class and Section */}
        <h3 style={{ display: 'inline-block', marginLeft: '10px' }}>Class: 9 / Section: 'A'</h3>
        {/* Search box */}
        <input
          type="text"
          placeholder="Roll No"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="form-control"
          style={{ width: '100px' , marginLeft: '20 px'}}
        />
      </div>

      <hr className="my-4" />

      {/* MatrixTable aligned to the left */}
      <div className="ml-2">
        <MatrixTable attendanceData={attendanceData} searchTerm={searchTerm} />
      </div>

      {/* Submit button */}
      <div className="text-center mt-5">
        <button onClick={handleButtonClick} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Navbar;
