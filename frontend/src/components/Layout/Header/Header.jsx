import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure,HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import { RiLogoutBoxRLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/actions/user'


const LinkButton = ({url="/", title='Home',onClose})=>(
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isAuthenticated} = useSelector(state=>state.user)
    const dispatch = useDispatch();

const logoutHandler = ()=>{
    dispatch(logout());
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
                                <LinkButton onClose={onClose} url="/admin/tpermissions" title="Tender Permissons"/>
                                <LinkButton onClose={onClose} url="/admin/approvedtenders" title="Approved Tenders"/>
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


