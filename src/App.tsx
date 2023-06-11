import { ChakraProvider } from '@chakra-ui/react'
import { ProductListContextProvider } from './components/helpers/context'
import Header from './components/Header'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider>
      <ProductListContextProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<ProductsPage />}></Route>
              <Route path="/:id" element={<ProductDetail />}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </ProductListContextProvider>
    </ChakraProvider>
  )
}

export default App
