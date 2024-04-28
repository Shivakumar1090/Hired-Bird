import { Box, Typography } from "@mui/material";

const Logo = () => {
    return ( 
        <Box>
            <Typography style={{fontWeight: 600,fontSize: '27px'}}>
                HIRED{" "} 
                <span style={{fontWeight: 200,color: '#6ED09B'}}>BIRD</span>
            </Typography>
            
        </Box>
     );
}
 
export default Logo;