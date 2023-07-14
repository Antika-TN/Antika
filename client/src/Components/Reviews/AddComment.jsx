import React from 'react'
import {Box, TextareaAutosize,Button,CardActions} from '@mui/material';

function AddComment() {
  return (
   <Box   >
    <TextareaAutosize height="500px" />
    <CardActions>
        <Button size='large' >
            Send comment
        </Button>
      </CardActions>
   </Box>
  )
}

export default AddComment
/*hidden='none'*/