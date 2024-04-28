import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => {
    const [currentTab, setCurrentTab] = useState("");
    return ( 
        <Box sx={container}>
            <Logo />
            <Tabs
                indicatorColor="secondary"
                TabIndicatorProps={{width: '100px'}}
                value={currentTab}
                onChange={(event, newval) => setCurrentTab(newval)}
                role="navigation"
                centered
            >
                <Tab
                    disableRipple
                    
                    value="/Blogs"
                    to="/Blogs"
                    label="Blogs"
                    sx={tab}
                />
                <Tab
                    disableRipple
                    
                    value="/"
                    to="/"
                    label="Home"
                    sx={tab}
                />
                <Tab
                    disableRipple
                    
                    value="/Work"
                    to="/Work"
                    label="Work"
                    sx={tab}
                />
                <Tab
                    disableRipple
                    
                    value="/ContactUs"
                    to="/ContactUs"
                    label="Contact Us"
                    sx={tab}
                />
            </Tabs>
            <Stack direction='row' spacing={3} sx={{marginTop: 'auto',marginBottom: 'auto'}}>
                <Typography component={Link} to='signup' style={{marginTop: 'auto',marginBottom: 'auto',fontSize: '16px'}}>Sign in</Typography>
               
                <Button variant="contained" sx={btn} href="signup">Create Account</Button>
            </Stack>
        </Box>
     );
}

const container = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 1.5,
    zIndex: (theme) => theme.zIndex.drawer + 1 ,
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