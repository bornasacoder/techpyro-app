import {
  styled,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled(Box)(({ theme }) => ({
  // border-radius: 5px;
  // margin-left: 10px;
  width: "60%",
  backgroundColor: "#fff",
  display: "flex",

  // [theme.breakpoints.down('sm')]: {
  //     width: '98vw',
  //     position: 'absolute',
  //     top : '80px',
  //     right: '4.5px',

  // }
  [theme.breakpoints.down("sm")]: {
    width: "75%",
  },
}));
const SearchField = styled(TextField)(({ theme }) => ({
  // height:'40px',
  // padding:' 8.5px 21px',
  fontSize: "unset",
  // padding-left: 20px,
  width: "100%",
  flex: 3,
  border: "none",
  outline: "none",
  "&::placeholder": {
    marginLeft: "100px",
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SearchList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
  },
}));

const StyledListItem = styled(ListItem)`
  padding: 2px 10px;
`;

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState("none");

  const catMenu = useRef(null);
  const searchHandler = () => {
    setShowSearch("flex");
  };

  const closeOpenMenus = (e) => {
    if (catMenu.current && showSearch && !catMenu.current.contains(e.target)) {
      setShowSearch("none");
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  const [location, setLocation] = useState("");
  const updatevalue = (e, vel) => {
    // console.warn(e.target.value);
    setLocation(e.target.value);
  };

  return (
    <Search sx={{ height: 50, position: "relative", borderRadius: "5px" }}>
      <Box display="flex" border="none" outline="none">
        <Select
          flex={1}
          value={location}
          outline="none"
          border="none"
          displayEmpty
          onChange={updatevalue}
          sx={{
            position: "relative",
            "& fieldset": { border: "none" },
            borderRight: "2px solid #EEEEEE",
            borderRadius: "1px",
            display: { md: "block", sm: "none", xs: "none" },
            
          }}
        >
          <MenuItem value="">Select location</MenuItem>
          <MenuItem value={1}>Haridwar</MenuItem>
          <MenuItem value={2}>Delhi</MenuItem>
          <MenuItem value={3}>Punjab</MenuItem>
          <MenuItem value={4}>Bihar</MenuItem>
        </Select>
      </Box>
      <Box display="flex" sx={{ width: "100%", position: "relative" }}>
        <SearchIcon
          color="secondary"
          border="none"
          outline="none"
          sx={{
            position: "absolute",
            left: "20px",
            top: "15px",
            fontSize: "30px",
          }}
        />
        <SearchField
          placeholder="search anything... "
          sx={{
            "& .MuiInputBase-input": {
              padding: "6px 10px",
              marginLeft: "45px",
              height: 40,
              position:"relative",
              width: "100%",
              outline: "none",
            },
            "& fieldset": { border: "none" },
          }}
          onClick={searchHandler}
          ref={catMenu}
        >

          </SearchField>
        <SearchList
          sx={{
            display: showSearch,
            flexDirection: "column",
            marginTop: "36px",
            bgcolor: "#fff",
            position: "absolute",
            right:"0px",
            left:"0px",
            color: "red",
            zIndex: "100",
          }}
          component="nav"
          aria-label="mailbox folders"
          ref={catMenu}
          >
          <StyledListItem button>
            <ListItemText primary="Inbox" />
          </StyledListItem>
          <Divider />
          <StyledListItem button divider>
            <ListItemText primary="Drafts" />
          </StyledListItem>
          <StyledListItem button>
            <ListItemText primary="Trash" />
          </StyledListItem>
          <Divider light />
          <StyledListItem button>
            <ListItemText primary="Spam" />
          </StyledListItem>
        </SearchList>
      </Box>
    </Search>
  );
}
