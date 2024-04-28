import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <Box sx={container}>
            
            <Grid container alignContent="center" justifyContent="center" component="main" sx={{ height: '80vh',width: '80%',margin: 'auto'}}>
                <Grid
                    component={Paper} 
                    elevation={6} 
                    square
                    item
                    xs={false}
                    sm={4}
                    md={4}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?interviews)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">Sign Up</Typography>
                        <Box component="form" noValidate  sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 ,color: '#fff'}}
                                color="secondary"
                            >
                                Sign up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" style={{textDecoration: 'underline'}}>
                                        <Typography>Forgot Password</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        <Typography>{"Have an account? Sign In"}</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

const container = {
    background: '#EDF3F5',
    height: '90vh',
}
export default Signup;