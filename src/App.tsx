import { ChakraProvider } from '@chakra-ui/react'
import { ProductListContextProvider } from './components/helpers/context'
import Header from './components/Header'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
function App() {
  return (
    <ChakraProvider>
      <ProductListContextProvider>
        <div className="App">
          <Header />
          {/* <ProductsPage /> */}
          <ProductDetail />
        </div>
      </ProductListContextProvider>
    </ChakraProvider>
  )
}

export default App
