import { Box, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import AboutCandidate from "./about";
import { useState } from "react";
import { Link } from "react-router-dom";
import EducationOfCandidate from "./education";
import WorkExpCandidate from "./workexp";
import SkillsCandidate from "./skills";
import ResumeCandidate from "./resume";

const CandidateProfile = () => {
    const [currentTab,setCurentTab] = useState(0);
    
    return ( 
        <Box >
            <Box sx={{width: '65%',margin: 'auto',mt: 3}}>
                
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