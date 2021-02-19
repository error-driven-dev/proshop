import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap'

export const Product = ({product}) => {
    return (
       <> <Link className='btn btn-dark my-3' To="/">Back</Link>
        <Row>
           <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3></ListGroup.Item>
                    <ListGroup.Item>{product.rating} stars {product.numReviews} Reviews</ListGroup.Item>
                    <ListGroupItem>{product.description}</ListGroupItem>
                    </ListGroup></Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup>
                                <Row>
                                    <Col> Price: {product.price}
                                    </Col>
                                </Row>
                            </ListGroup>
                            <ListGroup>
                                <Row>
                                    <Col>       Status: {product.countInStock > 0 ? "Product in Stock" : "Sold Out"}
                                    </Col>
                                </Row>
                     </ListGroup>
                        </Card>
                    </Col>
                
       </Row>

       </>