
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Container,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function SearchBar() {

  const [items, setItems] = useState<string>('');
  const navigate = useNavigate()

  const { results } = useFetch(`https://rickandmortyapi.com/api/character/?name=${items}`)


  const formHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (items === "") {
      return navigate('/404')
    }
    navigate(`/search?q=${items}`)
  }


  const onSearch = (nameItem: string) => {
    setItems(nameItem)
  }


  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      direction={'column'}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        rounded={'lg'}
        p={6}
      >

        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={formHandle}
        >
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'black.600',
              }}
              borderColor={useColorModeValue('gray.500', 'gray.900')}
              id={'email'}
              type={'text'}
              onChange={(e) => {
                setItems(e.target.value)
              }}
              value={items}
              placeholder={'Search for charactor'}
              aria-label={'Your Email'}
            />

          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button colorScheme='blue' type='submit'>
              Search
            </Button>
          </FormControl>
        </Stack>
        <UnorderedList listStyleType="none" mt="4" border='1px' borderColor='gray.200' w="50%" textAlign='left' p='3'>
          {results && results.filter(item => {
            const searchTerm = items.toLowerCase();
            const fullName = item.name.toLowerCase()

            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
          })
            .map(r => (
              <ListItem  borderBottom='1px' py='2' borderColor='gray.200'
                                key={r.id} onClick={() => onSearch(r.name)} role="button">
                 {r.name} 
            </ListItem>
            ))}
        </UnorderedList>

      </Container>
    </Flex>
  );
}