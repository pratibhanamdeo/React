import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4900/api/Students');
        // API response ko UI ke fields ke sath map karna;
        const dataWithMappings = response.data.map(record => ({
          ...record,
          present: record.Present_Days,
          absent: record.Absent_Days,
          leave: record.Leave_Days,
          Total: record.Total_Days,
          Attendance: record.Attendance_Percentage,
          Month: getMonthName(record.Month) // Call getMonthName function to convert numeric month to textual form
        }));
        setAttendanceData(dataWithMappings);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to convert numeric month to textual form
  const getMonthName = (monthNumber) => {
    const date = new Date(0);
    date.setUTCMonth(monthNumber - 1);
    return date.toLocaleDateString('en-US', { month: 'long' });
  };

  return (
    <div>
      <h1 style={{ backgroundColor: '#5DADE2', color: 'black', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Student
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginLeft: '10px', color: 'black' }} />
        </a>
      </h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ display: 'inline-block', marginRight: '20px' }}>Roll Number: {attendanceData.length > 0 ? attendanceData[0].RollNumber : ''}</h2>
        <h2 style={{ display: 'inline-block', marginRight: '20px' }}>Class: {attendanceData.length > 0 ? attendanceData[0].Class : ''}</h2>
        <h2 style={{ display: 'inline-block', marginLeft: '20px' }}>Section: {attendanceData.length > 0 ? attendanceData[0].Section : ''}</h2>
      </div>

      <table border="1" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Present Days</th>
            <th>Absent Days</th>
            <th>Leave Days</th>
            <th>Total Days</th>
            <th>Attendance %</th>
            {/* <th>Age</th> */}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.Month}</td>
              <td>{record.present}</td>
              <td>{record.absent}</td>
              <td>{record.leave}</td>
              <td>{record.Total}</td>
              <td>{record.Attendance}</td>
              {/* <td>{record.Age}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 export default Navbar;

