import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import AboutMe from './components/AboutMe'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          {/* <Route path="/about" element={<AboutMe />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
