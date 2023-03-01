import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import { RiLogoutBoxRLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const LinkButton = ({url="/", title='Home',onClose})=>(
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const isAuthenticated = true;

const logoutHandler = ()=>{
    console.log('Logged Out')
    onClose();

}

  return (
    <>
        <ColorModeSwitcher/>

        <Button 
        onClick={onOpen}
        colorScheme={'yellow'} 
        width='12' height={'12'} 
        rounded='full' 
        position={'fixed'}
        zIndex={'overlay'} 
        top='6' 
        left='6'>
            <RiMenu5Fill/> 
        </Button>

        <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay backdropFilter={'blur(2px)'}/>
            <DrawerContent>
                <DrawerHeader borderBottomWidth={'1px'} >Tender First</DrawerHeader>
                <DrawerBody>
                    <VStack
                    spacing={'6'}
                    alignItems="flex-start"

                    >
                        <LinkButton onClose={onClose} url="/" title="Home"/>
                        <LinkButton onClose={onClose} url="/admin/permissions" title="Block-Chain Permissons"/>
                        <LinkButton onClose={onClose} url="/admin/tpermissions" title="Tender Permissons"/>
                        {
                            isAuthenticated?(
                            <>
                                <HStack
                                    justifyContent={'space-evenly'}
                                    position='absolute'
                                    bottom={'2rem'}
                                    width='80%'
                                    >
                                    <Button variant={'ghost'} onClick={logoutHandler}> <RiLogoutBoxRLine/> Logout</Button>
                                </HStack>
                                <LinkButton onClose={onClose} url="/admin/users" title="All Users"/>
                            </>
                            ):(
                                <>
                                    <HStack
                                    justifyContent={'space-evenly'}
                                    position='absolute'
                                    bottom={'2rem'}
                                    width='80%'
                                    >
                                    <Link to="/Login" onClick={onClose}><Button colorScheme={'yellow'}>Login</Button></Link>
                                    <p>OR</p>
                                    <Link to="/register" onClick={onClose}><Button colorScheme={'yellow'}>Sign Up</Button></Link>

                                    </HStack>

                                </>
                                )
                        }
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header


