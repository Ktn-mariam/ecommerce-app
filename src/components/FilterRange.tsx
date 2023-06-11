import {
  Box,
  Flex,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

interface FilterRangeProps {
  setFilter: React.Dispatch<React.SetStateAction<Record<string, number>>>
  filter: Record<string, number>
}

const FilterRange: React.FC<FilterRangeProps> = ({ setFilter, filter }) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text fontSize="20px" fontWeight="extrabold" fontFamily="Merriweather">
          Price
        </Text>
        <FilterAltIcon />
      </Flex>
      <Box p="10px 10px 0px 10px">
        <RangeSlider
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          step={10}
          onChangeEnd={(val) => {
            setFilter({
              min: val[0],
              max: val[1],
            })
          }}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={3} index={0} />
          <RangeSliderThumb boxSize={3} index={1} />
        </RangeSlider>
      </Box>
      <Text
        pr="10px"
        align="end"
        fontSize="10px"
      >{`$${filter.min} - $${filter.max}`}</Text>
    </Box>
  )
}

export default FilterRange
