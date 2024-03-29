import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
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
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import API_URL from '../../../config';

const TPermissions = () => {
  const [tenders, setTenders] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTenders = async () => {
    try {
      const response = await axios.get(
        API_URL + `/tender?status=pending&limit=10&page=${page}`,
        { withCredentials: true }
      );
      const { data, totalPages: total } = response.data.result;
      setTenders(data);
      setTotalPages(total);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTenders();
  }, [page]);

  const acceptHandler = async tenderId => {
    try {
      await axios.post(
        API_URL + '/tender/approve',
        { tenderId, approval: 'approved' },
        { withCredentials: true }
      );
      toast({
        title: 'Tender Approved.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      fetchTenders(); 
    } catch (error) {
      console.log(error);
    }
  };

  const rejectHandler = async tenderId => {
    try {
      await axios.post(
        API_URL + '/tender/approve',
        { tenderId, approval: 'rejected' },
        { withCredentials: true }
      );
      toast({
        title: 'Tender Rejected.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      fetchTenders(); 
    } catch (error) {
      console.log(error);
    }
  };

  const prevPageHandler = () => {
    setPage(prevState => (prevState > 1 ? prevState - 1 : 1));
  };

  const nextPageHandler = () => {
    setPage(prevState => (prevState < totalPages ? prevState + 1 : totalPages));
  };

  return (
    <Box p={['0', '16']} overflowX="auto">
      <Heading
        textTransform={'uppercase'}
        my="16"
        textAlign={['center', 'left']}
        children="Tender Requests"
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : tenders.length === 0 ? (
        <div>No Tenders Left</div>
      ) : (
        <>
          <TableContainer w={['100vh', 'full']}>
            <Table variant={'simple'} size="lg">
              <TableCaption>All Requests To Open A Tender</TableCaption>
              <Thead>
                <Tr>
                  <Th>Tender Id</Th>
                  <Th>Title</Th>
                  <Th>Tenderee Wallet Address</Th>
                  <Th>Category</Th>
                  <Th isNumeric></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tenders.map(tender => (
                  <Tr key={tender._id}>
                    <Td>{tender._id}</Td>
                    <Td>{tender.title}</Td>
                    <Td>{tender.tenderee.walletAddress}</Td>
                    <Td>
                      <ul>
                        {tender.category.map(category => (
                          <li key={category._id}>{category.title}</li>
                        ))}
                      </ul>
                    </Td>
                    <Td isNumeric>
                      <HStack spacing="4">
                        <Button
                          variant={'outline'}
                          color="black.500"
                          onClick={() => acceptHandler(tender._id)}
                          disabled={tender.status === 'accepted'}
                        >
                          <AiOutlineCheck color="green" />
                          Accept
                        </Button>
                        <Button
                          color={'purple.600'}
                          onClick={() => rejectHandler(tender._id)}
                          disabled={tender.status === 'accepted'}
                        >
                          <AiOutlineClose color="red" />
                          Reject
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Box mt="4" textAlign="center">
            <Button onClick={prevPageHandler} disabled={page === 1} mr="2">
              Previous
            </Button>
            <Button onClick={nextPageHandler} disabled={page === totalPages}>
              Next
            </Button>
          </Box>
          <HStack marginBottom={'2rem'}></HStack>
        </>
      )}
    </Box>
  );
};
export default TPermissions;
