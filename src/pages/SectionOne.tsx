import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../assest/seactionone/71a1cphYqYL 1.png";
import image1 from "../assest/seactionone/image.png";

const SectionOne = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "rgba(57, 59, 58, 1)", width: 135 }}>
        <Box sx={{ marginTop: "30px" }}>
          <Box component="img" src={image} />
        </Box>
        <Box
          sx={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(217, 217, 217, 0)",
            borderRadius: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", textColor: "white" }}>
            JBL Tour One
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "rgba(57, 59, 58, 1)", width: 135 }}>
        <Box sx={{ marginTop: "30px" }}>
          <Box component="img" src={image1} />
        </Box>
        <Box
          sx={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(217, 217, 217, 0)",
            borderRadius: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", textColor: "white" }}>
            JBL Tour One
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionOne;
