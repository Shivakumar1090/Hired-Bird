import { Avatar, Box, Breadcrumbs, Button, Divider, Drawer, Paper, Stack, Typography } from "@mui/material";
import Googlemg from "../../assets/icons/google.png"
import PaidIcon from '@mui/icons-material/Paid';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EventIcon from '@mui/icons-material/Event';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useState } from "react";
import JobDetails from "./job_details";

const Jobcard = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    return ( 
        <Paper elevation={1} sx={{p:2,mt: 3,mb: 3}}>
            <Box display="flex" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={Googlemg}/>
                    <Box>
                        <Typography variant="h6">Junior software engineer</Typography>
                        <Typography variant="body2" sx={{color: 'gray'}}>Google | Hyderabad, India</Typography>
                    </Box>
                </Stack>

                <Stack spacing={2} direction="row" alignItems="center">
                    <Button variant="outlined" onClick={toggleDrawer(true)}>View Details</Button>
                    <Button variant="contained"  endIcon={<ArrowForwardIcon color="secondary"/>} >Apply</Button>
                </Stack>
            </Box>

            <Stack mt={2} direction="row" spacing={5} justifyContent="center" alignItems="center">
                <Stack alignItems="center">
                    <Button  size="large"  startIcon={<PaidIcon />} disableRipple>Job offer</Button>
                    <Typography component="h1">$ 10 LPA</Typography>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack alignItems="center">
                    <Button size="large"  startIcon={<EventIcon />} disableRipple>Joining Date</Button>
                    <Typography component="h1">20/06/2024</Typography>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack alignItems="center">
                    <Button size="large"  startIcon={<WorkHistoryIcon />} disableRipple>Experience</Button>
                    <Typography component="h1">0-3 years</Typography>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack alignItems="center">
                    <Button size="large"  startIcon={<HourglassTopIcon />} disableRipple>Application deadline</Button>
                    <Typography component="h1">10/05/2024</Typography>
                </Stack>
            </Stack>

            <Drawer
                open={openDrawer}
                onClose={toggleDrawer(false)}
                anchor="right"
            >
                {<JobDetails toggleDrawer={toggleDrawer}/>}
            </Drawer>
        </Paper>
     );
}


 
export default Jobcard;