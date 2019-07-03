import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  getBooks: function() {
    return axios.get("/api/saved");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};




