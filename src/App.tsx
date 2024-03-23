import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Rotas from './Routes'
import Footer from './components/Footer'

import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
