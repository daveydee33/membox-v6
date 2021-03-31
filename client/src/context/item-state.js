import React, { useState } from 'react'
import ItemContext from './item-context'

const ItemState = (props) => {
  const initialState = []

  const [state, setState] = useState(initialState)

  const addItem = () => {
    const date = new Date()
    setState([...state, date.toString()])
  }

  const logState = () => {
    console.log(state)
  }

  return (
    <ItemContext.Provider
      value={{
        state,
        addItem,
        logState
      }}
    >
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemState
