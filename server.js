const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const inputData = req.body;

  // Add timestamp here
  const dataWithTimestamp = {
    ...inputData,
    timestamp: new Date().toISOString() // ISO format for readability
  };

  const filePath = path.join(__dirname, 'data.json');
  let existingData = [];

  if (fs.existsSync(filePath)) {
    try {
      const raw = fs.readFileSync(filePath);
      existingData = JSON.parse(raw) || [];
    } catch (err) {
      console.error('Error parsing data.json:', err);
      existingData = [];
    }
  }

  existingData.push(dataWithTimestamp);

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 5));

  res.json({ message: 'thank you for sharing' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});