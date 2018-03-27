/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('Index shows "☠️hello world ☠️"', () => {
    const app = shallow(<App />)

    expect(app.find('p').text()).toEqual('☠️hello world ☠️')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
