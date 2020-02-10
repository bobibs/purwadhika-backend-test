const db = require('../database/index');

module.exports = {
	// Admin Get Movie
	adminGetMovie: (req, res) => {
		// Set SQL Syntax
		let sql = 'SELECT * FROM movies';

		// Database Action
		db.query(sql, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Add Movie
	adminAddMovie: (req, res) => {
		// Get Data From Frontend
		const { nama, tahun, description } = req.body;

		// Validation Form
		if (nama === '' || tahun === '' || description === '') {
			res.status(500).send({ message: 'Kolom tidak boleh kosong!' });
		} else {
			// Set Data For Database
			const data = {
				nama,
				tahun,
				description
			};

			// Set SQL Syntax
			let sql = 'INSERT INTO movies SET ?';

			// Database Action
			db.query(sql, data, (err, result) => {
				if (err) res.status(500).send(err);
				res.send(result);
			});
		}
	},

	// Admin Edit Movie
	adminEditMovie: (req, res) => {
		// Get Data From Frontend
		const { id } = req.params;
		const { nama, tahun, description } = req.body;

		// Set Data For Database
		const data = {
			nama,
			tahun,
			description
		};

		// Set SQL Syntax
		let sql = 'UPDATE movies SET ? WHERE id = ?';

		// Database Action
		db.query(sql, [data, id], (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Delete Movie
	adminDeleteMovie: (req, res) => {
		// Get Data From Frontend
		const { id } = req.params;

		// Set SQL Syntax
		let sql = 'DELETE FROM movies WHERE id = ?';

		// Database Action
		db.query(sql, id, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Get Category
	adminGetCategory: (req, res) => {
		// Set SQL Syntax
		let sql = 'SELECT * FROM categories';

		// Database Action
		db.query(sql, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Add Category
	adminAddCategory: (req, res) => {
		// Get Data From Frontend
		const { nama } = req.body;

		// Validation Form
		if (nama === '') {
			res.status(500).send({ message: 'Kolom tidak boleh kosong!' });
		} else {
			// Set Data For Database
			const data = {
				nama
			};

			// Set SQL Syntax
			let sql = 'INSERT INTO categories SET ?';

			// Database Action
			db.query(sql, data, (err, result) => {
				if (err) res.status(500).send(err);
				res.send(result);
			});
		}
	},

	// Admin Edit Category
	adminEditCategory: (req, res) => {
		// Get Data From Frontend
		const { id } = req.params;
		const { nama } = req.body;

		// Set Data For Database
		const data = {
			nama
		};

		// Set SQL Syntax
		let sql = 'UPDATE categories SET ? WHERE id = ?';

		// Database Action
		db.query(sql, [data, id], (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Delete Category
	adminDeleteCategory: (req, res) => {
		// Get Data From Frontend
		const { id } = req.params;

		// Set SQL Syntax
		let sql = 'DELETE FROM categories WHERE id = ?';

		// Database Action
		db.query(sql, id, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Get Data Movcat
	adminGetMovcat: (req, res) => {
		// Set SQL Syntax
		let sql = `SELECT 
									movcat.id as movcatId,
									movies.id as movieId, 
									movies.nama as movieNama, 
									categories.id as categoryId, 
									categories.nama as categoryNama
              	FROM
                	movcat
                  	JOIN
                	movies ON movies.id = movcat.idmovie
                  	JOIN
                	categories ON categories.id = movcat.idcategory;`;

		// Database Action
		db.query(sql, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Add Movcat
	adminAddMovCat: (req, res) => {
		// Get Data From Frontend
		const { idmovie, idcategory } = req.body;

		// Validation Form
		if (idmovie === 0 || idcategory === 0) {
			res.status(500).send({ message: 'Kolom harus di pilih!' });
		}

		// Set Data For Database
		const data = {
			idmovie,
			idcategory
		};

		// Set SQL Syntax
		let sql = 'INSERT INTO movcat SET ?';

		// Database Action
		db.query(sql, data, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	},

	// Admin Delete Movcat
	adminDeleteMovcat: (req, res) => {
		// Get Data From Frontend
		const { id } = req.params;

		// Set SQL Syntax
		let sql = 'DELETE FROM movcat WHERE id = ?';

		// Database Action
		db.query(sql, id, (err, result) => {
			if (err) res.status(500).send(err);
			res.send(result);
		});
	}
};
