const express = require('express');
const router = express.Router();
const testUser = require('../middleware/test-user');
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} = require('../controllers/jobs');

router.route('/').get(getAllJobs).post(testUser, createJob);
router.route('/stats').get(showStats);
router
  .route('/:id')
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob);

module.exports = router;
