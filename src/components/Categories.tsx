import React, { useContext } from 'react'
import { HStack, Text } from '@chakra-ui/react'
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
    >
      <Text
        textTransform="capitalize"
        color={currentCategory === category ? 'grey.500' : 'grey.900'}
        fontWeight={currentCategory === category ? 'bold' : 'normal'}
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
    <div>
      <Category category="All" />
      {categories.map((category) => {
        return <Category category={category} />
      })}
    </div>
  )
}

export default Categories
