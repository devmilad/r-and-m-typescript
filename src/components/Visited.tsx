
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { SimpleGrid,Flex,Avatar,Stack,Text, useColorModeValue, Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

import Footer from "./Footer";
const TestimonialAvatar = ({
  src,
  name,
  id,
}: {
  src?: string;
  name?: string;
  id:number
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} fontSize="sm"><Link to={`/profile/${id}-${name?.split(" ").join('-')}`}>{name}</Link></Text>
      </Stack>
    </Flex>
  );
};


export const Visited = () => {

  const profile = useSelector((state: RootState) => state.profile.value)


  return (
    <div >  
      {profile && <Box display="flex" justifyContent="center" alignItems="center" my='10'>
        <Heading color="black">Latest Viewed Profiles</Heading></Box>} 

      <SimpleGrid p='20px' spacing={10} minChildWidth="90px" my='10'> 
      {profile && profile.map((r,i)=>(
         
       <TestimonialAvatar
              key={i}
              src={r.image}
              name={r.name}
              id={r.id}
            />
            
             ))}
            </SimpleGrid> 
            
      <Footer />
    </div>
  )
}


