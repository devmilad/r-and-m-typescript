import { Box, Flex, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { CardItem } from './CardItem';
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { Paginate } from './paginate/Paginate';
import { Link } from 'react-router-dom';






function Card() {


  let [pageNumber, setPageNumber] = useState<number>(1);
  let [search, setSearch] = useState<string>("");
  const { results, info, isPending, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)

  return (
    <>
{isPending && <Flex justify='center' alignItems="center" my="7">
                                            <Spinner thickness='4px'
                                                  speed='0.65s'
                                                  emptyColor='gray.200'
                                                   color='blue.500'
                                                  size='xl' />
                                 </Flex>}
      {error && <Box display="flex" justifyContent="center" alignItems="center" my='6'>
                            <Heading color="red.500">{error}</Heading>
                          </Box>
      }
      <SimpleGrid p='20px' spacing={10} minChildWidth="300px">

        {results && results.map(r => (
          <CardItem result={r} key={r.id} />
        ))

        }

      </SimpleGrid>
      {info && <Paginate info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />}
    </>

  );
}

export default Card;