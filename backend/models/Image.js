const mongoose = require('mongoose');

// Define the Image schema for the gallery
const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true, // URL is required
    },
    description: {
        type: String,
        required: true, // Description is required
    },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Image model based on the schema
const Image = mongoose.model('Image', imageSchema);

// Export the Image model for use in other parts of the application
module.exports = Image;