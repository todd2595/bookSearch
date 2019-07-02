import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import ActionButton from "../components/ActionButton";
import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
     this.refresh();
     
    }

    refresh = () => {
      API.getBooks().then(res => this.setState({
        books: res.data
    })).catch(err => console.log(err));
    
    }

    deleteRcd = id => {
      API.deleteBook(id).then(res => this.refresh())
      console.log(this.state.books)
    }



    handleFormSubmit = event => {
        event.preventDefault();
       
    }


    render() {
        return (
            <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book.id}>
                  <strong>
                    {book.title} by {book.authors}
                  </strong>
                </Link>
                <ActionButton value = {book._id} onClick={() => this.deleteRcd(book._id)} />
              </ListItem>
            ))}
          </List>

        )
    }
}

export default Saved