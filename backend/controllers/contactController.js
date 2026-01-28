exports.createContact = async (req, res) => {
    try {
        // Validate input
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create a new contact instance
        const newContact = new Contact({
            name,
            email,
            message
        });

        // Save the contact to the database
        await newContact.save();

        // Respond with success
        res.status(201).json({ message: 'Contact information saved successfully.' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving contact information.' });
    }
};