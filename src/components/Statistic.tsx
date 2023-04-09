import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode,useState } from 'react';
import CountUp from 'react-countup';
  import { FaPhotoVideo, FaUserFriends } from 'react-icons/fa';
  import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import {  DataType, useFetch } from '../hooks/useFetch';
  
  interface StatsCardProps {
    title: string;
    stat?: number;
    icon: ReactNode;
  }
 

  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                <CountUp end={stat} duration={3}/>
               
              
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
const  Statistic=()=> {


  

  const {info}=useFetch(`https://rickandmortyapi.com/api/character`)
  const {data}=useFetch(`https://rickandmortyapi.com/api/location`)


    return (
  
       <Box maxW="6xl" mx={'auto'}  px={{ base: 2, sm: 12, md: 17 }} mb={20}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Our company is expanding, you could be too.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          
          <StatsCard
            title={'Number of Character'}
            stat={info?.count}
            icon={<FaUserFriends size={'3em'} />}
          />
          <StatsCard
            title={'Number of Pages'}
            stat={info?.pages}
            icon={<FiServer  size={'3em'} />}
          />
          <StatsCard
            title={'Number of Location'}
            stat={data?.info.count}
            icon={<GoLocation  size={'3em'} />}
          />
        </SimpleGrid>
   
      </Box>

        
     

      
    );
  }
  export default Statistic;