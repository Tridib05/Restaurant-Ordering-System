# Restaurant Ordering System - Setup Guide

## Prerequisites

Before running the application, you need to have the following installed:

- Node.js (v14 or higher)
- MySQL Server
- npm (comes with Node.js)

## Database Setup

1. Start your MySQL server
2. Create a database named `db_restaurant`
3. Import the SQL file located at `frontend/src/resources/db_restaurant.sql`

### Creating the database:

```sql
CREATE DATABASE db_restaurant;
USE db_restaurant;
```

### Importing the database schema:

```bash
mysql -u root -p db_restaurant < frontend/src/resources/db_restaurant.sql
```

Or run the SQL commands manually in your MySQL client.

## Environment Configuration

If your MySQL server has a different username/password, update the database configuration in `backend/config/database.js`:

```javascript
const db = mysql.createConnection({
    host: "localhost",           // Your MySQL host
    user: "root",               // Your MySQL username
    password: "",               // Your MySQL password
    database: "db_restaurant"   // Your database name
});
```

## Running the Application

### Method 1: Using npm scripts (Recommended)

```bash
# Install all dependencies
npm run install-all

# Build the frontend
npm run build

# Start the backend server
cd backend
npm start
```

The application will be available at `http://localhost:8001`

### Method 2: Development mode (Frontend + Backend)

```bash
# Terminal 1: Start the backend
cd backend
npm start

# Terminal 2: Start the frontend in development mode
cd frontend
npm run serve
```

In development mode:
- Frontend runs on `http://localhost:8080`
- Backend runs on `http://localhost:8001`
- The frontend will automatically proxy API requests to the backend

## Available Scripts

In the project root directory:

- `npm run install-all` - Install dependencies for all projects
- `npm run dev` - Run both frontend and backend concurrently (requires concurrent setup)
- `npm run build` - Build the frontend for production
- `npm run start` - Start the backend server

In the backend directory:

- `npm start` - Start the backend server with nodemon

In the frontend directory:

- `npm run serve` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Lint and fix files

## Troubleshooting

### Database Connection Issues
- Make sure MySQL server is running
- Verify database credentials in `backend/config/database.js`
- Ensure the `db_restaurant` database exists

### Port Issues
- Default backend port is 8001
- Default frontend port is 8080
- Change ports in `backend/index.js` and `frontend/vue.config.js` if needed

### Frontend Build Issues
- Make sure you've run `npm install` in the frontend directory
- Check that you have enough disk space
- Clear npm cache if needed: `npm cache clean --force`