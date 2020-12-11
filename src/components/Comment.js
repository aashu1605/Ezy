import React from "react";
import Card from 'react-bootstrap/Card'
function Comment(props)
{
  return(
    <Card style={{ width: '30rem' }}>
          <Card.Body>
            <h3>Comments</h3>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.email}</Card.Subtitle>
            <Card.Text>{props.body}</Card.Text>
          </Card.Body>
    </Card>)
}
export default Comment;
