import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export default function Managers({onManagerSelect, onManagerDelete}) {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/managers/managers');
      setManagers(response.data);
    } catch (error) {
      console.error('Error fetching managers:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/managers/customer?id=${id}`);
      setManagers(managers.filter(customer => customer._id !== id));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <TableContainer component={Paper}  className='mt-6 !rounded-2xl'> 
          <Table >
            <TableHead>
              <TableRow >
                <TableCell className='!font-bold !text-[14px] !uppercase '>User ID</TableCell>
                <TableCell className='!font-bold !text-[14px] !uppercase '>User Name</TableCell>
                <TableCell className='!font-bold !text-[14px] !uppercase '>User Email</TableCell>
                <TableCell className='!font-bold !text-[14px] !uppercase '>Status</TableCell>
                <TableCell className='!font-bold !text-[14px] !uppercase '>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                managers.length > 0 ? managers.map(row =>(
                  <TableRow  key={row.user_id}>
                    <TableCell  className=''>{row.user_id}</TableCell>
                    <TableCell className=''>{row.firstName} {row.lastName}</TableCell>
                    <TableCell  className=''>{row.email}</TableCell>
                    <TableCell  className=''>{row.userStatus}</TableCell>
                    <TableCell>
                      <div className='flex gap-6 justify-center'>
                        <Button className='!bg-custom-gradient !px-4 !text-white hover:!bg-[#6610f2]' onClick={() => onManagerSelect({id:row.user_id , email: row.email})}  startIcon={<Edit/>}>Edit</Button>
                        <Button className='!bg-[#ff4c51] !text-white hover:!bg-[#ff0000] ' onClick={() => onManagerDelete({id:row.user_id , email: row.email})} startIcon={<Delete/>}>Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={6}>No Data Found</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
  );
}
