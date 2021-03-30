import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from 'reactstrap'

const Home = () => {
  const [items, setItems] = useState()

  useEffect(async () => {
    try {
      const res = await axios.get('/api/items')
      setItems(res.data)
    } catch (err) {
      console.error('Get Items error')
    }
  }, [])

  // TODO if Loading.. display loader..

  if (items.length === 0) {
    return <h4>Add some items to get started</h4>
  }

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
