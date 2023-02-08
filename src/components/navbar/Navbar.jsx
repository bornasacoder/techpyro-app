import React, { useState } from "react";
import SearchBar from "components/navbar/searchbar/SearchBar";
import NavButton from "components/navbar/navButton/NavButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  styled,
  Drawer,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  ListItemText,
  Badge,
} from "@mui/material";

import { Menu, Search, SearchOutlined } from "@mui/icons-material";
import MenuButtons from "./menuButtons/MenuButtons";
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex: "200",
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginRight: "0px!important",
  },
}));
const NavLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
}));
const MoreButton = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  fontWeight:"400",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap:"5px",
}));
const NavBar = styled(Box)(({ theme }) => ({
  color: theme.colors.alpha.black[60],
  display: "flex",
  justifyContent: "space-between",
  zIndex: "20",
  alignItems: "center",
  padding: "15px 20px",
  backgroundColor: "#FFFFFF",
  position: "sticky",
  top: "0",
  borderBottom:"1px solid #e6e6e6"
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NavBar>
       <MenuButton onClick={handleOpen}>
          <Menu sx={{ fontSize: "30px" }} />
        </MenuButton>
        <Drawer open={open} onClose={handleClose} sx={{ position: "absolute" }}>
          <MenuButtons sx={{ marginTop: { sm: "20px", sx: "20px" } }} />
        </Drawer>
      <NavLeft>
        <Typography variant="h2" sx={{ color: "#0056D2",justifyContent:{sm:"center",xs:"center"} }}>
          TechPyro
        </Typography>
        <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
         <Button
            sx={{
              color: "#fff",
              backgroundColor: "#0056D2",
              border: "2px solid #000",
              padding: "3px 5px",
              borderRadius:"5px",
              "&:hover": {
                color: "#0056D2",
                backgroundColor: "#fff",
              },
            }}
            endIcon={<Badge><ExpandMoreIcon /></Badge>}
          >
            Explore
          </Button>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
          }}
        >
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
      </MoreButton>
        <SearchBar/>
      </NavLeft>
      <NavRight>
      <SearchOutlined sx={{display:{md:"none",sm:"block",xs:"block"},fontSize:"30px"}}/>
        <NavButton />
        <Typography variant="p" sx={{color:"#0056D2",display:{md:"flex",sm:"none",xs:"none"},"&:hover":{
          borderBottomStyle:"solid"
        }}} >Log in</Typography>
        <Button
            sx={{
              color: "#fff",
              backgroundColor: "#0056D2",
              // border: "2px solid #000",
              padding: "3px 5px",
              borderRadius:"5px",
              display:{md:"flex",sm:"none",xs:"none"},
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            Join for free
          </Button>
        
      </NavRight>
    </NavBar>
  );
}
