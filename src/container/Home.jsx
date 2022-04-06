import React from 'react'
import background from '../images/bg.jpg'
import { Card } from '../components'
import './home.css'

const Home = () => {
  return (
    <div
      className="App w-screen h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Card />
    </div>
  )
}

export default Home
