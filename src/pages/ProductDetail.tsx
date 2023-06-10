import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import ProductListContext from '../components/helpers/context'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { productList, setCurrentCategory } = useContext(ProductListContext)
  const { id } = useParams()
  const parsedProductId = id ? parseInt(id) : undefined
  const product = productList.find((product) => {
    return parsedProductId !== undefined && product.id === parsedProductId
  })
  console.log(product)

  return (
    <Flex direction="column">
      <Box>
        <Breadcrumb
          p={{ md: '30px 100px 0px 100px', sm: '10px 10px 0px 10px' }}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              textTransform="capitalize"
              href="/"
              onClick={() => {
                setCurrentCategory(product?.category || 'All')
              }}
            >
              {product?.category}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{product?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
        p={{ md: '30px 200px 0px 200px', sm: '10px 10px 0px 10px' }}
        direction="row"
      >
        <Box>
          <Image src={product?.image} height="500px" />
        </Box>
        <Box pl="60px">
          <Text
            fontFamily="Merriweather"
            fontSize="35px"
            fontWeight="extrabold"
            pt="10px"
          >
            {product?.title}
          </Text>
          <Text textTransform="capitalize" fontFamily="Merriweather">
            {product?.category}
          </Text>
          <Text
            fontFamily="Merriweather"
            fontSize="40px"
            color="#F86338"
            pt="20px"
          >
            ${product?.price}
          </Text>
          <Text
            fontFamily="Merriweather"
            fontSize="20px"
            fontWeight="bold"
            pt="20px"
          >
            Description
          </Text>
          <Text>{product?.description}</Text>
          <Button rightIcon={<ShoppingCartIcon />} colorScheme="#F86338">
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ProductDetail