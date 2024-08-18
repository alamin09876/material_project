import { Home, PersonOutline, ShoppingCart } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="left"
      sx={{ padding: "0 20px", marginTop: "30px" }}
    >
      <Box display="flex" alignItems="center">
        <Typography>Elecxo</Typography>
        <Home sx={{ marginLeft: "8px" }} />
      </Box>
      <TextField
        label="Long Input Field"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ marginLeft: "20px", paddingRight: "50px" }}
      />
      <Box display="flex" alignItems="center">
        <PersonOutline></PersonOutline>
        <ShoppingCart></ShoppingCart>
      </Box>
    </Box>
  );
};

export default Header;
