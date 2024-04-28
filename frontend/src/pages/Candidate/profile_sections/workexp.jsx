import { Box, Button, FormLabel, Grid, InputBase, InputLabel, Stack, TextField, Typography } from "@mui/material";

const WorkExpCandidate = () => {
    return ( 
        <Box sx={container}>
            <Grid
                container
                spacing={2}
                justifyContent="space-between"
            >
                <Grid item sm={3.5}>
                    <Typography component="h1" variant="h6">Your Work Experience</Typography>
                    <Typography variant="body2">What other positions have you held?</Typography>
                </Grid>
                <Grid item sm={8}>
                    <Box>
                        <Stack spacing={2}>
                            <InputTemplate />
                            <InputTemplate />
                            <InputTemplate />
                            <InputTemplate />

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
 
export default WorkExpCandidate;