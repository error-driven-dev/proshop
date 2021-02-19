import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap"
import products from "../products"
import { Rating } from "../components/Rating"

export const ProductPage = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id)
  return (
    <>
      <Link className='btn btn-dark my-3' to='/' exact>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h5>{product.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating}></Rating> {product.numReviews}{" "}
              Reviews
            </ListGroup.Item>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <Row>
                <Col>
                  <ListGroup.Item>
                    <h5>Price: ${product.price}</h5>
                  </ListGroup.Item>
                </Col>
              </Row>
            </ListGroup>
          </Card>
          <ListGroup>
            <Button
              className='btn btn-block'
              type='button'
              disabled={product.countInStock === 0}
            >
              {product.countInStock > 0 ? "Add to Cart" : "Sold Out"}
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
