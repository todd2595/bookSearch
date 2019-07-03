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
            key={book.id}
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