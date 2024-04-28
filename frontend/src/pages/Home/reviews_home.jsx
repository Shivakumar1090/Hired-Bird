import { Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WomenImg from "../../assets/images/women.png";
import StudyingWomen from "../../assets/images/studying.png";

const ReviewsHome = () => {
    return ( 
        <Box padding={5} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Stack position="relative" sx={{width: '60%'}}>
                <Typography sx={{fontSize: '40px',fontWeight: 500, lineHeight: 1.2}}>Find the best <br/> comapnies</Typography>
                <Box>
                    <Button 
                        endIcon={<ArrowRightAltIcon />} 
                        color='primary'
                        sx={{textTransform: 'capitalize',background: '#fff',borderRadius: '50px',fontSize: '17px'}}
                    >All companies</Button>
                </Box>
                <Box sx={{width: '350px',height: '60vh'}} marginTop='20px'>
                    <img src={WomenImg} alt="" style={img}/>
                </Box>
                <Box sx={{width: '250px',height: '30vh',position: 'absolute',right: 5,top: 70}} marginTop='20px'>
                    <img src={StudyingWomen} alt="" style={img}/>
                </Box>
            </Stack>

            <Grid 
                container 
                
                columnSpacing={{md: 8}}
                columns={{ xs: 4, sm: 8, md: 4 }}
                justifyContent="center"
                alignItems="center"
            >
                {Array.from(Array(4)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={1.5} key={index}>
                        <CompanyCard>xs=2</CompanyCard>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}

const CompanyCard = () => {
    return(
        <Stack spacing={2} sx={{width: '100%',background: '#fff',boxShadow: '5px 5px 10px #1212',padding: 2,borderRadius: '10px',border: '1px solid #ddd'}}>
            <Typography variant='h5' fontWeight={500} >Apple company</Typography>
            <Divider />
            <Typography variant="body2">What if a job platform found YOU the best jobs instead of making those in need of a job do all the work.</Typography>
            <Stack spacing={2} direction="row">
                <Chip label="Engineering"/>
                <Chip label="Analytics"/>
            </Stack>
            <Divider />
            
        </Stack>
    )
}
 

const img = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
}




export default ReviewsHome;