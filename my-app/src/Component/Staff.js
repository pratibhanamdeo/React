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
const MatrixTable = ({ data, attendanceType }) => {
  return (
    <div className="table-responsive">
      {data.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>S.No</th>
              {attendanceType === 'class' ? (
                <>
                  <th>Roll No</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Section</th>
                </>
              ) : (
                <>
                  <th>Staff ID</th>
                  <th>Staff Name</th>
                </>
              )}
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
                {attendanceType === 'class' ? (
                  <>
                    <td>{record.rollNo}</td>
                    <td>{record.studentName}</td>
                    <td>{record.class}</td>
                    <td>{record.section}</td>
                  </>
                ) : (
                  <>
                    <td>{record.rollNo}</td>
                    <td>{record.studentName}</td>
                  </>
                )}
                <td>{getTotalDaysInMonth(new Date().getFullYear(), record.month)}</td>
                <td>{record.present}</td>
                <td>{record.absent}</td>
                <td>{record.leave}</td>
                <td>{calculateAttendancePercentage(getTotalDaysInMonth(new Date().getFullYear(), record.month), record.present)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No available data</p>
      )}
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
  const [filteredData, setFilteredData] = useState([]);
  const [attendanceType, setAttendanceType] = useState('self');
  const [dataAvailable, setDataAvailable] = useState(false); // New state variable

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
    filterData(selectedClass, selectedSection, selectedMonth, searchTerm, event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(selectedClass, selectedSection, selectedMonth, event.target.value);
  };

  const handleViewAttendance = () => {
    console.log('View Attendance clicked');
    // Simulated data fetching or processing
    setFilteredData(initialAttendanceData);
    setDataAvailable(true); // Update data availability state
  };

  const handleFillAttendance = () => {
    console.log('Fill Attendance clicked');
  };

  const filterData = (classValue, sectionValue, monthValue, searchTermValue, attendanceTypeValue = attendanceType) => {
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
    if (attendanceTypeValue === 'self') {
      // Assuming self data includes staffId and staffName
      filtered = filtered.map(record => ({
        ...record,
        staffId: `STF-${record.rollNo}`,
        staffName: record.studentName
      }));
    }
    setFilteredData(filtered);
  };

  return (
    <div className='container-fluid'>
      <div className="row" style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', padding: '5px 10px', margin: '0px' }}>
        <div className="col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, width: '50%' }}>Staff</h1>
          <a className="nav-link" href="/" style={{ marginTop: '10px' }}>
            <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px' }} />
          </a>
        </div>
      </div>
      <div className="row" style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', marginBottom: '8px', padding: '0px 10px', margin: '0px' }}>
        <div className="col">
          <div className="d-flex align-items-center">
           <h2 style={{ fontSize: '14px', fontWeight: '700', marginRight: '10px', marginTop: '20px', marginLeft: '80px' }}>Attendance</h2>
<select
  value={attendanceType}
  onChange={handleAttendanceTypeChange}
  className="form-control"
  style={{ width: '80px', marginTop: '15px' }}
>
  <option value="self">Self </option>
  <option value="class">Class</option>
</select>
</div>
</div>
<div className="col">
<div className="d-flex align-items-center justify-content-end">
{attendanceType === 'class' && (
  <>
    <label htmlFor="classDropdown" className="mr-2"><strong>Class:</strong></label>
    <select
      id="classDropdown"
      value={selectedClass}
      onChange={handleClassChange}
      className="form-control"
      style={{ width: '100px' }}
    >
      <option value="">Select Class</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <label htmlFor="sectionDropdown" className="mx-2"><strong>Section:</strong></label>
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
  </>
)}
<label htmlFor="monthDropdown" className="mx-2"><strong>Month:</strong></label>
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
<input
  type="text"
  placeholder={attendanceType === 'self' ? "Search by Staff ID" : "Search Roll Number"}
  value={searchTerm}
  onChange={handleSearch}
  className="form-control"
  style={{ width: '200px', marginLeft: '10px', marginRight: '5px' }}
/>
<button className="btn btn-danger" style={{ marginRight: '5px' }} onClick={handleViewAttendance}>View Attendance</button>
<button className="btn btn-success" onClick={handleFillAttendance}>Fill Attendance</button>
</div>
</div>
</div>
<hr className="my-2" style={{ width: '100%', height: '2px', backgroundColor: 'black' }} />
<div className="row" style={{ color: 'black', textAlign: 'left', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
<div className="col">
{dataAvailable ? (
<MatrixTable data={filteredData} attendanceType={attendanceType} />
) : (
<p>No available data</p>
)}
</div>
</div>
</div>
);
};

export default Navbar;

