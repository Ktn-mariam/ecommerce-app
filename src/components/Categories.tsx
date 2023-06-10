import React, { useContext } from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ProductListContext from './helpers/context'

interface CategoryProps {
  category: string
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { currentCategory, setCurrentCategory } = useContext(ProductListContext)
  return (
    <HStack
      direction="row"
      justifyContent="space-between"
      onClick={() => {
        setCurrentCategory(category)
      }}
      _hover={{ cursor: 'pointer' }}
    >
      <Text
        textTransform="capitalize"
        color={currentCategory === category ? 'grey.500' : 'grey.900'}
        fontWeight={currentCategory === category ? 'bold' : 'medium'}
      >
        {category}
      </Text>
      <ChevronRightIcon />
    </HStack>
  )
}

function Categories() {
  const { categories } = useContext(ProductListContext)
  return (
    <Box width="200px">
      <Category category="All" />
      {categories.map((category) => {
        return <Category category={category} />
      })}
    </Box>
  )
}

export default Categories
