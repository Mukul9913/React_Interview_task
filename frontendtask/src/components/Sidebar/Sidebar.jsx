import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Collapse, 
  Typography, 
  Box,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ExpandLess,
  ExpandMore,
  ShoppingCart as ECommerceIcon,
  BarChart as AnalyticsIcon,
  Campaign as MarketingIcon,
  People as CRMIcon,
  TrendingUp as StocksIcon,
  CalendarToday as CalendarIcon,
  Person as ProfileIcon,
  Assignment as TaskIcon,
  Description as FormsIcon,
  TableChart as TablesIcon,
  Pages as PagesIcon,
  Message as MessageIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import '../../style/Sidebar.css';

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, subItems: ['eCommerce', 'Analytics', 'Marketing', 'CRM', 'Stocks'] },
    { text: 'Calendar', icon: <CalendarIcon /> },
    { text: 'Profile', icon: <ProfileIcon /> },
    { text: 'Task', icon: <TaskIcon /> },
    { text: 'Forms', icon: <FormsIcon /> },
    { text: 'Tables', icon: <TablesIcon /> },
    { text: 'Pages', icon: <PagesIcon /> },
  ];

  const getSubItemIcon = (text) => {
    switch(text) {
      case 'eCommerce': return <ECommerceIcon />;
      case 'Analytics': return <AnalyticsIcon />;
      case 'Marketing': return <MarketingIcon />;
      case 'CRM': return <CRMIcon />;
      case 'Stocks': return <StocksIcon />;
      default: return null;
    }
  };

  const drawer = (
    <>
      <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5" mt={2} noWrap component="div">
          TailAdmin
        </Typography>
        {isSmallScreen && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      
      <Box sx={{p:2, pt:8, flexGrow: 1, overflow: 'auto' }} className="hide-scrollbar">
        <Typography sx={{ml:4 ,color:'rgb(138 153 175 /5)'}}  component="div">
         Menu
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <ListItem 
                button 
                onClick={item.subItems ? handleClick : undefined}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white',minWidth:'40px' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {item.subItems && (open ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
              {item.subItems && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem 
                        button 
                        key={subItem} 
                        sx={{ 
                          pl: 4,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: 'white' }}>
                          {getSubItemIcon(subItem)}
                        </ListItemIcon>
                        <ListItemText primary={subItem} />
                        {subIndex !== 0 && (
                          <Typography variant="caption" sx={{ backgroundColor: '#4318FF', px: 1, borderRadius: 1 }}>
                            Pro
                          </Typography>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <ListItem 
          button
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
          <Typography variant="caption" sx={{ backgroundColor: 'red', px: 1, borderRadius: '50%' }}>
            5
          </Typography>
        </ListItem>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 290 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {isSmallScreen ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 290, backgroundColor: '#1c2434', color: 'white' },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 290, backgroundColor: '#1c2434',color:'rgb(222, 228, 238)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
