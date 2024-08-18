import { Box, Button, Typography } from "@mui/material";
import React from "react";
import image from "../assest/sectionTwo/bg.png";
import image2 from "../assest/sectionTwo/pexels-daniel-reche-3721941 1.png";
import image4 from "../assest/sectionTwo/pexels-sound-on-3755921-removebg-preview 1.png";
import image3 from "../assest/sectionTwo/Rectangle 9.png";

const SectionTwo = () => {
  return (
    <Box sx={{ display: "flex", gap: "1.5rem", paddingTop: "3.5rem" }}>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <Box sx={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Typography variant="h5" sx={{ color: "white", my: "1rem" }}>
            boAt Bassheads 900
          </Typography>
          <Typography sx={{ color: "white", my: "1rem" }}>
            Wired On Ear Headphones
          </Typography>
          <Typography sx={{ color: "white", marginBottom: "0.5rem" }}>
            {" "}
            at Just 39 $
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgba(3, 198, 139, 1)",
              color: "white",
              border: "none",
              marginBottom: "2rem",
            }}
          >
            SHOP NOW
          </Button>
        </Box>
        <Box>
          <Box component={"img"} src={image2} sx={{ width: "17rem" }} />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${image3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <Box sx={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Typography variant="h5" sx={{ color: "white", my: "1rem" }}>
            AirPods Pro
          </Typography>
          <Typography sx={{ color: "white", my: "1rem" }}>
            Wired On Ear Headphones
          </Typography>
          <Typography sx={{ color: "white", marginBottom: "0.5rem" }}>
            {" "}
            at Just 39 $
          </Typography>
        </Box>
        <Box>
          <Box
            component={"img"}
            src={image4}
            sx={{ width: "17rem", marginTop: "-4rem", marginLeft: "0.5rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTwo;
