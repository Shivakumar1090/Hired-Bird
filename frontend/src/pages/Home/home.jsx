import { Box, Button, Stack, Typography } from "@mui/material";
import InterviewImg from "../../assets/images/interview2.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GoogleIcon from "../../assets/icons/google.png";
import AppleIcon from "../../assets/icons/apple.png";
import ReviewsHome from "./reviews_home";
import FooterHome from "./footer_home";

const Home = () => {
    return ( 
        <Box >
            <Box sx={container}>
                <Stack
                    sx={{width: '40%'}} 
                    justifyContent="center" 
                    textAlign="left"
                    spacing={2}
                    position="relative"
                >
                    <Button 
                        endIcon={<ArrowRightAltIcon />} 
                        sx={{width: '220px',textTransform: 'capitalize',background: '#fff',borderRadius: '50px'}}
                    >
                        Let your job post be seen
                    </Button>
                    <Typography fontSize="70px"fontWeight={500} lineHeight={1}>Find {" "} 
                        <span style={{ borderBottom: '30px solid #6ED09B', lineHeight: "0px"}}>the best  </span>
                        job offer for you.
                    </Typography>
                    <Typography>Getting a new job is very easy. Check what new jobs have in store for you.</Typography>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        sx={{padding: 2,color: '#fff',width: '200px'}}
                        href="/jobs"
                    >
                        Search 
                    </Button>

                    <Stack 
                        direction='row' 
                        spacing={3}
                        sx={{position: 'absolute',bottom: 20}}
                    >
                        <Stack spacing={1} textAlign="center" display="inline">
                            <Typography sx={{color: 'gray',fontSize: '14px'}} >JOBS</Typography>
                            <Typography variant="h4" fontWeight={600}>1000+</Typography>
                        </Stack>
                        <Box style={divider}/>
                        <Stack spacing={1} textAlign="center">
                            <Typography sx={{color: 'gray',fontSize: '14px'}}>STARTUPS</Typography>
                            <Typography variant="h4" fontWeight={600}>5000+</Typography>
                        </Stack>
                        <Box style={divider}/>
                        <Stack spacing={1} textAlign="center">
                            <Typography sx={{color: 'gray',fontSize: '14px'}}>TALENTS</Typography>
                            <Typography variant="h4" fontWeight={600}>1000+</Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Box position="relative" sx={{ marginTop: 'auto',marginBottom: 'auto',}}>
                    <Box sx={googleicon}>
                        <img src={GoogleIcon} alt="google png" style={{width: '100%'}}/>
                    </Box>
                    <Box sx={appleicon}>
                        <img src={AppleIcon} alt="google png" style={{width: '100%'}}/>
                    </Box>
                    <Box sx={ImgContainer}>
                        <img src={InterviewImg} alt="" style={img}/>
                    </Box>
                </Box>
            </Box>
            <ReviewsHome />
            <FooterHome />
        </Box>
    );
}


 
const container = {
    height: '90vh',
    background: '#EDF3F5',
    display: 'flex',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: '20px'
}

const ImgContainer = {
    width: '450px',
    height: '70vh',
    boxShadow: '20px 20px #1C294C',
    borderRadius: '20px',
}
const img = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
}

const divider = {
    border: '1px solid gray',
    opacity: 0.3,
}

const googleicon = {
    position: 'absolute',
    background: '#fff',
    borderRadius:'10px',
    bottom: 10,
    left: -80,
    width: "70px",
    padding: '15px',
    boxShadow: '5px 5px 5px #1212'
}

const appleicon = {
    position: 'absolute',
    background: '#fff',
    borderRadius:'10px',
    top: -20,
    left: -120,
    width: "30px",
    padding: '15px',
    boxShadow: '5px 5px 5px #1212'
}

export default Home;