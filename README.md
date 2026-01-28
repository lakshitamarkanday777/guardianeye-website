# Home Inspection Website

This project is a complete web application for a home inspection business, featuring a full-stack implementation with a Node.js backend and a responsive frontend. The application allows users to book inspections, contact the business, and view a gallery of images.

## Project Structure

```
home-inspection-website
├── backend
│   ├── controllers
│   │   ├── contactController.js
│   │   └── galleryController.js
│   ├── models
│   │   ├── Contact.js
│   │   └── Image.js
│   ├── routes
│   │   ├── contactRoutes.js
│   │   └── galleryRoutes.js
│   └── server.js
├── frontend
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── main.js
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── book.html
│   ├── contact.html
│   └── gallery.html
├── .env
├── package.json
├── .gitignore
└── README.md
```

## Features

- **Home Page**: A hero section and a preview of services offered.
- **About Page**: Information about the business, including mission and values.
- **Services Page**: Detailed descriptions of the services provided.
- **Booking Page**: Integrated Calendly widget for scheduling inspections.
- **Contact Page**: A form that submits user inquiries to the backend.
- **Gallery Page**: Displays images fetched from the backend API.

## Backend

The backend is built using Node.js and Express, with MongoDB as the database. The following features are included:

- **Contact API**: Handles POST requests to save contact form submissions.
- **Gallery API**: Handles GET requests to retrieve images from the database.
- **Environment Variables**: Configuration for `PORT` and `MONGO_URI` stored in a `.env` file.
- **Middleware**: Utilizes CORS, Helmet, and JSON parsing for security and data handling.

## Frontend

The frontend is developed using HTML, CSS, and JavaScript, ensuring a mobile-friendly and responsive design. Key features include:

- **Responsive Design**: Utilizes Flexbox and Grid for layout.
- **JavaScript Functionality**: Handles form submissions and API calls for the gallery.

## Setup Instructions

1. Navigate to the project directory.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the server.

## Usage

Once the server is running, you can access the website at `http://localhost:<PORT>`, where `<PORT>` is defined in your `.env` file. You can interact with the various pages, submit the contact form, and view the gallery of images.

## License

This project is open-source and available for modification and distribution.