import { Box, Button, Paper, Stack, Toolbar, Typography } from "@mui/material";
import InputLabel from "../../components/InputLabel";

const AddJob = () => {
    return ( 
        <Box sx={{background: 'rgba(110, 208, 155,0.3)',height: '100vh'}}>
            <Toolbar />
            <Box component={Paper} elevation={4} sx={{width: '60%',margin: 'auto',p:4,}}>
                <Typography variant="h4" mb={3} >Create a new job post</Typography>
                <Stack  spacing={3}>
                    <InputLabel 
                        label="Job Title"
                        placeholder="Enter your company name"
                    />
                    <InputLabel 
                        label="Say about your company"
                        placeholder="Enter your company name"
                    />
                    <InputLabel
                        label="Required skills"
                    />
                    

                    <Button variant="contained">Save</Button>
                </Stack>
            </Box>
        </Box>
    );
}
 
export default AddJob;