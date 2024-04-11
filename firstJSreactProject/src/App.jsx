// import { useState } from 'react'
import Header from './components/HeaderFolder/Header'
import Body from './components/BodyFolder/Body'
import Footer from './components/FooterFolder/Footer'
import Wrapper from './components/WrapperFolder/ContentWrapper'
import Age from './components/AgeFolder/Age'
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
