import { Box, Button, FormLabel, Grid, InputBase, InputLabel, Stack, TextField, Typography } from "@mui/material";

const EducationOfCandidate = () => {
    return ( 
        <Box sx={container}>
            <Grid
                container
                spacing={2}
                justifyContent="space-between"
            >
                <Grid item sm={3.5}>
                    <Typography component="h1" variant="h6">Education</Typography>
                    <Typography variant="body2">What schools have you studied at?</Typography>
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
 
export default EducationOfCandidate;