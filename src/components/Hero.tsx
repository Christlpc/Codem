import { motion } from 'framer-motion';
import { Box, Typography, useTheme, useMediaQuery, Container } from '@mui/material';

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'primary.main',
          py: { xs: 10, md: 16 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight="bold" gutterBottom>
              Déménagez en toute simplicité avec <span style={{ color: theme.palette.secondary.main }}>Codem</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typography variant="h6" color="text.secondary" paragraph>
              Trouvez des déménageurs fiables pour particuliers et entreprises.
            </Typography>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.div>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Hero;
