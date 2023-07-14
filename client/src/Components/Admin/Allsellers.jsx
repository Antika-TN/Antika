import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Allsellers() {
    const [sellersname, setSellersname] = useState([]);

  useEffect(() => {
    fetchSellersData();
  }, []);

  async function fetchSellersData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getSellers');
      const data = await response.json();


      setSellersname(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

    const handleDelete = (id) => {
      
      console.log('Delete item with id:', id);
    };
  return (
    <List>
      {sellersname.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.companyName} secondary={item.createdAt} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default Allsellers
