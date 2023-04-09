import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
  Button,
} from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../features/profileSlice';
import Hero from '../components/Hero'
import { Visited } from '../components/Visited';

export const Profile = () => {

  let user: string = window.location.pathname.split("/")[2]
  let user_id: number = Number(user.split("-")[0])
  const navigate = useNavigate()
  const url: string = `https://rickandmortyapi.com/api/character/${user_id}`
  const { data, isPending, error } = useFetch(url)

  const dispatch = useDispatch()

  useEffect(() => {
        
    if (isNaN(user_id)) {
        navigate('/')
    }
    if (user_id <=0 ||  user_id>826) {
        navigate('/404')
    } 
      
   dispatch(addProfile({
      id:user_id,
      name:data?.name,
      image:data?.image
   }))
       
    
}, [user_id , data]);

  document.title=`${data?.name}'s Profile Page`
  return (
    <>
      <Hero />
    
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
           
              <Image
                borderRadius="lg"
                src={data?.image}
                alt="some good alt text"
                objectFit="contain"
              />
            
          </Box>
          <Box zIndex="1" width="80%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="2"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <Heading marginTop="1">
            
              {`${data?.name}'s Profile`}
            
          </Heading>
          <Text
            as="b"
            marginTop="5"
            color="green.700"
            fontSize="2xl">
            Species: <Text as='span' fontSize='lg' color="purple">{data?.species}</Text>
          </Text>
          <Text
            as="b"
            marginTop="5"
            color="green.700"
            fontSize="2xl">
            Type: <Text as='span' fontSize='lg' color="purple">{data?.type === '' ? "Not declared" : data?.type}</Text>
          </Text>
          <Text
            as="b"
            marginTop="5"
            color="green.700"
            fontSize="2xl">
            Gender: <Text as='span' fontSize='lg' color="purple">{data?.gender}</Text>
          </Text>
          <Text
            as="b"
            marginTop="5"
            color="green.700"
            fontSize="2xl">
            Location: <Text as='span' fontSize='lg' color="purple">{data?.location.name}</Text>
          </Text>
          <Link to="/" id='back'>
            <Button colorScheme='facebook' leftIcon={<FaArrowLeft />} marginTop={5} >
              Back Home
            </Button>
          </Link>
        </Box>
      </Box>

    </Container>
    <Visited />
    </>
  )
}
