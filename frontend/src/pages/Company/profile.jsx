import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GoogleImg from "../../assets/icons/google.png";
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkIcon from '@mui/icons-material/Work';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Navbar from "../../components/Navbar";
import InputLabel from "../../components/InputLabel";
import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const drawerWidth = 240;

const Companyprofile = () => {

    const fileInput = React.useRef();
    
    return ( 
        <Box sx={{display: 'flex'}}>
            {/* <Navbar /> */}
            <Drawer
                variant="permanent"
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        
                        <ListItem disablePadding>
                            <ListItemButton role="navigation" href="addjob">
                                <ListItemIcon><PersonIcon color="secondary"/></ListItemIcon>
                                <ListItemText primary="Your's Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><AddTaskIcon color="secondary"/></ListItemIcon>
                                <ListItemText primary="Post a new Job" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><ListAltIcon color="secondary"/></ListItemIcon>
                                <ListItemText primary="Your's Posted Jobs " />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography variant="h4" mb={3} >Your Profile</Typography>
                <Stack  spacing={3}>
                    <InputLabel 
                        label="Your's company name"
                        placeholder="Enter your company name"
                    />
                    <InputLabel 
                        label="Say about your company"
                        placeholder="Enter your company name"
                    />
                    <Stack direction="column" spacing={2}>
                        <Typography variant="label">Your company logo*</Typography>
                        <img src={GoogleImg} alt="" style={{width:'100px',height: '100px',objectFit: 'cover'}}/>
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            onClick={()=>fileInput.current.click()}
                            sx={{width: '200px'}}
                            startIcon={<UploadFileIcon />}
                        >
                            upload file
                        </Button>

                        <input 
                            ref={fileInput} 
                            type="file" 
                            style={{ display: 'none' }} 
                        />
                    </Stack>

                    <Button variant="contained">Save</Button>
                </Stack>
            </Box>
        </Box>
    );
}
 
export default Companyprofile;