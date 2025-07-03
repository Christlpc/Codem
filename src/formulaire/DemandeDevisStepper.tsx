// src/components/DevisStepper.tsx
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Badge,
  Container,
  IconButton,
  useTheme,
  Autocomplete,
  MenuItem,
  Paper
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ITEMS, type Item } from "../components/items";


// Exemple de ITEMS si tu n’as pas encore créé items.ts
// (Supprime ceci si tu utilises déjà ITEMS ailleurs)
const fallbackItems = [
  { name: "sofa", label: "Canapé", category: "Salon", icon: "🛋️" },
  { name: "bed", label: "Lit", category: "Chambre", icon: "🛏️" },
  { name: "tv", label: "Télévision", category: "Salon", icon: "📺" },
];
const ITEMS_SAFE = ITEMS || fallbackItems;


// Validation schema
const schema = yup.object({
  departureAddress: yup.string().required(),
  arrivalAddress: yup.string().required(),
  date: yup.string().required(),
  housingType: yup.string().required(),
  hasFloors: yup.boolean(),
  floor: yup.number().nullable(),
  hasElevator: yup.boolean(),
  volume: yup.string().required(),
  items: yup
    .object(
      ITEMS_SAFE.reduce((acc, item) => {
        acc[item.name] = yup.number().min(0).required();
        return acc;
      }, {} as Record<string, yup.NumberSchema>)
    )
    .required(),
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  additionalInfo: yup.string().nullable()
});

type FormData = yup.InferType<typeof schema>;

const steps = ["Adresses", "Logement", "Objets", "Contact"] as const;

const stepFields: Record<number, (keyof FormData)[]> = {
  0: ["departureAddress", "arrivalAddress", "date"],
  1: ["housingType", "hasFloors", "floor", "hasElevator", "volume"],
  2: ITEMS_SAFE.map(
    i => (`items.${i.name}` as unknown) as keyof FormData
  ),
  3: ["fullName", "email", "phone"]
};

export default function DevisStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [search, setSearch] = useState("");

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      departureAddress: "",
      arrivalAddress: "",
      date: "",
      housingType: "",
      hasFloors: false,
      floor: null,
      hasElevator: false,
      volume: "",
      items: ITEMS_SAFE.reduce((acc, i) => ({ ...acc, [i.name]: 0 }), {}),
      fullName: "",
      email: "",
      phone: "",
      additionalInfo: ""
    }
  });

  const { control, handleSubmit, setValue, getValues, trigger, watch } = methods;
  const hasFloors = watch("hasFloors");

  const onSubmit = async (data: FormData) => {
    await axios.post("/api/devis/submit", data);
    alert("Demande envoyée 😊");
    setActiveStep(0);
    methods.reset();
  };

  const handleNext = async () => {
    const valid = await trigger(stepFields[activeStep] as any);
    if (valid) setActiveStep(prev => prev + 1);
  };

  const handleBack = () => setActiveStep(prev => prev - 1);

  const filtered = ITEMS_SAFE.filter(i =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );

  const byCategory = filtered.reduce((acc: Record<string, Item[]>, i) => {
    (acc[i.category] ||= []).push(i);
    return acc;
  }, {});

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {["departureAddress", "arrivalAddress", "date"].map(name => (
                <Grid item xs={12} key={name}>
                  <Controller
                    name={name as keyof FormData}
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type={name === "date" ? "date" : "text"}
                        label={{
                          departureAddress: "Adresse de départ",
                          arrivalAddress: "Adresse d’arrivée",
                          date: "Date du déménagement"
                        }[name]}
                        fullWidth
                        InputLabelProps={name === "date" ? { shrink: true } : undefined}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        );

      case 1:
        return (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="housingType"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      select
                      label="Type de logement"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    >
                      {[
                        "Studio",
                        "chambre salon",
                        "chambre salon douche/toilette",
                        "chambre salon cuisine douche/toilette",
                        "2 chambres salon",
                        "2 chambres salon cuisine douche/toilette",
                        "2 chambres salon douche/toilette",
                        "3 chambres salon cuisine douche/toilette"
                      ].map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="hasFloors"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label="Le logement est-il à l'étage ?"
                    />
                  )}
                />
              </Grid>

              {hasFloors && (
                <>
                  <Grid item xs={6}>
                    <Controller
                      name="floor"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          label="Numéro d’étage"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="hasElevator"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          control={<Checkbox {...field} checked={field.value} />}
                          label="Ascenseur disponible"
                        />
                      )}
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <Controller
                  name="volume"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      select
                      label="Volume approximatif (m³)"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    >
                      {[
                        "10-25",
                        "25-35",
                        "35-60",
                        "60-75",
                        "75-85",
                        "85-100"
                      ].map(v => (
                        <MenuItem key={v} value={v}>
                          {v}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        );

      case 2:
        return (
          <Box>
            <Autocomplete
              freeSolo
              options={ITEMS_SAFE.map(i => i.label)}
              onInputChange={(_, v) => setSearch(v)}
              renderInput={params => (
                <TextField {...params} label="Rechercher un objet" fullWidth />
              )}
              sx={{ mb: 3 }}
            />
            {Object.entries(byCategory).map(([cat, items]) => (
              <Paper key={cat} elevation={2} sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {cat}
                </Typography>
                <Grid container spacing={2}>
                  {items.map(item => {
                    const count = getValues(`items.${item.name}`);
                    return (
                      <Grid item xs={6} sm={4} key={item.name} textAlign="center">
                        <Box fontSize={32}>{item.icon}</Box>
                        <Typography>{item.label}</Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
                          <IconButton
                            onClick={() =>
                              setValue(
                                `items.${item.name}`,
                                Math.max(0, count - 1)
                              )
                            }
                          >
                            <Remove />
                          </IconButton>
                          <Badge badgeContent={count} color="primary" sx={{ mx: 1 }} />
                          <IconButton
                            onClick={() =>
                              setValue(`items.${item.name}`, count + 1)
                            }
                          >
                            <Add />
                          </IconButton>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Paper>
            ))}
          </Box>
        );

      case 3:
        return (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {["fullName", "email", "phone", "additionalInfo"].map(name => (
                <Grid item xs={12} key={name}>
                  <Controller
                    name={name as keyof FormData}
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label={{
                          fullName: "Nom complet",
                          email: "Email",
                          phone: "Téléphone",
                          additionalInfo: "Informations complémentaires"
                        }[name]}
                        type={name === "email" ? "email" : "text"}
                        multiline={name === "additionalInfo"}
                        rows={name === "additionalInfo" ? 3 : 1}
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Déménagez maintenant
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderStep()}
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Retour
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained">
                Envoyer
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained">
                Suivant
              </Button>
            )}
          </Box>
        </form>
      </FormProvider>
    </Container>
  );
}
