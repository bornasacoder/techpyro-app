import React from 'react'
import {
      Divider,
      List,
      ListItem,
      ListItemText,
    } from "@mui/material";
    import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
    import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
    import CategoryIcon from '@mui/icons-material/Category';
    import MoreIcon from '@mui/icons-material/More';
    import LanguageIcon from '@mui/icons-material/Language';
    import FilterFramesIcon from '@mui/icons-material/FilterFrames';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import PersonIcon from '@mui/icons-material/Person';
    import NotificationsIcon from '@mui/icons-material/Notifications';
    import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

export default function MenuSidebar() {
  return (
    <List sx={{width:'100%',flex:'9'}} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <SubscriptionsIcon/>
          <ListItemText primary="Subscription Zone" />
        </ListItem>
        <Divider />
        <ListItem button>
          <GridViewRoundedIcon/>
          <ListItemText primary="All Categories" />
        </ListItem>
        <ListItem button>
          <CategoryIcon/>
          <ListItemText primary="Trending Websites" />
        </ListItem>
        <ListItem button>
          <MoreIcon/>
          <ListItemText primary="More on TechPyro" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <LanguageIcon/>
          <ListItemText primary="Choose Language" />
        </ListItem>
        <Divider light />
          <Link to={'/orders'} style={{textDecoration:'none'}}>
        <ListItem button>
          <FilterFramesIcon/>
          <ListItemText primary="My Orders" />
        </ListItem>
          </Link>
        <ListItem button>
          <ShoppingCartIcon/>
          <ListItemText primary="My Cart" />
        </ListItem>
        <ListItem button>
          <FavoriteIcon/>
          <ListItemText primary="My Wishlist" />
        </ListItem>
          <Link to={'/my-account/profile'} style={{textDecoration:'none'}}>
        <ListItem button>
          <PersonIcon/>
          <ListItemText primary="My Account" />
        </ListItem>
          </Link>
        <ListItem button>
          <NotificationsIcon/>
          <ListItemText primary="My Notifications" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <PhoneIcon/>
          <ListItemText primaryTypographyProps={{fontSize:'20px',fontWeight:600}} primary="+91-9999999999" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Help Center" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Legal" />
        </ListItem>
      </List>
  )
}
