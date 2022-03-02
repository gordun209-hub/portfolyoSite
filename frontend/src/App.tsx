import './index.scss'
import './App.scss'

import { Navbar } from './components'
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work
} from './container/index'

function App() {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
