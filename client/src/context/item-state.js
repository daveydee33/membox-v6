import React, { useState } from 'react'
import ItemContext from './item-context'
import axios from 'axios'

const ItemState = (props) => {
  const initialState = {
    items: []
  }

  const [state, setState] = useState(initialState)

  const logState = () => {
    console.log(state)
  }

  const fetchItems = async () => {
    try {
      const res = await axios.get('/api/items')
      setState({ ...state, items: res.data })
    } catch (err) {
      console.error('Get Items error')
      // throw new Error(err)
    }
  }

  const addItem = () => {
    setState({
      ...state,
      items: [
        ...state.items,
        { title: 'Blah', description: 'Blah', _id: Math.random() }
      ]
    })
  }

  return (
    <ItemContext.Provider
      value={{
        state,
        fetchItems,
        logState,
        addItem
      }}
    >
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemState
