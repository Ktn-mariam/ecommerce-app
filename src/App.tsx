import React from 'react'
import SearchBar from './components/SearchBar'
import { ChakraProvider } from '@chakra-ui/react'
import { ProductListContextProvider } from './components/helpers/context'
import ProductList from './components/ProductList'
import Categories from './components/Categories'
import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
function App() {
  return (
    <ChakraProvider>
      <ProductListContextProvider>
        <div className="App">
          <Header />
          <Flex p="30px 80px 0px 80px">
            <Categories />
            <Flex pl="10px" direction="column" flexGrow="1">
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
