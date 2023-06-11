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
        p={{
          lg: '20px 100px 10px 100px',
          md: '20px 50px 10px 50px',
          base: '5px 10px 5px 10px',
        }}
        alignItems="center"
        justifyContent={{ md: 'space-between', base: 'center', sm: 'center' }}
        flexDirection="row"
      >
        <Flex
          align="center"
          display={{ md: 'inline', base: 'none', sm: 'none' }}
        >
          <PhoneIcon />
          +022 319 821 967
        </Flex>
        <Logo colour="black" />
        <Wrap display={{ md: 'inline', base: 'none', sm: 'none' }}>
          <WrapItem>
            <Avatar
              size={{ md: 'sm', base: 'xs' }}
              backgroundColor="#fff"
              border="1px solid black"
              name="Face book"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size={{ md: 'sm', base: 'xs' }}
              backgroundColor="#fff"
              border="1px solid black"
              name="T witter"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size={{ md: 'sm', base: 'xs' }}
              backgroundColor="#fff"
              border="1px solid black"
              name="Insta gram"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size={{ md: 'sm', base: 'xs' }}
              backgroundColor="#fff"
              border="1px solid black"
              name="You tube"
            />
          </WrapItem>
        </Wrap>
      </Flex>
      <Flex
        pr={{ lg: '100px', md: '50px', base: '20px' }}
        pl={{ lg: '100px', md: '50px', base: '20px' }}
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Flex>
          <Text pr={{ md: '20px', base: '10px' }}>Home</Text>
          <Text pr={{ md: '20px', base: '10px' }}>About</Text>
          <Text pr={{ md: '20px', base: '10px' }}>FAQ</Text>
          <Text pr={{ md: '20px', base: '10px' }}>Blog</Text>
        </Flex>
        <Flex>
          <Box pr={{ md: '20px', base: '10px' }}>
            <FavoriteIcon />
          </Box>
          <Box pr={{ md: '20px', base: '10px' }}>
            <ShoppingCartIcon />
          </Box>
          <Box pr={{ md: '20px', base: '10px' }}>
            <PersonIcon />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
