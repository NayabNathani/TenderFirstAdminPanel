import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import API_URL from '../../../config';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(API_URL + '/user', { withCredentials: true })
      .then(response => {
        setUsers(response.data.result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteButtonHandler = async userId => {
    try {
      console.log(userId);
      const response = await axios.post(
        API_URL + '/user/delete',
        { userId },
        { withCredentials: true }
      );
      if (response.data.success) {
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastUser = currentPage * 10;
  const indexOfFirstUser = indexOfLastUser - 10;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const renderUsers = currentUsers.map(item => (
    <Row deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / 10); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => (
    <Button
      key={number}
      size="sm"
      colorScheme={currentPage === number ? 'yellow' : 'gray'}
      onClick={() => setCurrentPage(number)}
      mx={1}
    >
      {number}
    </Button>
  ));

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
          children="All Users"
        />
        <TableContainer w={['100vh', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All Available Users in DataBase</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Full Name</Th>
                <Th>Wallet Address</Th>
                <Th>Pool</Th>
                <Th>Categories</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>{renderUsers}</Tbody>
          </Table>
        </TableContainer>
        <Box my={4} display="flex" justifyContent="center">
          {renderPageNumbers}
        </Box>
      </Box>
    </Grid>
  );
};

function Row({ item, deleteButtonHandler }) {
  return (
    <Tr>
      {item.isAdmin === true ? (
        <>
          <Td>#{item._id}</Td>
          <Td>
            {item.firstName} {item.lastName}
          </Td>
          <Td>{item.walletAddress}</Td>
          <Td>None</Td>
          <Td>None</Td>
        </>
      ) : (
        <>
          <Td>#{item._id}</Td>
          <Td>
            {item.firstName} {item.lastName}
          </Td>
          <Td>{item.walletAddress}</Td>
          <Td>{item.pool.title}</Td>

          <Td>
            {item.categories.map(category => (
              <span key={category._id}>{category.title}, </span>
            ))}
          </Td>
          <Td isNumeric>
            <HStack justifyContent={'flex-end'}>
              <Button
                color={'purple.600'}
                onClick={() => deleteButtonHandler(item._id)}
              >
                <RiDeleteBin7Fill />
              </Button>
            </HStack>
          </Td>
        </>
      )}
    </Tr>
  );
}

export default Users;
