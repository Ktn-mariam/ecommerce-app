import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'
import Categories from '../components/Categories'
import { Flex } from '@chakra-ui/react'
import SortFilter from '../components/SortFilter'
import FilterRange from '../components/FilterRange'

function ProductsPage() {
  const [sortBy, setSortBy] = useState<string | null>(null)
  const [filter, setFilter] = useState<Record<string, number>>({
    min: 0,
    max: 1000,
  })
  return (
    <Box>
      <Flex
        p={{
          lg: '30px 100px 0px 100px',
          md: '30px 50px 0px 50px',
          base: '30px 10px 0px 10px',
        }}
      >
        <Flex direction="column">
          <FilterRange filter={filter} setFilter={setFilter} />
          <Categories />
        </Flex>
        <Flex pl="10px" direction="column" flexGrow="1">
          <SearchBar />
          <SortFilter setSortBy={setSortBy} />
          <ProductList sortBy={sortBy} filter={filter} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductsPage
