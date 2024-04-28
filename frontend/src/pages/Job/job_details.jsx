import { Avatar, Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import Googlemg from "../../assets/icons/google.png"
import PaidIcon from '@mui/icons-material/Paid';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EventIcon from '@mui/icons-material/Event';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const JobDetails = ({toggleDrawer}) => {
    return ( 
        <Box role="presentation" sx={{width: '600px',height:"100%",p: 3}}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={Googlemg}/>
                <Box>
                    <Typography variant="h6">Junior software engineer</Typography>
                    <Typography variant="body2" sx={{color: 'gray'}}>Google | Hyderabad, India</Typography>
                </Box>
            </Stack>

            <Stack mt={2} direction="row" flexWrap="wrap" rowGap={2} spacing={5} justifyContent="center" alignItems="center">
                <Stack alignItems="center">
                    <Button startIcon={<PaidIcon />} disableRipple>Job offer</Button>
                    <Typography variant="body2">$ 10 LPA</Typography>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack alignItems="center">
                    <Button  startIcon={<EventIcon />} disableRipple>Joining Date</Button>
                    <Typography variant="body2">20/06/2024</Typography>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                
                <Stack alignItems="center">
                    <Button startIcon={<WorkHistoryIcon />} disableRipple>Experience</Button>
                    <Typography variant="body2">0-3 years</Typography>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Stack alignItems="center">
                    <Button  startIcon={<HourglassTopIcon />} disableRipple>Application deadline</Button>
                    <Typography variant="body2">10/05/2024</Typography>
                </Stack>
            </Stack>
            
            
            <Stack spacing={2} direction="row" justifyContent="center" mt={2} mb={2}>
                <Button startIcon={<CloseIcon />} variant="outlined" onClick={toggleDrawer(false)}>Close</Button>
                <Button endIcon={<ArrowForwardIcon />} variant="contained" size="large">Apply</Button>
            </Stack>
            
            <Divider />
            
            <Box  mt={2} mb={2}>
                <Typography fontWeight={600} variant="body1" gutterBottom>Skills</Typography>
                <Stack direction="row" rowGap={1} flexWrap="wrap" columnGap={1}>
                    <Chip label="Web development" />
                    <Chip label="Web development" /><Chip label="Web development" />
                    <Chip label="Web development" /><Chip label="Web development" />
                    <Chip label="Web development" /><Chip label="Web development" />

                </Stack>
            </Box>
            
            <Divider />
            
            <Box  mt={2} mb={2}>
                <Typography fontWeight={600} variant="body1" gutterBottom>About the Job</Typography>
                <Typography variant="body2" color='gray' sx={{lineHeight: 1.6}}>
                    Selected candidate's day-to-day responsibilities include:

                    Our tech stack is Python/Django and React with Typescript. As a member of the development group, you will be primarily responsible for the design, development, and maintenance of the product:

                    Help define and create full stack architecture and deployment using React- Django-AWS in an agile environment with lots of ownership and active mentoring.
                    Work with the Product and Design teams to build new features to solve business problems and fill business needs
                    Participate in code reviews to create robust and maintainable code
                    Work in an agile environment where quick iterations and good feedback are a way of life
                    Interact with other stakeholders for requirement, design discussions and for adoption of new features
                    Communicate and coordinate with our support and professional services teams to solve customer issues.
                    Help scale our platform as we expand our product across various markets and verticals globally.
                </Typography>
            </Box>
            
        </Box>
    );
}
 
export default JobDetails;