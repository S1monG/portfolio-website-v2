import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Backdrop } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Colors from "../constants/Colors";

type BackdropParamList = "None" | "About" | "Skills" | "Contact";

export default function MenuDrawer() {
  const [backdropState, setBackdropState] = useState<BackdropParamList>("None")

  const isBackdropOpen = () => {
    return backdropState !== "None"
  }

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: Colors.darkGrey,
      }}
      role="presentation"
    >
      <List >
      <Divider sx={{ borderBottomWidth: 3, background: "white", }}/>
        <ListItemButton onClick={() => setBackdropState("About")}>
          <ListItemText primary={"About"} style={{ color: 'white' }}/>
        </ListItemButton>
        <Divider sx={{ borderBottomWidth: 3, background: "white", }}/>
        <ListItemButton onClick={() => setBackdropState("Skills")}>
          <ListItemText primary={"Skills"} style={{ color: 'white' }}/>
        </ListItemButton>
        <Divider sx={{ borderBottomWidth: 3, background: "white", }}/>
        <ListItemButton onClick={() => setBackdropState("Contact")}>
          <ListItemText primary={"Contact"} style={{ color: 'white' }}/>
        </ListItemButton>
      </List>

      <Backdrop 
        open={(isBackdropOpen())} 
      >
        <ArrowBackIcon 
          sx={{position: "absolute", top: 10, left: 10, fontSize: 100}} 
          style={{color: "white"}}
          onClick={() => setBackdropState("None") } 
        />
        {backdropState === "About" && <p>About</p>}
        {backdropState === "Skills" && <p>Skills</p>}
        {backdropState === "Contact" && <p>Contact</p>}
      </Backdrop>
    </Box>
  );


}
