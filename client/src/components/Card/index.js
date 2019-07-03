import React from "react";
import Wrapper from "../Wrapper"
import { Container } from "../Grid";

function Card(props) {
  return (
<div className="card mb-3">
  <Container>
  <img src= {props.image} className="card-img-top" alt="..."/>
  </Container>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.summary}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.author}</li>
  </ul>
  <div className="card-body">
    <button onClick={() => props.deleteRcd(props.id)} className="card-link">Delete</button>
    <a href="#" className="card-link">Google Link</a>
  </div>
</div>

  );
}

export default Card;
