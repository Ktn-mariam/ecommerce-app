import { ProductType } from './helpers/context'
import { Image, Box, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div key={product.id}>
      <Link to={`/${product.id}`}>
        <VStack
          width={{ md: '200px', sm: '150px' }}
          borderRadius="lg"
          overflow="hidden"
          textAlign="center"
          fontFamily="Merriweather"
        >
          <Image
            src={product.image}
            alt="Product Image"
            height={{ md: '200px', sm: '150px' }}
          />
          <Box color="#F3692E" fontSize="10px" textTransform={'capitalize'}>
            {product.category}
          </Box>
          <Box color="#11142D" fontSize={{ md: '20px', sm: '17px' }}>
            {product.title}
          </Box>
          <Box fontSize={{ md: '20px', sm: '17px' }} color="#F3692E">
            ${product.price}
          </Box>
        </VStack>
      </Link>
    </div>
  )
}

export default Product
