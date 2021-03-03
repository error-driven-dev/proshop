import React, { useState, useEffect } from "react"

import { Product } from "./Product"
import { Row, Col } from "react-bootstrap"
import axios from "axios"

export const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const prods = await axios.get("/api/products")
      setProducts(prods.data)
      console.log(products)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product._id}></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}
