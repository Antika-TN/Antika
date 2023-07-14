import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Allproduct() {
  const [productsname, setProductsname] = useState([])

  useEffect(() => {
    fetchProductsData()
  }, []);

  async function fetchProductsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getproducts')
      const data = await response.json()


      setProductsname(data.data)
    } catch (error) {
      console.error('Error', error)
    }
  }

  async function deleteProduct(id) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteProduct/${id}`,{
        method:'DELETE',
      });

      if (response.ok) {
        console.log('product deleted successfully')
      } else {
        console.error('Failed to delete product')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


    const handleDelete = async (id) => {
      try{
        await deleteProduct(id)
        fetchProductsData()
      }catch(error){
console.error('Error deleting product:',error)
      }
      
    };
    
  return (
    <List>
    {productsname.map((product) => (
      <ListItem key={product.id}>
        <ListItemText primary={product.name} secondary={product.createdAt} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  )
}

export default Allproduct
