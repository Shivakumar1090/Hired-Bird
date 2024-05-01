import { Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CandidateLayout = () => {
    const [currentTab,setCurrentTab] = useState("About")
    return ( 
        <Box  sx={{width: '70%',margin: 'auto',mt: 3}}>
            <Box mb={2}>
                <Typography fontWeight={500} variant="h4">Edit your Hired Bird Profile</Typography>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    indicatorColor="secondary"
                    value={currentTab}
                    onChange={(event, newval) => setCurrentTab(newval)}
                    variant="scrollable"
                >
                    <Tab 
                        component={Link}
                        to="about"
                        disableRipple
                        value={0}
                        label="About"
                        sx={tab}
                    />
                    <Tab 
                        component={Link}
                        to="education"
                        disableRipple
                        value={1} 
                        label="Your Education"
                        sx={tab}
                    />
                    <Tab
                        component={Link}
                        to="workexp" 
                        disableRipple
                        value={2} 
                        label="Work Experience"
                        sx={tab}
                    />
                    <Tab 
                        component={Link}
                        to="skills"
                        disableRipple
                        value={3} 
                        label="Skills"
                        sx={tab}
                    />
                </Tabs>
            </Box>

            <Box>
                <Outlet />
            </Box>
        </Box>
    );
}

const tab = {
    color: "#1C294C",
    textTransform: "capitalize",
    fontSize: { xs: "15px", sm: "16px" },
}
 
export default CandidateLayout;