import { render } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('should renders a component', () => {
    render(<App />)
    expect(<App />).toBeTruthy()
  })
})
