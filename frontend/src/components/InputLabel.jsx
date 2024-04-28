import { Box, InputBase, Typography } from "@mui/material";

const InputLabel = ({label,input,placeholder}) => {
    return ( 
        <Box>
            <Typography gutterBottom fontWeight={500}>{label}*</Typography>
            <InputBase 
                required 
                fullWidth 
                sx={{ border:'1px solid #ddd',p: "5px", borderRadius:"5px"}}
                placeholder={placeholder}
            />
        </Box>
     );
}
 
export default InputLabel;