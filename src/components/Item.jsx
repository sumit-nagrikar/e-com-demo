import Card from 'react-bootstrap/Card';
import React from 'react';

function Item(props) {
  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title || "Some Random text"} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Card.Link>${props.price}</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Item;