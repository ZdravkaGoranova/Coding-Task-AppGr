import { useState } from 'react'

import './App.css'
import Header from './Components/Pages/Header'
import Main from './Components/Pages/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>
 
    </>
  )
}

export default App
