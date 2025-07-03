import { motion } from 'framer-motion';
import { FaHome, FaBoxes, FaLaptop, FaTruckLoading } from 'react-icons/fa';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Services() {
  const theme = useTheme();

  const services = [
    {
      icon: <FaHome size={36} />,
      title: 'Déménagement local',
      description: 'Des solutions flexibles et économiques pour déménager votre logement sans stress.',
      to: '/demande-devis?type=particulier',
      delay: 0,
    },
    {
      icon: <FaTruckLoading  size={36} />,
      title: 'Planification logistique sur mesure',
      description: 'Des déménagements professionnels planifiés pour minimiser les interruptions.',
      to: '/demande-devis?type=entreprise',
      delay: 0.2,
    },
            {
      icon: <FaLaptop size={36} />,
      title: 'Gestion numérique',
      description: 'Suivi en ligne, devis rapide, et espace client pour tout centraliser facilement.',
      to: '/demande-devis',
      delay: 0.5,
    },
        {
      icon: <FaBoxes size={36} />,
      title: 'Emballage & matériel',
      description: 'Fourniture de cartons, protections et emballage de vos biens pour un transport sécurisé.',
      to: '/demande-devis',
      delay: 0.1,
    },

  ];

  return (
    <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Nos Services
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            maxWidth="sm"
            mx="auto"
          >
            Découvrez nos offres sur mesure pour les particuliers et les entreprises.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            mt: 6,
            pb: 2,
            "&::-webkit-scrollbar": { display: 'none' },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              style={{ flex: '0 0 300px' }} // taille fixe des cards
            >
              <MuiLink
                component={Link}
                to={service.to}
                underline="none"
                sx={{ display: 'block', height: '100%' }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 6,
                    height: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
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
                      fontSize: 40,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Paper>
              </MuiLink>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
