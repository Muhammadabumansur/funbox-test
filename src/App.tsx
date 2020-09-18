import React from 'react'
import './App.scss'
import styled from 'styled-components'

import data from './data'

import Heading from './components/header/heading'
import ProductsList from './components/products-list/products-list'

const MainLayout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`

export default function App() {
  return (
    <MainLayout>
      <Heading text="Ты сегодня покормил кота?" />
      <ProductsList products={data} />
    </MainLayout>
  )
}
