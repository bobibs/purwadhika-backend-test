// Import Global Module
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set App
const app = express();

// Check Database Connection
const db = require('./database/index');
db.connect(err => {
	if (err) throw err;
	console.log('MySql connected...');
});

// Set Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Cors
app.use(cors());

// Set Routes
const { adminRoutes } = require('./routes');
app.get('/', (req, res) => res.send('Homepage'));
app.use('/admin', adminRoutes);

// Set Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running on port : ${PORT}`));
