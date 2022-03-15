//Require the express module
const express = require("express");

//Import the poem model
const Poem = require("../db/models/Poems");

//Instantiate a router
const router = express.Router();

//Get all poems
router.get("/", async (req, res, next) => {
	try {
		const poems = await Poem.find({});
		res.json(poems);
	} catch (error) {
		next(error);
	}
});

// Get poems filtered by theme
// http://localhost:3001/api/poems/theme
router.get("/theme/:theme", async (req, res, next) => {
	try {
		const poems = await Poem.find({ title: `${req.params.title}` });
		res.json(poems);
	} catch (error) {
		next(error);
	}
});

// get one poem by id
// http://localhost:3001/api/poems/id
router.get("/id/:id", async (req, res, next) => {
	try {
		const poem = await Poem.findById(req.params.id);
		if (poem) {
			res.json(poem);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
