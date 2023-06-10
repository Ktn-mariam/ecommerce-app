import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import { ChakraProvider } from '@chakra-ui/react'
import { ProductListContextProvider } from './components/helpers/context'
import ProductList from './components/ProductList'
import Categories from './components/Categories'
import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
import SortFilter from './components/SortFilter'
function App() {
  const [sortBy, setSortBy] = useState<string | null>(null)
  return (
    <ChakraProvider>
      <ProductListContextProvider>
        <div className="App">
          <Header />
          <Flex p="30px 100px 0px 100px">
            <Categories />
            <Flex pl="10px" direction="column" flexGrow="1">
              <SearchBar />
              <SortFilter setSortBy={setSortBy} />
              <ProductList sortBy={sortBy} />
            </Flex>
          </Flex>
        </div>
      </ProductListContextProvider>
    </ChakraProvider>
  )
}

export default App
