import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import introVideo from '../../assests/videos/intro.mp4'
import termsAndCondition from '../../assests/docs/termsAndCondition'


const Founder = ()=>(

    <Stack
    direction={['column','row']}
    spacing={['4','16']}
    padding={'8'}
    >
        <VStack>
            <Avatar src='https://media.licdn.com/dms/image/C4D03AQG5p8diIVNlzA/profile-displayphoto-shrink_800_800/0/1660859137409?e=1682553600&v=beta&t=6VQ4RYqVKnUTwbo89XP79es1DEjS4dLSdrZPVaXPSUo' boxSize={['40','48']}/>
            <Text children='Co-Founder' opacity={0.7} />
        </VStack>

        <VStack
        justifyContent={"center"}
        alignItems={['center','flex-start']}
        >   
            <Heading children='Ali Nayab Nathani' size={['md','xl']}/>
            <Text textAlign={['center','left']}
            children={`Hi, I am a full-stack developer and a teacher. My Mission is to provide quality content at reasonable price`}/>
        </VStack>
    </Stack>


)

const TandC = ({termsAndCondition})=>(
    <Box>
        <Heading 
            children='Terms & Conditions' 
            size={'md'} 
            my='4' 
            textAlign={['center','left']}/>

            <Box h={'sm'} p='4' overflowY={'scroll'}>
                <Text 
                    textAlign={['center','left']}
                    letterSpacing={'widest'}
                    fontFamily='heading'
                >
                    {termsAndCondition}
                </Text>
                <Heading my='4' size={'sm'} children='Refund only applicable for cancellation within 7 days.' />
            </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            src="https://media.licdn.com/dms/image/C4D03AQG5p8diIVNlzA/profile-displayphoto-shrink_800_800/0/1660859137409?e=1682553600&v=beta&t=6VQ4RYqVKnUTwbo89XP79es1DEjS4dLSdrZPVaXPSUo"
            boxSize={['40', '48']}
          />
          <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Ali Nayab Nathani" size={['md', 'xl']} />
          <Text
            textAlign={['center', 'left']}
            children={`Hi, I am a full-stack developer and a teacher. My Mission is to provide quality content at reasonable price`}
          />
        </VStack>
      </Stack>

      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            src="https://media.licdn.com/dms/image/C4E03AQH2J6GOIu9WrQ/profile-displayphoto-shrink_800_800/0/1650671646562?e=1683158400&v=beta&t=3qPCnIyHONt53nsMMdklY_8H0vaOJfVgstOP9FXUiGM"
            boxSize={['40', '48']}
          />
          <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Tuaha Ajaz" size={['md', 'xl']} />
          <Text
            textAlign={['center', 'left']}
            children={`Hi, I am a full-stack developer and a teacher. My Mission is to provide quality content at reasonable price`}
          />
        </VStack>
      </Stack>

      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            src="http://localhost:3002/assets/img/team/team-3.jpg"
            boxSize={['40', '48']}
          />
          <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Abu Bakr" size={['md', 'xl']} />
          <Text
            textAlign={['center', 'left']}
            children={`Hi, I am a full-stack developer and a teacher. My Mission is to provide quality content at reasonable price`}
          />
        </VStack>
      </Stack>

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my={'4'} padding="4">
        <RiSecurePaymentFill />
        <Heading
          children="Secured Payment Guaranteed"
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
}

export default About