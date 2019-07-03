import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import ActionButton from "../components/ActionButton";
import { Link } from "react-router-dom";
import Card from "../components/Card"
import Wrapper from "../components/Wrapper";

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
    })).catch(err => console.log(err))}

    deleteRcd = id => {
      console.log(this.state.books[0]._id)
      API.deleteBook(id).then(res => this.refresh())
    }

    handleFormSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
          <Wrapper>
            {this.state.books.map(book => (
            <Card
            key={book._id}
            id={book._id}
            image={book.image}
            title={book.title}
            author={book.author}
            summary={book.summary}
            deleteRcd={this.deleteRcd}
            />
            ))}
           </Wrapper>
        )
    }
}

export default Saved