import React from 'react'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <Box p="10px" pt="0px">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input borderColor="#F86338" type="text" placeholder="Search product" />
      </InputGroup>
    </Box>
  )
}

export default NavBar
