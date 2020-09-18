import React from 'react'
import styled from 'styled-components'
import './heading.scss'

const Header = styled.h1`
  font-family: 'Exo20', 'Arial Narrow', sans-serif;
  color: #fff;
  font-size: 36px;
  font-weight: 100;
  text-align: center;
`

type HeadingProps = {
  text: string
}

export default function Heading({ text }: HeadingProps) {
  return <Header className="heading">{text}</Header>
}
