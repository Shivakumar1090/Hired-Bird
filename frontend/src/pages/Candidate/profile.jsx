import { Box, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import AboutCandidate from "./profile_sections/about";
import { useState } from "react";
import { Link } from "react-router-dom";
import EducationOfCandidate from "./profile_sections/education";
import WorkExpCandidate from "./profile_sections/workexp";
import SkillsCandidate from "./profile_sections/skills";
import ResumeCandidate from "./profile_sections/resume";

const CandidateProfile = () => {
    const [currentTab,setCurentTab] = useState(0);
    
    return ( 
        <Box >
            <Navbar />
            <Box sx={{width: '65%',margin: 'auto',mt: 3}}>
                <Box mb={3}>
                    <Typography fontWeight={500} variant="h4">Edit your Hired Bird Profile</Typography>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                        indicatorColor="secondary"
                        value={currentTab}
                        onChange={(event, newval) => setCurentTab(newval)}
                        variant="scrollable"
                    >
                        <Tab 
                            disableRipple
                            value={0}
                            label="About"
                            sx={tab}
                        />
                        <Tab 
                            disableRipple
                            value={1} 
                            label="Your Education"
                            sx={tab}
                        />
                        <Tab 
                            disableRipple
                            value={2} 
                            label="Work Experience"
                            sx={tab}
                        />
                        <Tab 
                            disableRipple
                            value={3} 
                            label="Skills"
                            sx={tab}
                        />
                    </Tabs>
                </Box>
                <Box >
                    {currentTab === 0 ? <AboutCandidate /> : 
                    currentTab === 1 ? <EducationOfCandidate /> : 
                    currentTab === 2 ? <WorkExpCandidate /> : 
                    currentTab === 3 ? <SkillsCandidate /> : 
                    <ResumeCandidate />}
                </Box>
            </Box>
        </Box>
    );
}

const tab = {
    color: "#1C294C",
    textTransform: "capitalize",
    fontSize: { xs: "15px", sm: "16px" },
  
}
 
export default CandidateProfile;