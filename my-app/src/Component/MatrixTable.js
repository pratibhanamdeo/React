import React from 'react';

const MatrixTable = ({ attendanceData }) => {
  return (
    <div style={{ width: '100%', marginTop: '20px' }}>
      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Leave</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.sno}</td>
              <td>{record.rollNo}</td>
              <td>{record.studentName}</td>
              <td>{record.class}</td>
              <td>{record.section}</td>
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

export default MatrixTable;
