'use strict'

import assert from 'assert'

import { Awesome } from '../src'

describe('Bubbleup Test Example', () => {
  it('should be awesome', () => {
    const awesome = new Awesome(true)

    assert(awesome.isAwesome)
  })
})
