import React from "react"
import Card from 'react-bootstrap/Card'
function Details(props)
{
  return(

    <Card style={{ width: '30rem' }}>
          <Card.Body>
            <h3>Details</h3>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.id}</Card.Subtitle>
            <Card.Text>{props.body}</Card.Text>
          </Card.Body>
    </Card>
)
}
export default Details;
