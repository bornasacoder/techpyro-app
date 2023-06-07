import {
  BookmarkOutlined,
  DirectionsOutlined,
  Error,
  ReplyOutlined,
  Star,
} from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchBar from "../../layouts/navbar/searchbar/SearchBar";
// import SearchBar from "components/navbar/searchbar/SearchBar";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const StyleToolbar = styled("div")(({ theme }) => ({}));

const Bottom = styled(Box)(({ theme }) => ({
  padding: "15px 58px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px 20px",
  },
}));
const Block1 = ({ productDetail }) => {
  useEffect(() => {
    //  console.log(productDetail);
  }, []);
  const nevigate = useNavigate();
  const handleClick = () => {
    nevigate("/");
  };
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          color: "#5B5B5B",
          flexWrap: "wrap",
          padding: { md: "20px 58px", sm: "20px 20px ", xs: "20px 20px" },
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
            },
          }}
          onClick={handleClick}
        >
          Home
        </Typography>
        <Typography>/</Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
            },
          }}
        >
          India
        </Typography>
        <Typography>/</Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
            },
          }}
          >
          Dharadun
        </Typography>
        <Typography>/</Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
            },
          }}
          >
          {productDetail.length !== 0 && productDetail[0].shopname}
        </Typography>
        <Typography>/</Typography>
        <Typography sx={{ color: "#CCCCCC" }}>
          {productDetail.length !== 0 && productDetail[0].tagline}
        </Typography>
        </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          padding: { md: "20px 58px", sm: "20px 20px ", xs: "5px 20px" },
        }}
      >
        <Box
          sx={{
            width: { md: "55vw", sm: "50vw", xs: "100vw" },
            height: { md: "65vh", sm: "60vh", xs: "40vh" },
          }}
        >
          <Typography
            sx={{
              background: `url(${
                productDetail.length !== 0 && productDetail[0].image
              }) center/cover no-repeat`,
              width: "100%",
              height: "100%",
              objectPosition: "center",
              transition: "transform ease 0.8s",
              "&:hover": {
                animation: "ease-out",
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography
            sx={{
              background: `url(${
                productDetail.length !== 0 && productDetail[0].image1
              }) center/cover no-repeat`,
              width: "20vw",
              height: "31.5vh",
              backgroundColor: "#B0B0B0",
              display: { md: "block", sm: "block", xs: "none" },
            }}
          />
          <Typography
            sx={{
              background: `url(${
                productDetail.length !== 0 && productDetail[0].image2
              }) center/cover no-repeat`,
              width: "20vw",
              height: "31.5vh",
              backgroundColor: "#B0B0B0",
              display: { md: "block", sm: "block", xs: "none" },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "relative",
            background: `url(${
              productDetail.length !== 0 && productDetail[0].image3
            }) center/cover no-repeat`,
            width: "20vw",
            height: "65vh",
            backgroundColor: "#B0B0B0",
            filter: "brightness(60%)",
            display: { md: "block", sm: "block", xs: "none" },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              position: "absolute",
              top: "30%",
              right: "30%",
              filter: "brightness(100%)",
              fontSize: "18px",
            }}
          >
            {" "}
            View Gallery
          </Typography>
        </Box>
      </Box>
      <Bottom
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { md: "row", sm: "row", xs: "column" },
        }}
      >
        <Typography
          sx={{ fontSize: { md: "2.3rem", sm: "2rem", xs: "1.5rem" } }}
        >
          {productDetail.length !== 0 && productDetail[0].tagline}
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", }}>
          <Box sx={{display:"flex",gap:"10px"}}>
          <Box
            sx={{
              background: "green",
              color: "#fff",
              fontSize: { md: "20px", sm: "18px", xs: "16px" },
              padding: { md: "5px 10px", sm: "8px 10px", xs: "0px 8px" },
              display: "flex",
              gap: "4px",
              alignItems: "center",
              borderRadius: "6px",
            }}
          >
            {" "}
            {productDetail.length !== 0 && productDetail[0].rating}
            <Star sx={{ fontSize: { md: "20px", sm: "18px", xs: "16px" } }} />
          </Box>
          <Box>
            <Typography fontWeight={600}>19</Typography>
            <Typography fontWeight={600}>Dining Reviews</Typography>
          </Box>
          </Box>
          <Box sx={{display:"flex",gap:"10px"}}>
          <Box
            sx={{
              background: "green",
              color: "#fff",
              fontSize: { md: "20px", sm: "18px", xs: "16px" },
              padding: { md: "5px 10px", sm: "8px 10px", xs: "0px 8px" },
              display: "flex",
              gap: "4px",
              alignItems: "center",
              borderRadius: "6px",
            }}
          >
            {" "}
            {productDetail.length !== 0 && productDetail[0].rating}
            <Star sx={{ fontSize: { md: "20px", sm: "18px", xs: "16px" } }} />
          </Box>
          <Box>
            <Typography fontWeight={600}>100</Typography>
            <Typography fontWeight={600}>Delivery Reviews</Typography>
          </Box>
          </Box>
        </Box>
        </Bottom>
        <Box sx={{padding:{md:"20px 58px",sm:"20px 20px ",xs:"20px 20px"}}}>
          <Typography sx={{ fontSize: "18px", color: "gray", marginY: "5px" }}>
            {productDetail.length !== 0 && productDetail[0].category}
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "gray", marginY: "5px" }}>
            Race Course, Dehradun
          </Typography>
          <Typography
            sx={{
              color: "red",
              marginY: "5px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Closed for dining{" "}
            <Typography color="black" component="span">
              {" "}
              - Opens at 9:30am
            </Typography>{" "}
            <Error
              sx={{ rotate: "180deg", fontSize: "16px", color: "gray" }}
            />{" "}
          </Typography>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Button
              sx={{
                background: "#FFFFFF",
                color: "#000",
                border: "1px solid #000",
                borderRadius: "5px",
                padding: "2px 6px",
                "&:hover": {
                  background: "#FAFAFA",
                  color: "#000",
                },
              }}
              startIcon={<DirectionsOutlined sx={{ color: "red" }} />}
            >
              Direction
            </Button>
            <Button
              sx={{
                background: "#FFFFFF",
                color: "#000",
                border: "1px solid #000",
                borderRadius: "5px",
                padding: "2px 6px",
                "&:hover": {
                  background: "#FAFAFA",
                  color: "#000",
                },
              }}
              startIcon={<BookmarkOutlined sx={{ color: "red" }} />}
            >
              Bookmark
            </Button>
            <Button
              sx={{
                background: "#FFFFFF",
                color: "#000",
                border: "1px solid #000",
                borderRadius: "5px",
                padding: "2px 6px",
                "&:hover": {
                  background: "#FAFAFA",
                  color: "#000",
                },
              }}
              startIcon={<ReplyOutlined sx={{ color: "red" }} />}
            >
              Share
            </Button>
          </Box>
        </Box>
     
    </StyleToolbar>
  );
};

export default Block1;
