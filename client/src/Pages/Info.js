import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Card from "../components/Card";
import Button from "../components/ActionButton";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/jumbotron";
import ActionButton from "../components/ActionButton";

class info extends Component {
    state = {
        book: {}
    }
    componentDidMount() {
        API.search(this.props.match.params.id)
            .then(res => 
                this.setState({ book: res.data.items[0].volumeInfo }))
            .catch(err => console.log(err));
            
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.book);
        console.log(this.state.book.imageLinks);
        API.saveBook({
            title: this.state.book.title,
            author: this.state.book.authors[0],
            summary: this.state.book.description,
            published:this.state.book.publishedDate,
            link:this.state.book.id
          })
            .then(console.log("LL"))
            .catch(err => console.log(err));

    
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.book.title} </h5>
                    <p className="card-text">{this.state.book.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.state.book.authors}</li>
                    <li className="list-group-item">{this.state.book.publisher}</li>
                    <li className="list-group-item">{this.state.book.publishedDate}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <Link to="/saved" onClick={this.handleFormSubmit} className="card-link">Save</Link>
                </div>
            </div>
        );

    }


}
export default info