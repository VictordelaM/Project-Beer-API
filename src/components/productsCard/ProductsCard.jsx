import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = ({ product }) => {
    console.log(product.id);
    return (
        <>
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt="" />
            <Link to={`/allbeers/${product.id}`} >Read More</Link>
        </>
    )
}

export default ProductsCard