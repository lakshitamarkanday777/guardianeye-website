const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

// Export the Contact model
module.exports = Contact;