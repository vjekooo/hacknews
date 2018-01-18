
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'
import Button from '../src/js/components/Button'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<Button>More</Button>, div)
  })
  test('has a valid snapshot', () => {
    const component = renderer.create(<Button>More</Button>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})