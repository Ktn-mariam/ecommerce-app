import { useContext } from 'react'
import ProductListContext from './helpers/context'
import { Grid } from '@chakra-ui/react'
import Product from './Product'

interface ProductListProps {
  sortBy: string | null
}

const ProductList: React.FC<ProductListProps> = ({ sortBy }) => {
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
    <div>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        rowGap={'5px'}
        columnGap={'2px'}
      >
        {getProducts().map((product) => {
          return <Product product={product} />
        })}
      </Grid>
    </div>
  )
}

export default ProductList
