import React from 'react'
import { Box, Input,Card,CardContent,Typography } from '@mui/material'

function Comments({el}) {
  if (!el || !el.id) {
    return null;
  }
    return (
    
    <Box width='100%' >
    <Card>
    <CardContent>
    <Typography gutterBottom variant= 'h5' component='div'>
 {el.ClientId}
    </Typography>
    <Typography variant='body2' color='text.secondary'>
     {el.comment}  
    </Typography>
    </CardContent>
    </Card>
    <Input/>
    </Box>
  )
}

export default Comments
