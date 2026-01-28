// backend/routes/galleryRoutes.js

const express = require('express');
const { getGalleryImages } = require('../controllers/galleryController');

const router = express.Router();

/**
 * @route GET /api/gallery
 * @desc Retrieve gallery images from the database
 * @access Public
 */
router.get('/', getGalleryImages);

module.exports = router;