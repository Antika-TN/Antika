import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Allclient() {
  const [clientsname, setClientssname] = useState([])

  useEffect(() => {
    fetchClientsData()
  }, []);

  async function fetchClientsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getclients');
      const data = await response.json();


      setClientssname(data.data);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async function deleteClient(id) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteClient/${id}`,{
        method:'DELETE',
      });

      if (response.ok) {
        console.log('seller deleted successfully')
      } else {
        console.error('Failed to delete seller')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


    const handleDelete = async (id) => {
      try{
        await deleteClient(id)
        fetchClientsData()
      }catch(error){
console.error('Error deleting seller:',error);
      }
    }
  return (
    <List>
      {clientsname.map((client) => (
        <ListItem key={client.id}>
          <ListItemText primary={client.firstName} secondary={client.lastName} />
          
          <ListItemText primary={client.createdAt} secondary={client.phoneNumber} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(client.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default Allclient
