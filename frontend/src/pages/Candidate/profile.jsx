import { Box, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import AboutCandidate from "./profile_sections/about";
import { useState } from "react";
import { Link } from "react-router-dom";

const CandidateProfile = () => {
    const [currentTab,setCurentTab] = useState("")
    return ( 
        <Box sx={{width: '65%',margin: 'auto'}}>
            {/* <Navbar /> */}
            <Box mb={3}>
                <Typography fontWeight={500} variant="h4">Edit your Hired Bird Profile</Typography>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs indicatorColor="secondary" value={currentTab}>
                    <Tab 
                        disableRipple
                        component={Link}
                        value="about"
                        label="About"
                        sx={tab}
                    />
                    <Tab 
                        disableRipple
                        component={Link}
                        value="about"
                        label="About"
                        sx={tab}
                    />
                    <Tab 
                        disableRipple
                        component={Link}
                        value="about"
                        label="About"
                        sx={tab}
                    />
                    <Tab 
                        disableRipple
                        component={Link}
                        value="about"
                        label="About"
                        sx={tab}
                    />
                </Tabs>
            </Box>
            <AboutCandidate />
        </Box>
    );
}

const tab = {
    color: "#1C294C",
    textTransform: "capitalize",
    fontSize: { xs: "15px", sm: "16px" },
  
}
 
export default CandidateProfile;