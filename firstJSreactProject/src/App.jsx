// import { useState } from 'react'
import Header from './components/header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import Wrapper from './components/ContentWrapper.jsx'
import Age from './components/Age.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Wrapper>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Wrapper>
    <Age></Age>
    </>
  )
}

export default App
