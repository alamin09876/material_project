import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../assest/categories/img.png";
import image1 from "../assest/categories/img1.png";
import image2 from "../assest/categories/img2.png";
import image3 from "../assest/categories/img3.png";
import image4 from "../assest/categories/img4.png";
import image5 from "../assest/categories/img5.png";
import image6 from "../assest/categories/img6.png";

const categories = [
  { name: "Laptops", img: image },
  { name: "Camera", img: image1 },
  { name: "Accessories", img: image2 },
  { name: "TV", img: image3 },
  { name: "Headphones", img: image4 },
  { name: "Storage", img: image5 },
  { name: "Theater", img: image6 },
];

const CategoryPage = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h4">Category</Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        {categories.map((category, idx) => (
          <Box key={idx} sx={{ display: "flex" }}>
            <Box>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  border: "1px solid black",
                  borderRadius: 1,
                  marginRight: "-13px",
                  marginTop: "10px",
                }}
              >
                {category.name}
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{ width: 50, marginRight: "2rem" }}
              src={category.img}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;
