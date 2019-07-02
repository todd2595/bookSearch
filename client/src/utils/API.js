import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  getBooks: function() {
    return axios.get("/saved");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/saved/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/saved" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/books", bookData);
  }
};




