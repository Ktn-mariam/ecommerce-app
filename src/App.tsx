import React from 'react'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { ProductListContextProvider } from './components/helpers/context'
import ProductList from './components/ProductList'
import Categories from './components/Categories'
function App() {
  return (
    <ChakraProvider>
      <ProductListContextProvider>
        <div className="App">
          <NavBar />
          <ProductList />
          <Categories />
        </div>
      </ProductListContextProvider>
    </ChakraProvider>
  )
}

export default App
