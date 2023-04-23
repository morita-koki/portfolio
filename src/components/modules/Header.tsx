import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// import Link from 'next/link'

import { animateScroll as scroll, scroller } from 'react-scroll';
const scrollToComponent = (componentId: string) => {
  scroller.scrollTo(componentId, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -50,
  });
};



type HeaderPorps = {
  sections: string[];
}

export const Header: React.FC<HeaderPorps> = (props) => {
  const { sections } = props;
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} position="fixed" sx={{ background: "rgba(255, 255, 255, 0.8)", height: "10vh" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={() => { handleCloseNavMenu(); scrollToComponent(section); }}>
                  <Typography textAlign="center" color="textPrimary">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => { handleCloseNavMenu(); scrollToComponent(section); }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography component="div" textAlign="center" color="textPrimary"
                  sx={{
                    fontFamily: "'Montserrat', sans-serif"
                  }}>{section}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}