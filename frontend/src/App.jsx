import { useState } from 'react'
import './App.css'
import Login from './components/pages/Login.jsx'
import Productcard from './components/Productcard.jsx'

function App() {
  return (
    <>
      <Productcard
        name="Cool Headphones"
        category="Electronics"
        // image="https://via.placeholder.com/150"
        price={99.99}
        discount={10}
        rating={4.5}
/>
    </>
  )
}

export default App
