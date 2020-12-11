import React from "react";
import Card from 'react-bootstrap/Card'
const Item = (props) => {
    return (
      <Card>
        <Card.Body>
        <h5>{props.title}</h5>
        </Card.Body>
      </Card>
    );
};

export default Item;
