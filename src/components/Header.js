import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { DashboardRounded, Lock, Logout } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

const Header = () => {

  const logout = () => {
  };

  const login = () => {
  };

  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setLoggedIn(true);
  },[]);

  return (
    <AppBar>
      <Grid container>
      <Container maxWidth="xm">
        <Toolbar disableGutters variant='dense'>
        <Grid item xs={9}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >            
          RP MUI
          </Typography>
          {loggedIn && <Box>
            <Button
              key="Dashboard"
              sx={{ color: 'white', textTransform: 'none' }}
            >
              <DashboardRounded />
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant='body2' marginLeft={1}>Dashboard</Typography>
              </Link>
            </Button>
            </Box>}
          </Box>
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
          {loggedIn && 
            <Box>
              <Typography variant='body2' display="inline" marginRight={1}>Hello, {"Punch"}</Typography>            
              <Button
                sx={{ color: [red[500]], textTransform: 'none' }}
                variant="contained"
                startIcon={<Logout />}
                onClick={event => {
                  logout();
                }}
              >Logout
              </Button>
            </Box>
          }
      {!loggedIn && 
            <Box>
            <Button
              sx={{ textTransform: 'none' }}
              color="secondary"
              variant="contained"
              startIcon={<Lock />}
              onClick={() => login()}
            >Login
            </Button>
            </Box>
          }
          </Grid>
        </Toolbar>
      </Container>
      </Grid>
    </AppBar>
  );
};
export default Header;
