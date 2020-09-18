import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import './products-list.scss'
import Product from '../product/product'
import { ProductsProps } from '../../types'

const Products = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1280px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export default function ProductsList(props: ProductsProps) {
  const [products, setProducts] = useState(props.products)

  const onProductClick = (key: string) => {
    const items = products.map((item) => {
      if (item.key === key) {
        item.state = item.state === 'selected' ? 'default' : 'selected'
      }
      return item
    })
    setProducts(items)
  }

  return (
    <Products className="products-list">
      {products.map((product) => {
        return (
          <Fragment key={product.key}>
            <Product product={product} onProductClick={onProductClick} />
          </Fragment>
        )
      })}
    </Products>
  )
}
