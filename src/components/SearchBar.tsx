import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useContext } from 'react'
import ProductListContext from './helpers/context'

const SearchBar = () => {
  const { setSearchProduct } = useContext(ProductListContext)
  return (
    <Box p="10px" pt="0px">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input
          borderColor="#F86338"
          type="text"
          placeholder="Search product based on title"
          onChange={(event) => {
            setSearchProduct(event.target.value)
          }}
        />
      </InputGroup>
    </Box>
  )
}

export default SearchBar
