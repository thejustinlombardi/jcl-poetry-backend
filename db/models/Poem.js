const mongoose = require("../connection");
const Schema = mongoose.Schema;

const PoemSchema = new Schema({
	title: String,
	id: Number,
	poem: Array,
	theme: String,
});

const Poem = mongoose.model("Poem", PoemSchema);

module.exports = Poem;
