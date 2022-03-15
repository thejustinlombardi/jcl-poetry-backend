require("dotenv").config();
const mongoose = require("mongoose");

// Create a .env file and paste your DATABASE_URL in it to connect your MongoDB Atlas database
// Remember to restart your server if needed
const mongoURI = process.env.DATABASE_URL;

mongoose
	.connect(mongoURI)
	.then((conn) => {
		console.log(
			`connected to mongoDB atlas on ${conn.connections[0].name} database. 🐶`
		);
	})
	.catch((err) => {
		console.error(err);
	});

module.exports = mongoose;
