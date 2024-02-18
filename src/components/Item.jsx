import Card from 'react-bootstrap/Card';
import { UseDispatch, useDispatch } from 'react-redux';
import React from 'react';
// import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from "../state/index";

function Item(props) {
  const dispatch = useDispatch();
  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title || "Some Random text"} </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text> */}
        <img className="w-100 " src="https://source.unsplash.com/random/300x200/?cars" alt="randm image" />
        <Card.Link>${props.price}</Card.Link>
        <div>
        <button className='mx-2 btn btn-align-content-md-end btn-primary' onClick={()=>{dispatch(removeFromCart(1))}}>-</button>
        Add to cart
        <button className='mx-2 btn btn-align-content-md-end btn-primary' onClick={()=>{dispatch(addToCart(1))}}>+</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;