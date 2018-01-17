
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'
import App from '../src/js/components/App'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
  })
  test('has a valid snapshot', () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})