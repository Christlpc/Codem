import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeaderProps {
  scrollToHero: () => void;
  scrollToServices: () => void;
  scrollToEntreprises: () => void;
  scrollToContact: () => void;
  scrollToDemandeDevisStepper: () => void;
}

const Header = ({ scrollToHero, scrollToServices, scrollToEntreprises, scrollToContact, scrollToDemandeDevisStepper }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: 'Accueil', action: scrollToHero },
    { label: 'Services', action: scrollToServices },
    { label: 'Entreprises', action: scrollToEntreprises },
    { label: 'Contact', action: scrollToContact },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={item.action}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box textAlign="center" mt={2}>
          <Button variant="contained" color="secondary" sx={{ borderRadius: '999px' }}>
            Télécharger l'app
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="fixed" color="default" elevation={4}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src="/src/assets/logo.png" alt="Codem Logo" sx={{ height: 48 }} />

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {navItems.map((item, index) => (
                <Button key={index} color="primary" onClick={item.action}>
                  {item.label}
                </Button>
              ))}
              <Button   onClick={scrollToDemandeDevisStepper}  variant="contained" color="secondary" sx={{ borderRadius: '999px' }}>
                Déménagez maintenant
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;
