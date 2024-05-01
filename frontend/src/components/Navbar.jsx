import { Avatar, Box, Button, IconButton, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import Logo from "./Logo";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";
import MenuAvatar from "./MenuAvatar";
import GoogleImg from '../assets/icons/google.png';

const Navbar = () => {
    const [currentTab, setCurrentTab] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return ( 
        <Box sx={container} >
            <Logo />
            {/* <Tabs
                indicatorColor="secondary"
                TabIndicatorProps={{width: '100px'}}
                value={currentTab}
                onChange={(event, newval) => setCurrentTab(newval)}
                role="navigation"
                centered
            >
                <Tab
                    disableRipple
                    component={Link}
                    to="/"
                    value="/"
                    label="Home"
                    sx={tab}
                />
                <Tab
                    disableRipple
                    component={Link}
                    to="jobs"
                    value="jobs"
                    label="Jobs"
                    sx={tab}
                />
                <Tab
                    disableRipple
                    component={Link}
                    to="/candidate/about"
                    value="/candidate/about"
                    label="Candidate Profile"
                    sx={tab}
                />
                <Tab
                    disableRipple
                    component={Link}
                    value="/company/profile"
                    to="/company/profile"
                    label="Company profile"
                    sx={tab}
                />
            </Tabs> */}
            <Stack direction='row' spacing={3} sx={{marginTop: 'auto',marginBottom: 'auto'}}>
                <Typography component={Link} to="jobs" style={{marginTop: 'auto',marginBottom: 'auto',fontSize: '17px',textDecoration: 'none',fontWeight: 500}}>Jobs</Typography>

                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar src={GoogleImg} sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
                <MenuAvatar open={open} anchorEl={anchorEl} handleClose={handleClose}/>
                {/* <Typography component={Link} to="signin" style={{marginTop: 'auto',marginBottom: 'auto',fontSize: '17px',textDecoration: 'none',fontWeight: 500}}>Sign in</Typography>
                <Button component={Link} variant="contained" sx={btn} to="signup">Create Account</Button> */}
            </Stack>
           
        </Box>
     );
}

const container = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 1.2,
}

const tab = {
    color: "#1C294C",
    textTransform: "capitalize",
    fontSize: { xs: "13px", sm: "15px" },
    letterSpacing: 0.32,
};

const btn = {
    borderRadius: '100px',
    padding: 1.5,
    fontSize: '16px',
}
 
 
export default Navbar;