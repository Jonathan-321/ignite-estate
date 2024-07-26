# Ignite Estate

Ignite Estate is a full-stack real estate application that allows users to browse, list, and manage properties. 
This project demonstrates the implementation of a modern web application using the MERN stack (MongoDB, Express.js, React, Node.js).

Check out the deployed version: [Ignite Estate](https://ignite-estate.onrender.com/)

## Features

- User authentication (signup, login, Google OAuth)
- Property listing creation and management
- Advanced property search and filtering
- Responsive design for mobile and desktop
- Real-time updates using Redux

## Technologies Used

### Frontend
- React.js
- Redux for state management
- Tailwind CSS for styling
- Vite as the build tool

### Backend
- Node.js
- Express.js
- MongoDB for database
- JSON Web Tokens for authentication

## Project Structure

```
ignite-estate/
│
├── api/                # Backend server
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── index.js        # Server entry point
│
├── client/             # Frontend application
│   ├── src/            # React source files
│   ├── public/         # Public assets
│   └── index.html      # HTML entry point
│
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation (this file)
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ignite-estate.git
   cd ignite-estate
   ```

2. Install dependencies for both backend and frontend:
   ```
   npm install
   cd client && npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```
   npm run dev
   ```

   This will start both the backend server and the frontend development server.

5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Contributing

We welcome contributions to Ignite Estate! If you have suggestions for new features or improvements, please feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to Sahand Ghavidel who immensely helped shape Ignite Estate through tutorials
- Special thanks to the open-source community for the amazing tools and libraries used in this project
