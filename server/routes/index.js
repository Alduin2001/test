const express = require('express');
const UserController = require('../controllers/userController');
const CategoryController = require('../controllers/categoryController');
const router = express.Router();
router.post('/add_user',UserController.create);
router.post('/auth_user',UserController.auth);
router.post('/logout',UserController.logout);

router.post('/add_category',CategoryController.create);
router.get('/get_categories',CategoryController.getCategories);
module.exports = router;