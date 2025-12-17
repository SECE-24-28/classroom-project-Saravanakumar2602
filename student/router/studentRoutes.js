const express = require('express');


const {
  createStudent,
  getallStudents,
  getStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

const router = express.Router();

router.post('/', createStudent);
router.get('/', getallStudents);
router.get('/:id', getStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
