import Logo from './Logo'
import { Box, Flex, Text } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

function Header() {
  return (
    <Box>
      <Flex
        p={{ md: '20px 20px 10px 20px', sm: '10px 10px 5px 10px' }}
        alignItems="center"
        justifyContent="space-around"
        flexDirection={{ md: 'row', sm: 'column' }}
      >
        <Flex align="center">
          <PhoneIcon />
          +022 319 821 967
        </Flex>
        <Logo />
        <Wrap>
          <WrapItem>
            <Avatar size="sm" backgroundColor="#F86338" name="Face book" />
          </WrapItem>
          <WrapItem>
            <Avatar size="sm" backgroundColor="#F86338" name="T witter" />
          </WrapItem>
          <WrapItem>
            <Avatar size="sm" backgroundColor="#F86338" name="Insta gram" />
          </WrapItem>
          <WrapItem>
            <Avatar size="sm" backgroundColor="#F86338" name="You tube" />
          </WrapItem>
        </Wrap>
      </Flex>
      <Flex
        pr="100px"
        pl="100px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          <Text pr="20px">Home</Text>
          <Text pr="20px">About</Text>
          <Text pr="20px">FAQ</Text>
          <Text pr="20px">Blog</Text>
        </Flex>
        <Flex>
          <Box pr="20px">
            <FavoriteIcon />
          </Box>
          <Box pr="20px">
            <ShoppingCartIcon />
          </Box>
          <Box pr="20px">
            <PersonIcon />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
