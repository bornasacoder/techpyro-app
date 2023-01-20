
import { LocationCityOutlined, LocationCitySharp, SearchOutlined } from '@mui/icons-material';
import { styled, TextField, Box, List, ListItem, ListItemText, Divider } from '@mui/material'
import React,{useRef, useState} from 'react'

const Search = styled(Box)(({theme}) => ({

    // border:'1px solid black',
    // margin-left: 10px;
    width: '500px',
    height:'50px', 
    borderRadius:'0px',
    backgroundColor: '#ECEFF1',
    display: 'flex',
    alignItems:'center',
    border:'1px solid black',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
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
    width:'500px' ,
    height:'45px',
    borderRadius:'0px',
    [theme.breakpoints.down('sm')]: {
        width: '100%',

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
       
        <SearchField   placeholder='search by part name, number,vehicle,brands.....' sx={{"& fieldset": {border:'none'}, '& .MuiInputBase-input': {paddingBottom:{xs:'0px',sm:'0px',md:'50px'},
     height:{xs:'25px',sm:'25px',md:'0px',},borderRadius:'0px'
    },border:'none'}} onClick={searchHandler} ref={catMenu}  ></SearchField>
    <SearchOutlined sx={{fontSize:'30px',color:'black',marginLeft:'0px'}}/>
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
