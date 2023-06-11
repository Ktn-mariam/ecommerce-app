import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import ProductListContext from '../components/helpers/context'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
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
          p={{ md: '30px 100px 5px 100px', base: '20px 30px 10px 30px' }}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          fontSize={{ md: '18px', base: '15px' }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              textTransform="capitalize"
              href="/"
              onClick={() => {
                setCurrentCategory(
                  product?.category ? product?.category : 'All',
                )
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
        p={{ md: '30px 200px 0px 200px', base: '10px 30px 50px 30px' }}
        direction={{ md: 'row', base: 'column' }}
        alignItems={{ md: '-moz-initial', base: 'center' }}
      >
        <Box>
          <Image
            src={product?.image}
            height={{ md: '500px', base: '250px' }}
            minW={{ md: '300px', base: '0px' }}
          />
        </Box>
        <Box pl={{ md: '60px', base: '0px' }}>
          <Text
            fontFamily="Merriweather"
            fontSize={{ md: '35px', base: '25px' }}
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
          <Box pt="20px">
            <Button
              color="#fff"
              rightIcon={<ShoppingCartIcon />}
              backgroundColor="#F86338"
              _hover={{ backgroundColor: '#e65b34' }}
            >
              Add to Cart
            </Button>
            {/* <Button colorScheme="blue">Button</Button> */}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ProductDetail
