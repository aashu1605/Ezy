import React from "react"
import Card from 'react-bootstrap/Card'
function Author(props)
{
  return(<Card style={{ width: '30rem' }}>
        <Card.Body>
          <h3>Author</h3>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.username}</Card.Subtitle>
          <Card.Text>{props.email}</Card.Text>
          <Card.Text>{props.phone}</Card.Text>
        </Card.Body>
  </Card>
  )
}
export default Author;
