import { Badge, Box, Image, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { resultsType } from '../hooks/useFetch'
import { Status } from './Status'

type charType={
    result:resultsType
  
}

export const CardItem = ({result} : charType) => {

    return (

        <>
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {result.status && (

                    <Status  status={result.status} />
                )}

                <Image
                    src={result.image}
                    alt={`Picture of ${result.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        textAlign={"center"}
                        isTruncated>
                        <Link to={`/profile/${result.id}-${result.name.split(" ").join('-')}`} id='profileVisit'>{result.name}</Link>
                    </Box>
                </Box>
            </Box>

        </>

    )
}
