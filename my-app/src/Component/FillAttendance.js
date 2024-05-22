
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// MatrixTable component to display attendance data in a table
const MatrixTable = ({ attendanceData, searchTerm, handleAttendanceChange }) => {
  const filteredData = attendanceData.filter((record) =>
    record.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const attendanceOptions = ['P', 'A', 'L', 'P/2'];

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>S.No</th>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.sno}</td>
              <td>{record.rollNo}</td>
              <td>{record.studentName}</td>
              <td>{record.class}</td>
              <td>{record.section}</td>
              <td>
                <select
                  value={record.attendance}
                  onChange={(event) => handleAttendanceChange(event, idx)}
                  className="form-control"
                >
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
  const [attendanceData, setAttendanceData] = useState([
    { sno: 1, rollNo: '001', studentName: 'John Doe', class: '9', section: 'A', attendance: 'P' },
    { sno: 2, rollNo: '002', studentName: 'Jane Smith', class: '9', section: 'A', attendance: 'A' },
    { sno: 3, rollNo: '003', studentName: 'Michael Johnson', class: '9', section: 'A', attendance: 'P/2' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSearchTermChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleAttendanceChange = (event, idx) => {
    const { value } = event.target;
    const updatedData = [...attendanceData];
    updatedData[idx].attendance = value;
    setAttendanceData(updatedData);
  };

  const handleButtonClick = () => {
    console.log('Attendance data submitted:', attendanceData);
    // Submit logic here
  };

  return (
    <div className='container'>
      <div className="d-flex justify-content-between align-items-center bg-primary text-light p-3">
        <h1>Attendance</h1>
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faHome} style={{ height: '26px' }} />
        </a>
      </div>
  
      <div className="mt-3 d-flex align-items-center">
        <h3 className="mr-3">Attendance Date :</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control mr-3"
          dateFormat="dd/MM/yyyy"
        />
        <h3 style={{ display: 'inline-block', marginLeft: '10px' }}>Class: 9 / Section: 'A'</h3>
        <input
          type="text"
          placeholder="Roll No"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="form-control"
          style={{ width: '100px', marginLeft: '20px' }}
        />
      </div>

      <hr className="my-4" />

      <div className="table-responsive">
        <MatrixTable
          attendanceData={attendanceData}
          searchTerm={searchTerm}
          handleAttendanceChange={handleAttendanceChange}
        />
      </div>

      <div className="text-center mt-5">
        <button onClick={handleButtonClick} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Navbar;
