import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'
import Categories from '../components/Categories'
import { Flex } from '@chakra-ui/react'
import SortFilter from '../components/SortFilter'

function ProductsPage() {
  const [sortBy, setSortBy] = useState<string | null>(null)
  return (
    <Box>
      <Flex p={{ md: '30px 100px 0px 100px', base: '30px 10px 0px 10px' }}>
        <Categories />
        <Flex pl="10px" direction="column" flexGrow="1">
          <SearchBar />
          <SortFilter setSortBy={setSortBy} />
          <ProductList sortBy={sortBy} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductsPage
