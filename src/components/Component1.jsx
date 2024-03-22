import React from 'react'
import Component2 from './Component2'

function Component1(props) {
  return (
    <div>
      Component 1 {props.name}
      <Component2 />
    </div>
  )
}

export default Component1
