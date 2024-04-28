import { Box, Button, InputBase, Stack, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Jobcard from "./job_card";
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';

const Jobs = () => {
    const [currentTab,setCurentTab] = useState(0);
    
    return ( 
        <Box >
            <Navbar />
            <Box sx={{width: '65%',margin: 'auto',mt: 3}}>
                <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography fontWeight={500} variant="h4">Search for jobs</Typography>
                    <InputBase 
                        startAdornment={<SearchIcon color="secondary"/>}
                        placeholder="Search with job title"
                        sx={{p: "2px",border: '1px solid #6ED09B',borderRadius: '10px'}}
                    />
                </Box>

                <Stack direction="row" spacing={3}>
                    <Button variant="outlined" startIcon={<PlaceIcon color='secondary'/>}>Location</Button>
                    <Button variant="outlined" startIcon={<PlaceIcon color='secondary'/>}>Experience</Button>
                    <Button variant="contained" startIcon={<PlaceIcon color='secondary'/>}>offer</Button>
                </Stack>
               
                <Jobcard />
                <Jobcard />
                <Jobcard />
                <Jobcard />
            </Box>
        </Box>
    );
}

const tab = {
    color: "#1C294C",
    textTransform: "capitalize",
    fontSize: { xs: "15px", sm: "16px" },
  
}
 
export default Jobs;