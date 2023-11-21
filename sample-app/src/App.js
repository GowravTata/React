import './App.css';

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
const App = () => {
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [newKey, setNewKey] = useState('');
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleAddKey = () => {
    // Add logic to add a new key
    const updatedData = [...data, { id: data.length + 1, name: newKey }];
    setData(updatedData);
    // Call the API with the updated payload
    fetch('https://api.example.com/addKey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newKey }),
    })
      .then(response => response.json())
      .then(responseData => console.log('API response:', responseData))
      .catch(error => console.error('Error calling API:', error));
    // Reset newKey state
    setNewKey('');
  };
  const handleEditKey = (id) => {
    // Add logic to edit the existing key with the given id
    const updatedData = data.map(item => (item.id === id ? { ...item, name: editedData[id] } : item));
    setData(updatedData);
    // Call the API with the updated payload
    fetch('https://api.example.com/editKey', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, updatedName: editedData[id] }),
    })
      .then(response => response.json())
      .then(responseData => console.log('API response:', responseData))
      .catch(error => console.error('Error calling API:', error));
    // Reset editedData state
    setEditedData(prevState => ({ ...prevState, [id]: '' }));
  };
  const handleInputChange = (id, value) => {
    // Update the editedData state when the input changes
    setEditedData(prevState => ({ ...prevState, [id]: value }));
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <TextField
                  value={editedData[row.id] !== undefined ? editedData[row.id] : row.name}
                  onChange={(e) => handleInputChange(row.id, e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleAddKey()}>
                  Add Key
                </Button>
                <Button variant="outlined" onClick={() => handleEditKey(row.id)}>
                  Edit Key
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default App;


