import { useEffect, useState } from "react"
import { Flex, Select, Box, Spinner, Input, Text, Button, Icon } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Image from "next/image"
import { MdCancel } from "react-icons/md"

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilter = () => {
    const [filters, setFilters] = useState(filterData);
    console.log(filters);
    const router = useRouter();
    //search properties function ...
    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        const values = getFilterValues(filterValues);
        values.forEach((item)=>{
            query[item.name] = item.value
        })
        console.log(path);
        router.push({ pathname: path, query })
    }
    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {filters.map((filter)=>(
                <Box key={filter.queryName}>
                    <Select 
                        placeholder={filter.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={(e)=> searchProperties({ [filter.queryName]:e.target.value }) }
                    >
                        {filter?.items?.map((item)=>(
                            <option 
                                key={item.value}
                                value={item.value}
                            >{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilter
