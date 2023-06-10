import { ProductType } from './helpers/context'
import { Image, Box, VStack } from '@chakra-ui/react'

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <VStack
        width="200px"
        borderRadius="lg"
        overflow="hidden"
        textAlign="center"
        fontFamily="Merriweather"
      >
        <Image src={product.image} alt="Product Image" height="200px" />
        <Box color="#F3692E" fontSize="10px" textTransform={'capitalize'}>
          {product.category}
        </Box>
        <Box color="#11142D" fontSize="20px">
          {product.title}
        </Box>
        <Box fontSize="20px" color="#F3692E">
          ${product.price}
        </Box>
      </VStack>
    </div>
  )
}

export default Product
