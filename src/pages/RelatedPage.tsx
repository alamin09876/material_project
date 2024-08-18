import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import image1 from "../assest/related/headphone image.png";
import image3 from "../assest/related/image.png";
import image from "../assest/related/laptop.png";
import image2 from "../assest/related/pendrive.png";

const related = [
  {
    description: "Zebronics ZEB-JUKE BAR DOLBY ATMOS",
    img: image,
    price: 325,
  },
  {
    description: "Zebronics ZEB-JUKE BAR DOLBY ATMOS ",
    img: image1,
    price: 320,
  },
  {
    description: "Zebronics ZEB-JUKE BAR DOLBY ATMOS",
    img: image2,
    price: 35,
  },
  {
    description: "Zebronics ZEB-JUKE BAR DOLBY ATMOS",
    img: image3,
    price: 25,
  },
];

const RelatedPage = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <Typography variant="h4">Your Related Items</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {related.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "17rem",
              borderRadius: "12.593px",
              marginRight: "2rem",
              p: 1,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  width: "12.5rem",
                  maxHeight: "8.33rem",
                  aspectRatio: "1/1",
                }}
                component={"img"}
                src={item.img}
                alt={item.description}
              />
              <CardContent>
                <Box sx={{ display: "flex", margin: "0", paddingTop: "2rem" }}>
                  <Typography
                    variant="caption"
                    sx={{ margin: "0", padding: "0" }}
                  >
                    {item.description.split(" ").slice(0, 3).join(" ")}
                    <br /> {item.description.split(" ").slice(3, 6).join(" ")}
                  </Typography>
                  <Box sx={{ paddingLeft: "1rem" }}>
                    <Typography variant="h6">{item.price} $</Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedPage;
