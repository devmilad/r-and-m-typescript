import {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Box, Flex, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import { CardItem } from '../components/CardItem'
import { Paginate } from '../components/paginate/Paginate'
import { Visited } from '../components/Visited'

export const Search = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    
    let [pageNumber, setPageNumber] = useState(1);
    const {  results, info, isPending,error} = useFetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${query}`)
    const navigate = useNavigate()
       useEffect(() => {
        if (error !== null) { 
            return  navigate('/404')
        }
          
       }, [error]);
    document.title=`Serach Result (${query})`
  return (
    <>
    {isPending && <Flex justify='center' alignItems="center" my="7">
                                            <Spinner thickness='4px'
                                                  speed='0.65s'
                                                  emptyColor='gray.200'
                                                   color='blue.500'
                                                  size='xl' />
                                 </Flex>}
     { !isPending &&  <Box display="flex" justifyContent="center" alignItems="center" my='6'>
        <Heading color="blue.500">Search results for ({`${query}`})</Heading>
    </Box>}
            <SimpleGrid p='20px' spacing={10}  minChildWidth="300px">
   
   {results && results.map(r=>(
     <CardItem result={r} key={r.id}/>
   ))
     
   }
  
 </SimpleGrid>
 {info &&  <Paginate info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}
 <Visited />
    </>
  )
}
