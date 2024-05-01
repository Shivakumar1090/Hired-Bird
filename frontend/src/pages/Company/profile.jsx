import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import GoogleImg from "../../assets/icons/google.png";
import InputLabel from "../../components/InputLabel";
import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Companyprofile = () => {

    const fileInput = React.useRef();
    
    return ( 
        <Box>
            <Box component="main" sx={{ flexGrow: 1,margin: 'auto',width: '70%'}}>
                <Typography variant="h4" mb={3} >Your Profile</Typography>
                <Stack  spacing={3}>
                    <InputLabel 
                        label="Your's company name"
                        placeholder="Enter your company name"
                    />
                    <InputLabel 
                        label="Say about your company"
                        placeholder="Enter your company name"
                    />
                    <Stack direction="column" spacing={2}>
                        <Typography variant="label">Your company logo*</Typography>
                        <img src={GoogleImg} alt="" style={{width:'100px',height: '100px',objectFit: 'cover'}}/>
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            onClick={()=>fileInput.current.click()}
                            sx={{width: '200px'}}
                            startIcon={<UploadFileIcon />}
                        >
                            upload file
                        </Button>

                        <input 
                            ref={fileInput} 
                            type="file" 
                            style={{ display: 'none' }} 
                        />
                    </Stack>

                    <Button variant="contained">Save</Button>
                </Stack>
            </Box>
        </Box>
    );
}
 
export default Companyprofile;