import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import ActionButton from "../components/ActionButton";
import Wrapper from "../components/Wrapper";
import Form from "../components/Form";
import Card from "../components/Card";
import { Query } from "mongoose";
import API from "../utils/API";
import Detail from "../components/Detail";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    result: [],
    search: "",
    detail:{}
  };

  searchBooks = (query) => {
    API.search(query)
      .then(res => 
        // console.log(res.data)
      this.setState({ result: res.data.items })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
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

  render() {
    return (
      <>
        <Form
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        {this.state.result.length ? (

          <List>
            {this.state.result.map(book => (
              <ListItem key={book.id}>
                <Link to={"/books/" + book.id}>
                  <strong>
                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                  </strong>
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      

      </>
    )
  }
}

export default Home;