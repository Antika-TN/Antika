import React, { useState } from "react";
import { Box, TextareaAutosize, Button, CardActions } from "@mui/material";

function AddComment({ addComment }) {
  const [comment, setComment] = useState();
  return (
    <Box>
      <TextareaAutosize
        style={{ height: "200px", width: "500px" }}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <CardActions>
        <Button size="large" onClick={() => addComment(comment)}>
          Send comment
        </Button>
      </CardActions>
    </Box>
  );
}

export default AddComment;
/*hidden='none'*/
