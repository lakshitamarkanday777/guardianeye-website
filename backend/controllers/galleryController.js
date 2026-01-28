exports.getGalleryImages = async (req, res) => {
    try {
        // Fetch images from the database
        const images = await Image.find();
        
        // Return the images with a 200 status code
        res.status(200).json(images);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error("Error fetching gallery images:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};