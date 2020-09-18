import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

test('App render', () => {
  const app = renderer.create(<App />)
  const tree = app.toJSON()
  expect(tree).toMatchSnapshot()
})
