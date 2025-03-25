// const express = require('express')
// const app = express()
// const port = 6000

// app.get('/api', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// // })

const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors'); // Add CORS package

const PORT = process.env.PORT || 4000;

app.use(cors()); // Use CORS
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/Students', (req, res) => {
  const query = 'SELECT * FROM saas_gfs_reporting.Test';

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });

});


app.get('/api/staffAttendancetable', async (req, res) => {
  console.log("GET /staffAttendance");
  try {
    // Check database connection
    if (!schoolDbConnection) {
      console.log("GET /staffAttendance: School database connection not established.");
      return res.status(500).json({ error: "School database connection not established" });
    }

    const query = `
      SELECT 
        a.STAFF_NAME, 
        a.STAFF_ROLE, 
        b.ACADEMIC_YEAR, 
        b.STATUS, 
        COUNT(b.STATUS) AS STATUS_COUNT,
        b.ATTENDANCE_DATE,
        ROUND((COUNT(b.STATUS) * 100.0) / SUM(COUNT(b.STATUS)) OVER (PARTITION BY a.STAFF_NAME, b.ACADEMIC_YEAR), 2) AS STATUS_PERCENT
      FROM STAFF a
      JOIN STAFF_ATTENDANCE b ON a.STAFF_ID = b.STAFF_ID
      GROUP BY a.STAFF_NAME, a.STAFF_ROLE, b.ACADEMIC_YEAR, b.STATUS
      ORDER BY a.STAFF_NAME, b.ACADEMIC_YEAR, b.STATUS`;

    console.log('staffAttendance ........Executing query'); // Removed CurrentUser from log
    const [staffAttendanceResult] = await schoolDbConnection.query(query); // Removed [CurrentUser] parameter

    console.log("GET /staffAttendance: staffAttendance fetched successfully.");
    return res.status(200).json(staffAttendanceResult);

  } catch (err) {
    console.error('Error fetching options:', err.message);
    res.status(500).json({ error: 'Database query error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

