import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import image10 from "../assest/shopBrands/apple-logo.png";
import image1 from "../assest/shopBrands/Bose_logo.png";
import image11 from "../assest/shopBrands/Branding_lenovo-logo_lenovologoposred_low_res.png";
import image5 from "../assest/shopBrands/Corsair-logo.png";
import image8 from "../assest/shopBrands/Dell_Logo.png";
import image9 from "../assest/shopBrands/hp-logo.png";
import image from "../assest/shopBrands/JBL-logo.png";
import image4 from "../assest/shopBrands/kingston.png";
import image3 from "../assest/shopBrands/rectringle.png";
import image7 from "../assest/shopBrands/sandick.png";
import image2 from "../assest/shopBrands/senh.png";
import image6 from "../assest/shopBrands/zebronicx-logo-black.png";
const ShopBrands = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <Typography variant="h4"> Shop by Brands </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: "2rem" }}>
          <Card sx={{ width: "16rem", height: "17.5rem" }}>
            <CardActionArea>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image1}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image2}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image3}
                  alt=""
                />
              </Box>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ marginRight: "2rem" }}>
          <Card sx={{ width: "16rem", height: "17.5rem" }}>
            <CardActionArea>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image4}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image5}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image6}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image7}
                  alt=""
                />
              </Box>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ marginRight: "2rem" }}>
          <Card sx={{ width: "16rem", height: "17.5rem" }}>
            <CardActionArea>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image8}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image9}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image10}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image11}
                  alt=""
                />
              </Box>
            </CardActionArea>
          </Card>
        </Box>
        <Box>
          <Card sx={{ width: "16rem", height: "17.5rem" }}>
            <CardActionArea>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image4}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image5}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5.125rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image6}
                  alt=""
                />
                <CardMedia
                  sx={{
                    width: "4rem",
                    aspectRatio: "1/1",
                    padding: "0.5rem",
                    border: "1px solid black",
                    margin: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                  component={"img"}
                  src={image7}
                  alt=""
                />
              </Box>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopBrands;
