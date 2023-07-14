import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, CardActions, Button } from "@mui/material";
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
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function ProductDetails() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);
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
  return (
    <Box>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `Heart${value !== 1 ? "s" : ""}`}
          onChange={(e) => setValue(e.target.value)}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        {value}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flix-start",
          marginTop: "-64px",
        }}
      >
        <CardActions>
          <Button size="large">Add new Comment</Button>
        </CardActions>
      </Box>
      <Box>
        {data.map((e) => (
          <Comments key={e.id} el={e} />
        ))}
      </Box>
      <Box>
        <AddComment addComment={addComment} />
      </Box>
    </Box>
  );
}
