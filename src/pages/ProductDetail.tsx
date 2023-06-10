import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import ProductListContext from '../components/helpers/context'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function ProductDetail() {
  const { productList } = useContext(ProductListContext)
  return (
    <Flex direction="column">
      <Box>
        <Breadcrumb
          p={{ md: '30px 100px 0px 100px', sm: '10px 10px 0px 10px' }}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink textTransform="capitalize" href="#">
              {productList[0].category}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{productList[0].title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
        p={{ md: '30px 200px 0px 200px', sm: '10px 10px 0px 10px' }}
        direction="row"
      >
        <Box>
          <Image src={productList[0].image} height="500px" />
        </Box>
        <Box pl="60px">
          <Text
            fontFamily="Merriweather"
            fontSize="35px"
            fontWeight="extrabold"
            pt="10px"
          >
            {productList[0].title}
          </Text>
          <Text textTransform="capitalize" fontFamily="Merriweather">
            {productList[0].category}
          </Text>
          <Text
            fontFamily="Merriweather"
            fontSize="40px"
            color="#F86338"
            pt="20px"
          >
            ${productList[0].price}
          </Text>
          <Text
            fontFamily="Merriweather"
            fontSize="20px"
            fontWeight="bold"
            pt="20px"
          >
            Description
          </Text>
          <Text>{productList[0].description}</Text>
          <Button rightIcon={<ShoppingCartIcon />} colorScheme="#F86338">
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ProductDetail
