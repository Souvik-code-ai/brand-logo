import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Appu from './App.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
// import New from './New.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Appu name={"souvik"} age={44}/> */}
    <Header/>
    <Body/>
    <Footer/>
  </StrictMode>,
)
