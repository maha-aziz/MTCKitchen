import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home/Home'
import Description from './components/description/Description'
import Reviews from './components/reviews/Reviews'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Home />
        <Description />
        <Reviews />
        <Gallery />
        <Footer />
      </Router>
    </>
  )
}

export default App
