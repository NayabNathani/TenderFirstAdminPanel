import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClose,AiOutlineCheck } from 'react-icons/ai';




const Permissions = () => {

  const users = [
    {
    _id:"abc",
    name:"Tuaha",
    role:'Tenderer',
    // subscription:{
    //   status:"active"
    // },
    email:'Tuaha@gmail.com'

  },
  {
    _id:"abd",
    name:"Abu Bakr",
    role:'Tenderee',
    // subscription:{
    //   status:"active"
    // },
    email:'abubakr@gmail.com'

  },
  {
    _id:"abe",
    name:"Shabaz",
    role:'Tenderer',
    // subscription:{
    //   status:"active"
    // },
    email:'Shabaz@gmail.com'

  },
  {
    _id:"abf",
    name:"Asad",
    role:'Tenderee',
    // subscription:{
    //   status:"active"
    // },
    email:'Asad@gmail.com'

  },
];

  const acceptHandler= (userId)=>{
    console.log(userId)
  };

  const rejectHandler= (userId)=>{
    console.log(userId)
  };

  return (
    <Grid 
    minH={'100vh'} 
    templateColumns={['1fr','5fr 1fr']} 
    >
    <Box p={['0','16']} overflowX="auto">
      <Heading 
      textTransform={'uppercase'}
      my='16'
      textAlign={['center','left']} 
      children='Block-Chain Requests' 
      />
        <TableContainer w={['100vh','full']}>
        <Table variant={'simple'} size='lg'>
        <TableCaption>Users who want to enter your block-chain</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            {/* <Th>Subscription</Th> */}
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.map(item=>(
              <Row 
              acceptHandler={acceptHandler}
              rejectHandler={rejectHandler}
              key={item._id} 
              item={item} />
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    {/* <Sidebar/> */}
</Grid>
  )
}

export default Permissions;

function Row({item, acceptHandler, rejectHandler}){

  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      {/* <Td>{item.subscription.status==='active' ? 'Active' : 'Not Active'}</Td> */}
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button 
            variant={'outline'} 
            color='black.500' 
            onClick={()=>acceptHandler(item._id)}>
                <AiOutlineCheck color='green'/>
            Allow
            </Button>
          <Button color={'purple.600'} onClick={()=>rejectHandler(item._id)}>
            <AiOutlineClose color='red'/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}