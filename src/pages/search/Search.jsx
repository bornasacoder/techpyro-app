import { Box ,styled,IconButton,TextField,useTheme, Typography, Grid, Paper} from '@mui/material'
import React from 'react';
import WestIcon from '@mui/icons-material/West';
import { Link, useNavigate } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';

const SearchField = styled(TextField)(({theme}) => ({
    fontSize: 'unset',
    width:'100%' ,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    color: theme.colors.alpha.black[100],
    right:'12px',
}));

const HistoryContainer = styled(Box)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    minHeight:'40px',
    gap:'20px',
    padding:'5px 20px',
    borderBottom:`1px solid ${theme.colors.alpha.black[10]}`

}));

const LinkButton = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    cursor:'none',
    margin:'5px 0 5px 20px',
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minWidth:'150px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


export default function Search() {
    const theme = useTheme();

    const navigate = useNavigate();
  return (
    <Box sx={{display:{sm:'none',xs:'block'}}}>
        <Box sx={{display:'flex',padding:'5px 20px',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`}}>
            <MenuButton sx={{}} onClick={()=>navigate(-1)}>
                    <WestIcon/>
            </MenuButton>
            <SearchField autoFocus placeholder='Search for websites, apps and more...' sx={{ "& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
          padding: "8px",
         },}}/>
        </Box>
        <Box>
            <HistoryContainer>
                <HistoryIcon/>
                <Typography>new websites</Typography>
            </HistoryContainer>
            <HistoryContainer>
                <HistoryIcon/>
                <Typography>new websites</Typography>
            </HistoryContainer>
            <HistoryContainer>
                <HistoryIcon/>
                <Typography>new websites</Typography>
            </HistoryContainer>
        </Box>
        <Box >
            <Box sx={{padding:'10px 20px',fontSize:'18px'}}>Trending</Box>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={0} columns={12}>
                    <LinkButton to={'/websites'}>
                        <Grid item xs={4}>
                            <Item>Top Websites</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Top Apps</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Ui/Ux designs</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Digital Marketing</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Graphics designs</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>video editing</Item>
                        </Grid>
                    </LinkButton>
                    <Typography sx={{textAlign:'center',height:'30px',width:'70px',margin:'10px 0 0 5px',fontSize:'16px'}}>More...</Typography>
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}
