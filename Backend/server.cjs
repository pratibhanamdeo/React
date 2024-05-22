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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

