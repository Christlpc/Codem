import {
  Container,
  Paper,
  Typography,
  Avatar,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaTruck, FaBoxes, FaClipboardCheck } from "react-icons/fa";
import { MdGroups, MdSecurity, MdSupportAgent } from "react-icons/md";

const features = [
  {
    title: "Déménagement clé en main",
    desc: "Un accompagnement de A à Z : emballage, transport, réinstallation.",
    icon: <FaTruck />,
  },
  {
    title: "Gestion centralisée",
    desc: "Un interlocuteur unique pour gérer votre projet efficacement.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Mobilité d’équipe optimisée",
    desc: "Réaménagements internes sans interruption de vos opérations.",
    icon: <MdGroups />,
  },
  {
    title: "Archivage sécurisé",
    desc: "Solutions de stockage physique ou numérique en toute confidentialité.",
    icon: <FaBoxes />,
  },
  {
    title: "Support dédié 7j/7",
    desc: "Assistance réactive pour toutes vos demandes avant, pendant et après.",
    icon: <MdSupportAgent />,
  },
  {
    title: "Confidentialité & sécurité",
    desc: "Transport sécurisé de vos documents et serveurs sensibles.",
    icon: <MdSecurity />,
  },
];

export default function Entreprises() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, backgroundColor: "#f9fafb" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Une offre pensée pour les entreprises modernes
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Codem vous accompagne dans tous vos projets de transfert, avec agilité et confidentialité.
          </Typography>
        </motion.div>

        {/* SCROLL HORIZONTAL */}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            pb: 2,
            "&::-webkit-scrollbar": { display: "none" }, // cacher la scrollbar
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ flex: "0 0 280px" }} // taille fixe des cartes
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: 64,
                    height: 64,
                    mb: 2,
                    fontSize: 30,
                  }}
                >
                  {f.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {f.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.desc}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Box textAlign="center" mt={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: 10,
                px: 5,
                py: 1.5,
                fontWeight: 600,
              }}
              href="#contact"
            >
              Demander un devis entreprise
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
