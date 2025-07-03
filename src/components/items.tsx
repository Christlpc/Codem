// src/constants/items.ts
import React from 'react';
import {
  Weekend,              // canapé
  Bed,                  // lit
  ChairAlt,             // chaise/fauteuil
  TableBar,             // table
  Tv,                   // tv
  Kitchen,              // frigo
  LocalLaundryService,  // lave-linge
  Book,                 // bibliothèque/armoire
  Desk,                 // bureau/console
  Inventory2,           // commode
  StoreMallDirectory,   // étagère
  Light,                // lampe
  AcUnit,               // clim / ventilateur
  Restaurant,           // vaisselle
  Bathtub,              // baignoire
} from '@mui/icons-material';

export interface Item {
  name: string;
  label: string;
  category: string;
  icon: React.ReactNode;
}

export const ITEMS: Item[] = [
  { name: 'canape',    label: 'Canapé',            category: 'Salon',     icon: <Weekend fontSize="large"/> },
  { name: 'lit',       label: 'Lit double',        category: 'Chambre',   icon: <Bed fontSize="large"/> },
  { name: 'fauteuil',  label: 'Fauteuil',          category: 'Salon',     icon: <ChairAlt fontSize="large"/> },
  { name: 'table',     label: 'Table à manger',    category: 'Cuisine',   icon: <TableBar fontSize="large"/> },
  { name: 'chaise',    label: 'Chaise',            category: 'Cuisine',   icon: <ChairAlt fontSize="large"/> },
  { name: 'tv',        label: 'Télévision',        category: 'Salon',     icon: <Tv fontSize="large"/> },
  { name: 'frigo',     label: 'Réfrigérateur',     category: 'Cuisine',   icon: <Kitchen fontSize="large"/> },
  { name: 'laveLinge', label: 'Lave-linge',        category: 'Buanderie', icon: <LocalLaundryService fontSize="large"/> },
  { name: 'armoire',   label: 'Armoire / bibliothèque', category: 'Chambre', icon: <Book fontSize="large"/> },
  { name: 'bureau',    label: 'Bureau',            category: 'Bureau',    icon: <Desk fontSize="large"/> },
  { name: 'commode',   label: 'Commode',           category: 'Chambre',   icon: <Inventory2 fontSize="large"/> },
  { name: 'etagere',   label: 'Étagère',           category: 'Salon',     icon: <StoreMallDirectory fontSize="large"/> },
  { name: 'lampe',     label: 'Lampe',             category: 'Tous',      icon: <Light fontSize="large"/> },
  { name: 'ventilo',   label: 'Climatiseur / Ventilateur', category: 'Tous', icon: <AcUnit fontSize="large"/> },
  { name: 'vaisselle', label: 'Service vaisselle', category: 'Cuisine',   icon: <Restaurant fontSize="large"/> },
  { name: 'baignoire', label: 'Baignoire',         category: 'Salle de bain', icon: <Bathtub fontSize="large"/> },
];
