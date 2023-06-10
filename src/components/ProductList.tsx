import React, { useContext } from 'react'
import ProductListContext, { ProductType } from './helpers/context'
import { Grid, GridItem } from '@chakra-ui/react'
import Product from './Product'

function ProductList() {
  const { productList, currentCategory } = useContext(ProductListContext)
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" rowGap={'5px'} columnGap={'2px'}>
        {productList
          .filter((product) => {
            if (currentCategory === 'All') {
              return product
            } else {
              return product.category === currentCategory
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
