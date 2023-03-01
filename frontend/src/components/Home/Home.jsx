import React from 'react'
import {  Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import "./home.css"
// import { Link } from 'react-router-dom';
import vg from '../../assests/images/bg.png';


const Home = () => {
  return (
    <section className='home'>
        <div className='container'>
            <Stack 
            direction={["column","row"]}
            height="100%"
            justifyContent={["center","flex-end"]}
            alignItems="center"
            spacing={["16","56"]}
            >
                <VStack width={"full"} alignItems={['center','flex-end']} spacing='8'>
                    <Heading children="Tender First Admin Panel" size={'3xl'}/>
                    <Text fontSize={'2xl'} textAlign={['center','left']} children="Smart Contract based e-Tendering System." />
                    {/* <Link to='/courses'>
                    <Button size={'lg'} colorScheme={"yellow"}>Explore Now</Button></Link> */}
                </VStack>
                <Image className='vector-graphics' boxSize={'lg'} src={vg} objectFit="contain"/>
            </Stack>
        </div>
        {/* <div className="container2">
            <video
            autoPlay={false}
            controls
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            >

            </video>
        </div> */}
    </section>
  )
}

export default Home