import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialFacebookCircular,TiSocialInstagramCircular,TiSocialLinkedinCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'
import '../../Home/home.css'

const Footer = () => {
  return (
    <Box
    padding={'4'}
    bg='blackAlpha.900'
    minH={'10vh'}
    >
        <Stack
        direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width='full'>
                <Heading 
                children='All Rights Reserved' 
                color={'white'}
                />
                <Heading 
                children='@Ali Nayab Nathani' 
                color={'yellow.400'}
                fontFamily="body"
                size={'sm'}
                />
            </VStack>
            <HStack 
            spacing={['2','10']}
            justifyContent='center'
            color={'white'}
            fontSize='50'
            >
                <a href='https://www.facebook.com/NayabNathani22' target={'blank'} rel="noopener noreferrer">
                    <TiSocialFacebookCircular className='brandsBanner'/>
                </a>
                <a href='https://www.instagram.com/nayabnathani/?hl=en' target={'blank'} rel="noopener noreferrer">
                    <TiSocialInstagramCircular className='brandsBanner'/>
                </a>
                <a href='https://www.linkedin.com/in/ali-nayab-nathani-a85b88243/' target={'blank'} rel="noopener noreferrer">
                    <TiSocialLinkedinCircular className='brandsBanner'/>
                </a>
                <a href='https://github.com/NayabNathani' target={'blank'} rel="noopener noreferrer" >
                    <DiGithub className='brandsBanner'/>
                </a>
            </HStack>

        </Stack>

    </Box>
  )
}

export default Footer