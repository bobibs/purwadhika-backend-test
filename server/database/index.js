const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'bobby141294',
	database: 'movieindoxxi',
	multipleStatements: true
});

module.exports = db;
