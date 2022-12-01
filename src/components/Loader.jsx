import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      color: "#fff",
      marginTop: "15em",
    }}
  >
    <CircularProgress color="error" size={50} />
  </Box>
);

export default Loader;
