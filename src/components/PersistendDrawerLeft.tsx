import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import AppBar from '@mui/material/AppBar';
import MenuDrawer from './MenuDrawer';
import Colors from '../constants/Colors';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: Colors.darkGrey}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              TODO Running news
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: '100%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '100%',
              boxSizing: 'border-box',
            backgroundColor: Colors.darkGrey,
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={() => setOpen(false)} style={{color: "white"}}>
              <ChevronLeftIcon fontSize="large"/>
            </IconButton>
          </DrawerHeader>
          <MenuDrawer/>
        </Drawer>
      </Box>
      <DrawerHeader />
    </>
  );
}