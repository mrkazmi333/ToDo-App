const express = require('express');

const router = express.Router();


const homeController = require('../controllers/home_controllers');
const addTaskController = require('../controllers/add_task_controller');
const deleteTaskController = require('../controllers/delete_task_controller');

router.get('/', homeController.home);
router.post('/add-task', addTaskController.addTask );
router.post('/delete-task', deleteTaskController.deleteTask);
module.exports = router;