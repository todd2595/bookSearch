const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  image: String,
  link: { type: String },
  summary: String,
  published: String,
  date: { type: Date, default: Date.now },
  key: ObjectId
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
