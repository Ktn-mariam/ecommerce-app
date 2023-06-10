import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import ListIcon from '@mui/icons-material/List'
import GridViewIcon from '@mui/icons-material/GridView'

interface SortFilterProps {
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>
}

const SortFilter: React.FC<SortFilterProps> = ({ setSortBy }) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      pb="30px"
    >
      <Flex direction="row" alignItems="center" pl="10px">
        <label
          htmlFor="filter"
          style={{ fontSize: '14px', paddingRight: '5px' }}
        >
          Sort by
        </label>
        <select
          style={{ fontSize: '14px' }}
          id="filter"
          placeholder="Select filter"
          aria-label="Select filter"
          onChange={(event) => {
            setSortBy(event.target.value)
          }}
        >
          <option>Select Option</option>
          <option value="price">Price</option>
        </select>
      </Flex>
      <Flex pr="5px">
        <Box pr="15px">
          <ListIcon />
        </Box>
        <GridViewIcon />
      </Flex>
    </Flex>
  )
}

export default SortFilter
