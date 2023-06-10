import React, { useEffect, useState } from 'react'
import { HStack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface CategoryProps {
  category: string
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <HStack direction="row" justifyContent="space-between">
      <Text textTransform="capitalize">{category}</Text>
      <ChevronRightIcon />
    </HStack>
  )
}

function Categories() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        )
        const json = await response.json()
        setCategories(json)
      } catch (error) {
        console.log('Error fetching items:', error)
      }
    }
    fetchCategories()
  }, [categories])

  return (
    <div>
      {categories.map((category) => {
        return <Category category={category} />
      })}
    </div>
  )
}

export default Categories
