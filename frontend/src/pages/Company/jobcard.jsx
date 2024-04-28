import { Avatar, Box, Breadcrumbs, Button, Divider, Drawer, Paper, Stack, Typography } from "@mui/material";
import Googlemg from "../../assets/icons/google.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { stringAvatar } from "../../utils/stringavatar";

const Jobcardcomp = () => {
   
    return ( 
        <Paper elevation={2} sx={{p:2,mt: 3,mb: 3}}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar  {...stringAvatar('Junior software engineer')}/>
                <Box>
                    <Typography variant="h6">Junior software engineer</Typography>
                    <Typography variant="body2" sx={{color: 'gray'}}>Google | Hyderabad, India</Typography>
                </Box>
            </Stack>

            <Stack mt={3} spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                <Button variant="outlined" >Edit Details</Button>
                <Button variant="contained"  endIcon={<ArrowForwardIcon color="secondary"/>} >See Applications</Button>
            </Stack>
        </Paper>
     );
}


 
export default Jobcardcomp;