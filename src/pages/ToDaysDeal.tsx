import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import image from "../assest/toDays/81-oz4nTIFL 1.png";
import image1 from "../assest/toDays/camera.png";
import image2 from "../assest/toDays/camera1.png";
import image3 from "../assest/toDays/camera2.png";
import image4 from "../assest/toDays/camera3.png";
import image9 from "../assest/toDays/laptop.png";
import image10 from "../assest/toDays/laptop1.png";
import image11 from "../assest/toDays/laptop2.png";
import image12 from "../assest/toDays/laptop3.png";
import image5 from "../assest/toDays/tv.png";
import image6 from "../assest/toDays/tv1.png";
import image7 from "../assest/toDays/tv2.png";
import image8 from "../assest/toDays/tv3.png";

const ToDaysDeal = () => {
  const [selected, setSelected] = useState("");
  return (
    <Box>
      <Box sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <Typography variant="h4">ToDays Deal</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          sx={{
            maxWidth: "16.25rem",
            borderRadius: "12.593px",
            margin: "0.75rem",
            p: 1,
            background:
              "linear-gradient(179deg, #FFF4BB 2.55%, rgba(255, 242, 174, 0) 96.05%)",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                component={"div"}
                sx={{ textAlign: "center" }}
              >
                Continue shooping ...
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "200px", maxHeight: "8.33rem", aspectRatio: "1/1" }}
              component={"img"}
              src={image}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    paddingRight: "1rem",
                  }}
                >
                  259 $
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  399 $
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: "16.25rem",
            margin: "0.75rem",
            display: "flex",
            justifyContent: "center",
            borderRadius: "12.593px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{
                width: "250px",
                maxHeight: "10rem",
                aspectRatio: "1/1",
                padding: "1rem",
              }}
              component={"img"}
              src={image1}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with
                18-135 mm Zoom Lens
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    paddingRight: "1rem",
                  }}
                >
                  259 $
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  399 $
                </Typography>
              </Box>
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            </Box>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: "16.25rem",
            margin: "0.75rem",
            display: "flex",
            justifyContent: "center",
            borderRadius: "12.593px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{
                width: "250px",
                maxHeight: "10rem",
                aspectRatio: "1/1",
                padding: "1rem",
              }}
              component={"img"}
              src={image5}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with
                18-135 mm Zoom Lens
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    paddingRight: "1rem",
                  }}
                >
                  259 $
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  399 $
                </Typography>
              </Box>
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            </Box>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: "16.25rem",
            margin: "0.75rem",
            display: "flex",
            justifyContent: "center",
            borderRadius: "12.593px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{
                width: "250px",
                maxHeight: "10rem",
                aspectRatio: "1/1",
                padding: "1rem",
              }}
              component={"img"}
              src={image9}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with
                18-135 mm Zoom Lens
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    paddingRight: "1rem",
                  }}
                >
                  259 $
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  399 $
                </Typography>
              </Box>
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                src={image12}
                alt=""
              />
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default ToDaysDeal;
