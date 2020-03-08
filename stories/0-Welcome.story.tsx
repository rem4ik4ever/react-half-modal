import * as React from 'react'
import HelloWorld from '../src'
import { storiesOf } from '@storybook/react'

storiesOf('Hello', module).add('World', () => <HelloWorld />)
