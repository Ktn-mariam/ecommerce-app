import { useContext } from 'react'
import ProductListContext from './helpers/context'
import { Grid } from '@chakra-ui/react'
import Product from './Product'

function ProductList() {
  const { productList, currentCategory, searchProduct } = useContext(
    ProductListContext,
  )
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
        {productList
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
          .map((product) => {
            return <Product product={product} />
          })}
      </Grid>
    </div>
  )
}

export default ProductList
