import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import Product from './product'
import '../../index.scss'

const stories = storiesOf('Product', module).addDecorator(centered)

const defaultData = {
  key: `1`,
  state: `default`,
  category: `Сказочное заморское яство`,
  title: `Нямушка`,
  filling: `с фуа-гра`,
  info: [`<b>10</b> порций`, `мышь в подарок`],
  weight: 0.5,
  bottomtext: `Печень утки разварная с артишоками.`,
  bottomfailtext: `Печалька, с фуа-гра закончился.`,
}

const selectedData = {
  key: `2`,
  state: `selected`,
  category: `Сказочное заморское яство`,
  title: `Нямушка`,
  filling: `с рыбой`,
  info: [`<b>40</b> порций`, `<b>2</b> мыши в подарок`],
  weight: 2,
  bottomtext: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
  bottomfailtext: `Печалька, с рыбой закончился.`,
}

const disabledData = {
  key: `3`,
  state: `disabled`,
  category: `Сказочное заморское яство`,
  title: `Нямушка`,
  filling: `с курой`,
  info: [`<b>100</b> порций`, `<b>5</b> мышей в подарок`, `заказчик доволен`],
  weight: 5,
  bottomtext: `Филе из цыплят с трюфелями в бульоне.`,
  bottomfailtext: `Печалька, с курой закончился.`,
}

stories.add('Default', () => <Product product={defaultData} />)

stories.add('Selected', () => <Product product={selectedData} />)

stories.add('Disabled', () => <Product product={disabledData} />)
