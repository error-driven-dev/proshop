import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import { Rating } from "./Rating"

export const Product = ({ product }) => {
  return (
    <>
      {" "}
      <Card className='my-3 p-3 rounded'>
        <Card.Header>{product.brand}</Card.Header>
        <Link to={`product/${product._id}`}>
          <Card.Img src={product.image} variant='top'></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text>
              <Rating rating={product.rating}></Rating> {product.numReviews}{" "}
              Reviews
            </Card.Text>
            <Card.Text>${product.price}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
