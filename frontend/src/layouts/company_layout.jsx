
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const CompanyLayout = () => {
    return ( 
        <Box sx={{display: 'flex'}}>
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
                            <ListItemButton component={Link} to="profile">
                                <ListItemIcon><PersonIcon color="secondary"/></ListItemIcon>
                                <ListItemText primary="Your's Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="jobs/create">
                                <ListItemIcon><AddTaskIcon color="secondary"/></ListItemIcon>
                                <ListItemText primary="Post a new Job" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding >
                            <ListItemButton component={Link} to="jobs">
                                <ListItemIcon><ListAltIcon color="secondary"/></ListItemIcon>
                                <ListItemText primary="Your's Posted Jobs " />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>

            <Box width="100%">
                <Outlet />
            </Box>
        </Box>
    );
}
 
export default CompanyLayout;