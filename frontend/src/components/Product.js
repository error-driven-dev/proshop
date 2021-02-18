import React from 'react'
import { Card } from 'react-bootstrap'

export const Product = ({product}) => {
    return (
       <>
       <Card>
           <Card.Img src={product}></Card.Img>
       </Card>
       </>
    )
}
