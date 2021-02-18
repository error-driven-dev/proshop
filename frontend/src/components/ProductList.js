import React from 'react'
import products from '../products'
import { Product } from './Product'

export const ProductList = () => {
    return (
        {products.map((product) => (
            <Product product={product} }></Product>
        ))}
    )
}
