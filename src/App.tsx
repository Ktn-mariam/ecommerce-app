import React from 'react'
import SearchBar from './components/SearchBar'
import { ChakraProvider } from '@chakra-ui/react'
import { ProductListContextProvider } from './components/helpers/context'
import ProductList from './components/ProductList'
import Categories from './components/Categories'
import { Flex } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <ProductListContextProvider>
        <div className="App">
          <Flex>
            <Categories />
            <Flex direction="column" flexGrow="1">
              <SearchBar />
              <ProductList />
            </Flex>
          </Flex>
        </div>
      </ProductListContextProvider>
    </ChakraProvider>
  )
}

export default App
