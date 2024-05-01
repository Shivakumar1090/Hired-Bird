import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <Box component={Link} to="/" cursor="pointer" sx={{textDecoration: 'none'}}>
            <Typography style={{fontWeight: 600,fontSize: '27px',zIndex: 1000}}>
                HIRED{" "} 
                <span style={{fontWeight: 200,color: '#6ED09B'}}>BIRD</span>
            </Typography>
            
        </Box>
     );
}
 
export default Logo;