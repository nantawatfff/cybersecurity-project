# Cyber Project with Strapi Backend and HTML Frontend

This project is a simple cyber application built with Strapi as the backend, PostgreSQL as the database with encryption, and a basic HTML frontend to perform CRUD (Create, Read, Update, Delete) operations on the content managed by Strapi.

## Features

- **Strapi Backend**: Utilizes Strapi, an open-source headless CMS, as the backend to manage content and provide a RESTful API.
- **PostgreSQL Database with Encryption**: Integrates PostgreSQL as the database management system with encryption features for enhanced security of sensitive data.
- **HTML Frontend**: Implements a basic HTML frontend to interact with the Strapi backend, allowing users to perform CRUD operations on the cyber content.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations on cyber content through the frontend interface.

## Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL installed and configured with encryption support.
- Basic knowledge of HTML, JavaScript, and REST APIs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nantawatfff/cyber-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cyber-project
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Configure the Strapi backend:
Follow the Strapi documentation for setting up your backend server.
Configure PostgreSQL as the database and enable encryption features if required.
Define your content types and API endpoints.

5. Start the backend server:
   ```bash
   docker-compose up
   ```
6. Open frontend/index.html in your browser to access the HTML frontend.

## Usage
- Use the HTML frontend interface to perform CRUD operations on the cyber content managed by the Strapi backend.
- Create, read, update, and delete cyber items as needed.
- Test the encryption features by storing sensitive data in the PostgreSQL database.

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests for any improvements or features you'd like to add.

## Acknowledgements
- **Strapi** - Headless CMS used for backend management.
- **PostgreSQL** - Open-source relational database system.
- **Node.js** - JavaScript runtime used for server-side development.