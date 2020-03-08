import * as React from 'react'
import HalfModal from '../src'
import { storiesOf } from '@storybook/react'

const Parent = () => {
  const [count, setCount] = React.useState(0)
  const [show, toggle] = React.useState(false)
  return (
    <div>
      This is Parent container
      <br />
      Current count: {count}
      <button onClick={e => toggle(true)}>Show modal</button>
      <HalfModal show={show}>
        <button onClick={e => setCount(count + 1)}>Increase count</button>
        <button onClick={e => toggle(false)}>close</button>
      </HalfModal>
    </div>
  )
}

storiesOf('Hello', module).add('World', () => <Parent />)
