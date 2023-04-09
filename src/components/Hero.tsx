
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';
import SearchBar from './SearchBar';



export default function Hero() {
  return (
    <>
    

      <Container maxW={'3xl'} >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 36 }}
         >
          <Heading
            fontWeight={600}
            fontSize={{ base: 'lg', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Rick and Morty <br />
            <Text as={'span'} color={'green.400'}>
            Character Wiki
            </Text>
          </Heading>

           <SearchBar />
          
          

        </Stack>
      </Container>
    </>
  );
}

