import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Comments from "./Coments";
import AddComment from "./AddComment";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  padding:'2px',
  height:"10px",
  width:'300px',
  paddingRight:"10px",
  borderRadius:'80px'
});

export default function ProductDetails() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/reviews/1")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);
  const addComment = (comment) => {
    axios
      .post("http://localhost:3000/reviews/1/1", {
        comment: comment,
        rating: value,
      })
      .then(() => alert("done"))
      .catch((err) => console.log(err));
  };
  const openClick = () => {
    setShow(true);
  };
  const closeClick = () => {
    setShow(false);
  };
  return (
    <Box>
      <Box
        sx={{
          "& > legend": { mt: 2 },
          background:"var(--white-10, rgba(255, 255, 255, 0.10))",
          margin:'10px',
          borderRadius:'8px',
          width:'300px',

        }}
      >
        <Typography component="legend" style={{
          fontSize:'26px',
        }}>Rate this product</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `Heart${value !== 1 ? "s" : ""}`}
          onChange={(e) => setValue(e.target.value)}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          style={
            {
             
              fontSize:'35px',
            }
          }
        />
        {value}
      </Box>
      <Box
          sx={{ position:'absolute',
            top: '1',
            left: '0',
          marginBottom:'10px'}}
      >
        <Button variant="outlined" onClick={openClick} style={{margin:"10px"}}>
          Add new Comment
        </Button>
      </Box>
      <Box sx={{marginTop:'90px'}}>
        {data.map((e) => (
          <Comments key={e.id} el={e} />
        ))}
      </Box >
      <Dialog open={show} onClose={closeClick} style={{background: "var(--white-10, rgba(255, 255, 255, 0.10))",}}>
        <DialogTitle style={{background: 'transparent'}} >Add your comment</DialogTitle>
        <DialogContent style={{background: 'transparent'}}>
          <DialogContentText style={{background: 'transparent'}}>
            Here you can add your comment about this product
          </DialogContentText>
          <Box style={{background: 'transparent'}}>
            <AddComment addComment={addComment} />
          </Box>
        </DialogContent>
        <DialogActions style={{background: 'transparent'}}>
          <Button onClick={closeClick}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
