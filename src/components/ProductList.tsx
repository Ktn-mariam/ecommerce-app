import { useContext } from 'react'
import ProductListContext from './helpers/context'
import { Box, Grid } from '@chakra-ui/react'
import Product from './Product'

interface ProductListProps {
  sortBy: string | null
  filter: Record<string, number>
}

const ProductList: React.FC<ProductListProps> = ({ sortBy, filter }) => {
  const { productList, currentCategory, searchProduct } = useContext(
    ProductListContext,
  )

  const getProducts = () => {
    const products = productList
      .filter((product) => {
        if (currentCategory === 'All') {
          return product
        } else {
          return product.category === currentCategory
        }
      })
      .filter((product) => {
        if (searchProduct !== null) {
          return product.title
            .toLowerCase()
            .includes(searchProduct.toLowerCase())
        } else {
          return product
        }
      })
      .filter((product) => {
        return product.price >= filter.min && product.price <= filter.max
      })

    let sortedProducts = []
    if (sortBy === 'price') {
      sortedProducts = products.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        } else if (a.price > b.price) {
          return 1
        } else {
          return 0
        }
      })
    } else {
      sortedProducts = products
    }
    return sortedProducts
  }
  return (
    <Box>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        rowGap={'5px'}
        columnGap={'2px'}
        pl={{ lg: '20px' }}
        mb={{ md: '80px', base: '50px' }}
      >
        {getProducts().map((product) => {
          return <Product product={product} />
        })}
      </Grid>
    </Box>
  )
}

export default ProductList
