import { motion } from 'framer-motion';
import { FaCheck, FaSearch, FaBolt } from 'react-icons/fa';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';

const avantages = [
  {
    icon: <FaCheck size={40} />,
    title: 'Fiabilité',
    description: 'Déménageurs vérifiés par notre équipe.',
    delay: 0,
  },
  {
    icon: <FaSearch size={40} />,
    title: 'Transparence',
    description: 'Prix clairs et devis gratuits en ligne.',
    delay: 0.2,
  },
  {
    icon: <FaBolt size={40} />,
    title: 'Rapidité',
    description: 'Réservez votre déménagement en quelques clics.',
    delay: 0.4,
  },
];

function Avantages() {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Pourquoi choisir Codem ?
          </Typography>
        </motion.div>

        <Grid container spacing={4} mt={4} justifyContent="center">
          {avantages.map(({ icon, title, description, delay }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 6,
                    minHeight: 260,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Avantages;
