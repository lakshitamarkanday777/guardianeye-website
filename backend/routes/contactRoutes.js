const express = require('express');
const { createContact } = require('../controllers/contactController');

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Create a new contact entry
 * @access  Public
 */
router.post('/', createContact);

module.exports = router;