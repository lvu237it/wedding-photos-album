import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          {/* <Route path="/https://www.facebook.com/luuvu2003/" element={<Body />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
