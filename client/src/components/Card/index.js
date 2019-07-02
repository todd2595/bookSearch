import React from "react";

function Card(props) {
  return (
<div className="card" style="width: 18rem;">
  <img src= {props.src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.summary}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.author}</li>
    <li className="list-group-item">{}</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Google Link</a>
  </div>
</div>
  );
}

export default Card;
