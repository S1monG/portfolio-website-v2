import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from "@mui/material/Drawer";
import MenuDrawer from "./MenuDrawer";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function TopBar() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <MenuIcon 
              sx={{fontSize: 50}} 
              onClick={() => setDrawerState(!drawerState)} 
            />
            <Typography variant="h6" color="inherit" component="div">
              Keep a running feed of something interesting here
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={drawerState} onClose={() => setDrawerState(false)}>
          <MenuDrawer />
      </Drawer>
    </>
  );
}

export default TopBar;