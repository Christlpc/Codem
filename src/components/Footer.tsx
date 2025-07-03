import React from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        component="footer"
        sx={{
          bgcolor: '#121212',
          color: '#e0e0e0',
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 0 },
          fontFamily: "'Inter', sans-serif",
          borderTop: '1px solid #333',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Logo + description + boutons */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/src/assets/logo.png"
                alt="Codem Logo"
                sx={{ height: 200, mb: 2 }}
              />
              <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 320, mb: 3 }}>
                Votre partenaire pour un déménagement simple et rapide.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#demenagez"
                  sx={{
                    textTransform: 'none',
                    borderRadius: '24px',
                    px: 3,
                    bgcolor: '#03a9f4',
                    '&:hover': { bgcolor: '#0288d1' },
                  }}
                >
                  Déménagez
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="#telecharger"
                  sx={{
                    textTransform: 'none',
                    borderRadius: '24px',
                    px: 3,
                    borderColor: '#03a9f4',
                    color: '#03a9f4',
                    '&:hover': {
                      bgcolor: '#03a9f4',
                      color: '#121212',
                      borderColor: '#03a9f4',
                    },
                  }}
                >
                  Télécharger l'appli
                </Button>
              </Box>
            </Grid>

            {/* Liens */}
            <Grid item xs={6} md={4}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                sx={{ color: '#03a9f4' }}
              >
                Liens utiles
              </Typography>
              <Box
                component="nav"
                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
              >
                {[
                  { label: 'Services', href: '#services' },
                  { label: 'Entreprises', href: '#entreprises' },
                  { label: 'Contact', href: '#contact' },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    underline="none"
                    sx={{
                      color: 'inherit',
                      '&:hover': { color: '#03a9f4', textDecoration: 'underline' },
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={6} md={4}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                sx={{ color: '#03a9f4' }}
              >
                Contact
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Email:{' '}
                <Link
                  href="mailto:contact@codem.app"
                  color="inherit"
                  underline="hover"
                >
                  contact@codem.app
                </Link>
              </Typography>
              <Typography variant="body2">
                Téléphone:{' '}
                <Link href="tel:+33123456789" color="inherit" underline="hover">
                  +242 06 190 24 19  +242 04 447 95 91
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Box mt={8} textAlign="center" sx={{ opacity: 0.5, fontSize: 12 }}>
            © 2025 Codem. Tous droits réservés.
          </Box>
        </Container>
      </Box>
    </motion.footer>
  );
};

export default Footer;
