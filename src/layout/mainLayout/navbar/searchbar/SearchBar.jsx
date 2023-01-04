
import { styled, TextField, Box, List, ListItem, ListItemText, Divider } from '@mui/material'
import React,{useRef, useState} from 'react'

import SearchIcon from '@mui/icons-material/Search';

const Search = styled(Box)(({theme}) => ({

    // border-radius: 5px;
    // margin-left: 10px;
    width: '55%',
    backgroundColor: theme.colors.alpha.white[100],
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        width: '98vw',
        position: 'absolute',
        top : '80px',
        right: '-21.5px',

    }
}))
;

const SearchField = styled(TextField)(({theme}) => ({
    // height:40px;
    // padding: 8.5px 21px;
    fontSize: 'unset',
    // padding-left: 20px,
    width:'100%' ,
}),
);

const SearchList = styled(List)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '98vw',
    }
}),
);

  const StyledListItem = styled(ListItem)`
    padding: 2px 10px;
  `;
  

export default function SearchBar() {
    const [showSearch, setShowSearch] = useState('none')

    const catMenu = useRef(null)
    const searchHandler = ()=>{
        setShowSearch('flex');
    }
    
    const closeOpenMenus = (e)=>{
        if(catMenu.current && showSearch && !catMenu.current.contains(e.target)){
            setShowSearch('none')
        }
    }
    document.addEventListener('mousedown',closeOpenMenus);
  return (
    <Search sx={{height:36}}>
        <SearchIcon color = 'primary' sx={{fontSize:'100', marginTop:'6px',marginLeft:'10px'}}/>
        <SearchField placeholder='search anything... ' sx={{ "& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
      padding: "8px",
    },}} onClick={searchHandler} ref={catMenu}></SearchField>
        <SearchList color='secondary' sx={{display: showSearch,
            flexDirection:'column', 
            width: {md:'41.25%', sm:'39%'},
            marginTop: '36px',
            bgcolor: '#fff',
            position: 'absolute',
            zIndex: "100"}} component="nav" aria-label="mailbox folders" ref={catMenu}>
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
    </Search>
  )
}
