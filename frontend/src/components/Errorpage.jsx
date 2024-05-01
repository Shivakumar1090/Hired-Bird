import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
    return ( 
        <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',height: '90vh'}}>
            <Typography variant="h2" fontWeight={500} gutterBottom>Oops! Something went wrong</Typography>
            <Typography>Back to home</Typography>
        </Box>
    );
}
 
export default ErrorPage;