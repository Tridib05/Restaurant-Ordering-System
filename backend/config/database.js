import mysql from "mysql2";

// create the connection to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",  // You may need to update this if your MySQL has a password
    database: "db_restaurant"
});

db.connect(error => {
  if (error) {
    console.error("Database connection failed:", error);
    // Don't throw error, just log it so the server can still start
    console.log("Make sure MySQL is running and the 'db_restaurant' database exists");
  } else {
    console.log("Successfully connected to the database.");
  }
});

export default db;