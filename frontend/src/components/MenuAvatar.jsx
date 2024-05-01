import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import React from "react";
import { Link } from "react-router-dom";

const MenuAvatar = ({anchorEl,handleClose,open}) => {
    
    return ( 
        <Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.08))',
                        borderRadius: '5px',
                        // border: '0.1px solid #6ED09B',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component={Link} to="candidate/about" >
                    <Avatar sx={{bgcolor: '#1C294C'}}/> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" color="secondary"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

        </Box>
    );
}
 
export default MenuAvatar;