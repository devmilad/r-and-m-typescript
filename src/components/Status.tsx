import { Badge } from '@chakra-ui/react'
import React from 'react'

type statusType={
    status:string
}


export const Status = ({status}:statusType) => {


  return (  
     
        
            
            <Badge ml='1' 
                            colorScheme={(status === "Dead")? 'red' : ((status === "Alive" ? 'green' : 'blackAlpha'))} position="absolute" top={2}
                            left={0} 
                             fontSize='1em'
            >
                          {status}
            </Badge>
        
     
 )
}
