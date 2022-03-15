const mongoose = require("../db/connection");
const seedData = require("./seed.json");
const Poem = require("./models/Poem");

// First we delete the poems
Poem.deleteMany({})
	.then(() => {
		// insert many poems docs
		Poem.insertMany(seedData).then((poem) => {
			console.log("We have poems! 🐹");
			console.log(poem);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
