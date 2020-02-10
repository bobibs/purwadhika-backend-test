const express = require('express');
const router = express.Router();
const { adminControllers } = require('../controllers');

// Admin Get Movie - API (admin/get-movie)
router.get('/get-movie', adminControllers.adminGetMovie);

// Admin Add Movie - API (admin/add-movie)
router.post('/add-movie', adminControllers.adminAddMovie);

// Admin Edit Movie - API (admin/edit-movie/:id)
router.put('/edit-movie/:id', adminControllers.adminEditMovie);

// Admin Delete Movie - API (admin/delete-movie/:id)
router.delete('/delete-movie/:id', adminControllers.adminDeleteMovie);

// Admin Get Category - API (admin/get-category)
router.get('/get-category', adminControllers.adminGetCategory);

// Admin Add Category - API (admin/add-category)
router.post('/add-category', adminControllers.adminAddCategory);

// Admin Edit Category - API (admin/edit-category/:id)
router.put('/edit-category/:id', adminControllers.adminEditCategory);

// Admin Delete Category - API (admin/delete-category/:id)
router.delete('/delete-category/:id', adminControllers.adminDeleteCategory);

// Admin Get Data Movcat - API (admin/get-movcat)
router.get('/get-movcat', adminControllers.adminGetMovcat);

// Admin Add MovCat - API (admin/add-movcat)
router.post('/add-movcat', adminControllers.adminAddMovCat);

// Admin Delete Movcat - API (admin/delete-movcat/:id)
router.delete('/delete-movcat/:id', adminControllers.adminDeleteMovcat);

module.exports = router;
