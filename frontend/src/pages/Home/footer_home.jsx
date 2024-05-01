import { Button, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MeetingImg from "../../assets/images/meeting.png";
import { Link } from "react-router-dom";

const FooterHome = () => {
    return ( 
        <Stack
            spacing={0}
            justifyContent="center"
            alignItems="center"
            sx={{
                height: '60vh',
                backgroundImage: `linear-gradient(to bottom,rgba(8, 13, 27,0.9),rgba(8, 13, 27, 0.9)),url(${MeetingImg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h3" fontWeight={500} color='#fff' gutterBottom>One step away</Typography>
            <Typography variant="body1" color='#6c7491'>What if a job platform found YOU the best jobs instead of making those in need of a job do all the work.</Typography>
            <Button
                endIcon={<ArrowRightAltIcon />}
                component={Link}
                to="signup"
                sx={{width: '220px',textTransform: 'capitalize',background: '#fff',borderRadius: '50px',marginTop: '15px',padding: '10px',fontWeight: 500}}
            >   
                Sign up 
            </Button>
        </Stack>
    );
}
 
export default FooterHome;