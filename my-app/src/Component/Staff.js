import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample attendance data
const initialAttendanceData = [
  { sno: 1, rollNo: '001', studentName: 'John Doe', class: '9', section: 'A', present: 1, absent: 0, leave: 0, month: 1 },
  { sno: 2, rollNo: '002', studentName: 'Jane Smith', class: '9', section: 'A', present: 0, absent: 1, leave: 0, month: 2 },
  { sno: 3, rollNo: '003', studentName: 'Michael Johnson', class: '9', section: 'A', present: 0, absent: 0, leave: 1, month: 3 }
];

// Function to get total days in a month
const getTotalDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// Function to calculate attendance percentage
const calculateAttendancePercentage = (totalDays, presentDays) => {
  if (totalDays === 0) return 0; // To handle division by zero
  return ((presentDays / totalDays) * 100).toFixed(2);
};

// MatrixTable component to display attendance data in a table
const MatrixTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>S.No</th>
            <th>Roll No</th>
            <th>Student Name</th>
            <th className="font-weight-bold">Class</th>
            <th className="font-weight-bold">Section</th>
            <th>Total Days</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Leave</th>
            <th>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, idx) => (
            <tr key={idx}>
              <td>{record.sno}</td>
              <td>{record.rollNo}</td>
              <td>{record.studentName}</td>
              <td>{record.class}</td>
              <td>{record.section}</td>
              <td>{getTotalDaysInMonth(new Date().getFullYear(), record.month)}</td>
              <td>{record.present}</td>
              <td>{record.absent}</td>
              <td>{record.leave}</td>
              <td>{calculateAttendancePercentage(getTotalDaysInMonth(new Date().getFullYear(), record.month), record.present)}</td>
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
  const [selectedMonth, setSelectedMonth] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialAttendanceData);
  const [attendanceType, setAttendanceType] = useState('self');

  // Event handlers
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    filterData(event.target.value, selectedSection, selectedMonth);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
    filterData(selectedClass, event.target.value, selectedMonth);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    filterData(selectedClass, selectedSection, event.target.value);
  };

  const handleAttendanceTypeChange = (event) => {
    setAttendanceType(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(selectedClass, selectedSection, selectedMonth, event.target.value);
  };

  const handleViewAttendance = () => {
    console.log('View Attendance clicked');
  };

  const handleFillAttendance = () => {
    console.log('Fill Attendance clicked');
  };

  const filterData = (classValue, sectionValue, monthValue, searchTermValue) => {
    let filtered = initialAttendanceData;
    if (classValue) {
      filtered = filtered.filter(record => record.class === classValue);
    }
    if (sectionValue) {
      filtered = filtered.filter(record => record.section === sectionValue);
    }
    if (monthValue) {
      filtered = filtered.filter(record => record.month === parseInt(monthValue));
    }
    if (searchTermValue) {
      filtered = filtered.filter(record => record.rollNo.includes(searchTermValue));
    }
    setFilteredData(filtered);
  };

  return (
    <div className='container-fluid'>
      <div className="row" style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', minHeight: '10vh' }}>
        <div className="col">
          <h1>Staff </h1>
        </div>
        <div className="col-auto">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginTop: '35px' }} />
          </a>
        </div>
      </div>
      <div className="row" style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', marginBottom: '10px' }}>
     <div className="col">
  <div className="d-flex align-items-center">
    <h2 style={{ fontSize: '10px', marginRight: '10px', marginBottom: '0' }}>Attendance</h2>
    <select
      value={attendanceType}
      onChange={handleAttendanceTypeChange}
      className="form-control"
      style={{ width: '80px' }}
    >
      <option value="self">Self</option>
      <option value="class">Class</option>
    </select>
  </div>
</div>

      </div>
      <hr className="my-2" style={{ width: '100%', height: '2px', backgroundColor: 'black' }} />
      <div className="row" style={{ color: 'black', textAlign: 'left', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
        {attendanceType === 'class' && (
          <div className="col">
            <div className="row align-items-center mb-2">
              <div className="col-auto">
                <label htmlFor="classDropdown"><strong>Class:</strong></label>
              </div>
              <div className="col-auto">
                <select
                  id="classDropdown"
                  value={selectedClass}
                  onChange={handleClassChange}
                  className="form-control"
                  style={{ width: '100px' }}
                >
                  <option value="">Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center mb-2">
              <div className="col-auto">
                <label htmlFor="sectionDropdown"><strong>Section:</strong></label>
              </div>
              <div className="col-auto">
                <select
                  id="sectionDropdown"
                  value={selectedSection}
                  onChange={handleSectionChange}
                  className="form-control"
                  style={{ width: '100px' }}
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center mb-2">
              <div className="col-auto">
                <label htmlFor="monthDropdown"><strong>Month:</strong></label>
              </div>
              <div className="col-auto">
                <select
                  id="monthDropdown"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="form-control"
                  style={{ width: '100px' }}
                >
                  <option value="">Select Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
            </div>
            <div className="row align-items-center">
              <input
                type="text"
                placeholder="Search Roll Number"
                value={searchTerm}
                onChange={handleSearch}
                className="form-control"
                style={{ width: '200px', marginRight: '10px', padding: '2px' }}
              />
              <button className="btn btn-danger" style={{ marginRight: '1px', width: '200px', }} onClick={handleViewAttendance}>View Attendance</button>
              <button className="btn btn-success"  style={{ marginBottom: '8px', width: '200px', }}onClick={handleFillAttendance}>Fill Attendance</button>
            </div>
          </div>
        )}
        <div className="col">
          <MatrixTable data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;