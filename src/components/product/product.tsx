import React from 'react'
import styled from 'styled-components'
import './product.scss'
import { ProductProps } from '../../types'
import catImage from '../../assets/images/cat.png'

interface ProductStateProps {
  state: string
}

const stateMap: any = {
  color: {
    default: '#1698d9',
    selected: '#D91667',
    disabled: '#B3B3B3',
  },
}

const ProductItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 320px;
`

const ProductLink = styled.a<ProductStateProps>`
  display: block;
  text-decoration: none;
  position: relative;
  width: 320px;
  height: 480px;
  padding: 21px 48px;
  margin-bottom: 14px;
  background-color: #fff;
  box-shadow: inset 0 0 0 4px
    ${(props: ProductStateProps) => stateMap.color[props.state]};
  clip-path: polygon(42px 0%, 100% 0, 100% 100%, 0 100%, 0 42px);
  border-radius: 10px;
  background-image: url(${catImage});
  background-repeat: no-repeat;
  background-position: left -24px bottom -88px;
  pointer-events: ${(props: ProductStateProps) =>
    props.state === 'disabled' ? 'none' : 'auto'};

  &:before {
    content: '';
    display: block;
    width: 4px;
    height: 60px;
    background-color: ${(props: ProductStateProps) =>
      stateMap.color[props.state]};
    position: absolute;
    left: 22px;
    top: -9px;
    transform: rotateZ(45deg);

    @media all and (-ms-high-contrast: none) {
      display: none;
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props: ProductStateProps) =>
      props.state === 'disabled' ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 4px
      ${(props: ProductStateProps) =>
        props.state === 'default' ? '#2EA8E6' : '#E52E7A'};
  }
`

const ProductCategory = styled.div<ProductStateProps>`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
  color: ${(props: ProductStateProps) =>
    props.state === 'selected' ? '#E62E7A' : '#666666'};
`

const ProductTitle = styled.div`
  color: #000000;
  font-size: 48px;
  line-height: 56px;
  font-weight: bold;
`

const ProductFilling = styled.div`
  color: #000000;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`

const ProductInfoItem = styled.div`
  color: #666666;
  font-size: 14px;
  line-height: 16px;
`

const ProductWeight = styled.div<ProductStateProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ProductStateProps) =>
    stateMap.color[props.state]};
  font-size: 42px;
  line-height: 38px;
  color: #fff;

  .unit {
    font-size: 21px;
    line-height: 21px;
  }
`

const ProductBottomText = styled.div<ProductStateProps>`
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  color: ${(props: ProductStateProps) =>
    props.state === 'disabled' ? '#FFFF66' : '#ffffff'};

  a {
    color: #22a7e9;
    border-bottom: 1px dashed;
  }
`

export default function Product({ product, onProductClick }: ProductProps) {
  const {
    key,
    category,
    state,
    title,
    filling,
    info,
    weight,
    bottomtext,
    bottomfailtext,
  } = product
  let text: string
  switch (state) {
    case 'default':
      text = `Чего сидишь? Порадуй котэ, `
      break
    case 'selected':
      text = bottomtext
      break
    case 'disabled':
      text = bottomfailtext
      break
  }
  return (
    <ProductItem className="product">
      <ProductLink
        className="product__link"
        href={'#'}
        state={state}
        onClick={(evt) => {
          evt.preventDefault()
          onProductClick(key)
        }}
      >
        <ProductCategory state={state}>
          {state === 'selected' ? 'Котэ не одобряет?' : category}
        </ProductCategory>
        <ProductTitle>{title}</ProductTitle>
        <ProductFilling>{filling}</ProductFilling>
        <div>
          {info.map((infoItem, index) => (
            <ProductInfoItem
              dangerouslySetInnerHTML={{ __html: infoItem }}
              key={index}
            />
          ))}
        </div>
        <ProductWeight state={state}>
          <span>{weight.toLocaleString()}</span>
          <span className="unit">кг</span>
        </ProductWeight>
      </ProductLink>
      <ProductBottomText state={state}>
        {text}{' '}
        {state === 'default' ? (
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault()
              onProductClick(key)
            }}
          >
            купи
          </a>
        ) : (
          ''
        )}
      </ProductBottomText>
    </ProductItem>
  )
}
