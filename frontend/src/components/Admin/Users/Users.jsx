import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';



const Users = () => {

  const users = [

    {
      _id:"abcde121",
      name:"Ali Nayab",
      role:'Admin',
      subscription:{
        status:"active"
      },
      email:'nayabnathani6@gmail.com'
  
    },
    {
    _id:"abcde123",
    name:"Ali",
    role:'Tender',
    subscription:{
      status:"active"
    },
    email:'Ali@gmail.com'

  },
  {
    _id:"abcde124",
    name:"John Snow",
    role:'Tender',
    subscription:{
      status:"active"
    },
    email:'johnsnow@gmail.com'

  },
  {
    _id:"abcde125",
    name:"Jackson",
    role:'Tender',
    subscription:{
      status:"active"
    },
    email:'jackson@gmail.com'

  },
  {
    _id:"abcde126",
    name:"Alan Walker",
    role:'Tender',
    subscription:{
      status:"active"
    },
    email:'AlanWalker@gmail.com'

  },
];

  const updateHandler= (userId)=>{
    console.log(userId)
  };

  const deleteButtonHandler= (userId)=>{
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
      children='All Users' 
      />
        <TableContainer w={['100vh','full']}>
        <Table variant={'simple'} size='lg'>
        <TableCaption>All Available Users in DataBase</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Roll</Th>
            <Th>Subscription</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.map(item=>(
              <Row 
              updateHandler={updateHandler} 
              deleteButtonHandler={deleteButtonHandler}
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

export default Users;

function Row({item, updateHandler, deleteButtonHandler}){

  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status==='active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        {
          item.role === 'Admin'?"":(<><HStack justifyContent={'flex-end'}>
          <Button 
            variant={'outline'} 
            color='purple.500' 
            onClick={()=>updateHandler(item._id)}>
            Change Role
            </Button>
          <Button color={'purple.600'} onClick={()=>deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack></>)
        }

      </Td>
    </Tr>
  )
}