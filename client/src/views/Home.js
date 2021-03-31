import { useEffect, useState, useContext } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from 'reactstrap'
import ItemContext from '../context/item-context'

const Home = () => {
  const { state, fetchItems, addItem } = useContext(ItemContext)
  const { items } = state

  // fetch items on component load
  useEffect(() => {
    fetchItems()
  }, [])

  // Add an item
  useEffect(() => {
    addItem()
  }, [])

  // display items on state change
  useEffect(() => {
    if (!items) return <h4>Loading...</h4>

    if (items.length === 0) {
      return <h4>Add some items to get started</h4>
    }
  }, [state])

  return (
    <div>
      {items.map((item) => (
        <Card key={item._id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default Home
