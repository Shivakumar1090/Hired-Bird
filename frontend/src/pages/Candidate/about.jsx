import { Box, Button, Grid, InputBase, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AboutCandidate = () => {
    return ( 
        <Box sx={container}>
            <Grid
                container
                spacing={2}
                justifyContent="space-between"
            >
                <Grid item sm={3.5}>
                    <Typography component="h1" variant="h6">About</Typography>
                    <Typography variant="body2">Tell us about yourself so startups know who you are.</Typography>
                </Grid>
                <Grid item sm={8}>
                    <Box>
                        <Stack spacing={2}>
                            <InputTemplate />
                            <InputTemplate />
                            <InputTemplate />
                            <InputTemplate />

                        </Stack>
                        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                            <Button variant="outlined" startIcon={<ClearIcon />}>Cancel</Button>
                            <Button variant="contained" endIcon={<ArrowRightAltIcon />} sx={{textDecoration: 'capitalize'}}>Save</Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

const InputTemplate = () => {
    return(
        <Box>
            <Typography gutterBottom fontWeight={500}>Your Name*</Typography>
            <InputBase required fullWidth sx={{ border:'1px solid #ddd',p: "5px", borderRadius:"5px"}}placeholder="Email"/>
        </Box>
    )
}

const container = {
    border: '1px solid #ddd',
    padding: 2,
    mt: 3,
}
 
export default AboutCandidate;