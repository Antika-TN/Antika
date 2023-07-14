import * as React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';




<Box
component="span"
sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
</Box>

function Cards() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
      <Card sx={{ minWidth: 275 , backgroundColor: '#b9a29b1f' }}>
        <CardContent>
          <Typography sx={{ mb: 1.2 }} color="text.secondary">
            client
          </Typography>
          <Typography variant="body2">
            225
          </Typography>
        </CardContent>
        <CardActions>
        <Link to="/clients">
              <Button>See All</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>



    <Grid item xs={12} sm={4}>
      <Card sx={{ minWidth: 275 ,backgroundColor: '#b9a29b1f' }}>
      <CardContent>
          <Typography sx={{ mb: 1.2 }} color="text.secondary">
           seller
          </Typography>
          <Typography variant="body2">
            225
          </Typography>
        </CardContent>
        <CardActions>
        <Link to="/sellers">
              <Button>See All</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>



    <Grid item xs={12} sm={4}>
      <Card sx={{ minWidth: 275 , backgroundColor: '#b9a29b1f' }}>
      <CardContent>
          <Typography sx={{ mb: 1.2 }} color="text.secondary">
           product
          </Typography>
          <Typography variant="body2">
            225
          </Typography>
        </CardContent>
        <CardActions>
        <Link to="/products">
              <Button>See All</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);
}
  
export default Cards
