
import { LocationCityOutlined, LocationCitySharp, SearchOutlined } from '@mui/icons-material';
import { styled, TextField, Box, List, ListItem, ListItemText, Divider } from '@mui/material'
import React,{useRef, useState} from 'react'

const Search = styled(Box)(({theme}) => ({

    // border:'1px solid black',
    // margin-left: 10px;
    width: '250px',
    height:'45px',
    borderRadius:'0px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems:'center',
    // border:'1px solid rgba(0,0,0,0.3)',
    [theme.breakpoints.down('sm')]: {
       
        width: '200px',
        // position: 'absolute',
        // top : '80px',
        // right: '4.5px',
        position:'sticky'

    },
    [theme.breakpoints.up('sm')]: {
        width: '100%',
        // position: 'absolute',
        // top : '80px',
        // right: '4.5px',

    },
    [theme.breakpoints.up('md')]: {
        
        // position: 'absolute',
        // top : '80px',
        // right: '4.5px',

    }
}))
;
const SearchField = styled(TextField)(({theme}) => ({
    // height:'10%',
    // padding: 8.5px 21px;
    // fontSize: 'unset',
    // paddingLeft:'px',
    color:'white',
    width:'250px' ,
    height:'45px',
    borderRadius:'0px',
    [theme.breakpoints.down('sm')]: {
        width:'200px' ,

        padding:'0'
        // position: 'absolute',
        // top : '80px',
        // right: '4.5px',

    }
    
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
    <Search>
       
        <SearchField  placeholder='Search..' sx={{"& fieldset": {border:'none'}, '& .MuiInputBase-input': {paddingBottom:{xs:'20px',sm:'20px',md:'50px'},height:{xs:'10px',sm:'10px',md:'10px',},borderRadius:'0px'},border:'none',color:'white'}} onClick={searchHandler} ref={catMenu}  ></SearchField>
    <SearchOutlined sx={{fontSize:'30px',color:'white',margin:'0px',borderRadius:'0px',}}/>
        <SearchList sx={{display: showSearch,
            flexDirection:'column', 
            width: '39.95%',
            marginTop: '36px',
            bgcolor: '#fff',
            position: 'absolute',
            color: 'red',}} component="nav" aria-label="mailbox folders" ref={catMenu}>
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
