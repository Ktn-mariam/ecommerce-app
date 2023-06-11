import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

function Footer() {
  return (
    <Grid
      backgroundColor="#F86338"
      color="#fff"
      p={{ md: '100px 80px', base: '60px 40px' }}
      mt="40px"
      fontSize="13px"
      templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)' }}
    >
      <Flex direction="column" justify="space-between" gridColumn="span 1">
        <Box>
          <Box m="-20px">
            <Logo colour={'white'} />
          </Box>
          <Text>
            OurStudio is a digital agency UI / UX Design anf Website Development
            located in Ohio, United Sates of America
          </Text>
        </Box>
        <Text align="left" pt="40px">
          Copypright Tanah Air Studio
        </Text>
      </Flex>
      <Box gridColumn="span 1"></Box>
      <Flex direction="column" gridColumn="span 1" gap="10px" pt="40px">
        <Text fontWeight="bold">Our Social Media</Text>
        <Text>Facebook</Text>
        <Text>Twitter</Text>
        <Text>Instagram</Text>
        <Text>Youtube</Text>
      </Flex>
      <Flex direction="column" gridColumn="span 1" gap="10px" pt="40px">
        <Text fontWeight="bold">Contact</Text>
        <Flex gap="5px">
          <LocationOnIcon />
          8819 Ohio St. South Gate, California 90280
        </Flex>
        <Flex gap="5px">
          <EmailIcon />
          ourstudio@hello.com
        </Flex>
        <Flex gap="5px">
          <LocalPhoneIcon />
          +271 386-647-3637
        </Flex>
      </Flex>
    </Grid>
  )
}

export default Footer
