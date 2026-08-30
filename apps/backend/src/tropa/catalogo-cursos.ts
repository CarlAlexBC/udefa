/**
 * Catálogo de cursos de tropa: escuela + nombre legible + logo, por curso.
 *
 * `codigo` DEBE coincidir exactamente con `Plantel.nombre` (así los sembró
 * `scripts/seed-temarios-tropa.ts`) — es la llave que une este catálogo
 * (versionado, vive en código) con las filas reales en la base.
 *
 * `logo` es el código de archivo en `apps/web/public/tropa/cursos/` (sin
 * extensión). Varios cursos hermanos comparten un mismo escudo a propósito
 * (ver docs/examen-tropa/README.md) — no es un hueco, así los hizo Carlo.
 * `logo: null` = todavía no tiene escudo propio; el frontend cae al escudo
 * de la escuela si existe uno en /planteles/, o a un ícono genérico.
 */

export interface CursoTropa {
  codigo: string;
  escuela: string;
  nombre: string;
  logo: string | null;
  /** Código del plantel de admisión (apps/web/public/planteles/) que sirve
   * de respaldo visual cuando el curso no tiene escudo propio. */
  escudoRespaldo: string | null;
}

export const CATALOGO_CURSOS: CursoTropa[] = [
  // ---- Escuela Militar de Clases de Sanidad ----
  { codigo: 'EMCS_Cso_F_S1_Snd_Es_2026', escuela: 'Escuela Militar de Clases de Sanidad', nombre: 'Formación de Sargentos 1/os.', logo: 'EMCS-FS', escudoRespaldo: null },
  { codigo: 'EMCS_Cso_F_S2_Snd__Es_2026', escuela: 'Escuela Militar de Clases de Sanidad', nombre: 'Formación de Sargentos 2/os.', logo: 'EMCS-FS', escudoRespaldo: null },

  // ---- Escuela Militar de Clases de Transmisiones ----
  { codigo: 'EMCT_F_S_1os_TRANS_2026', escuela: 'Escuela Militar de Clases de Transmisiones', nombre: 'Formación de Sargentos 1/os. · Transmisiones', logo: null, escudoRespaldo: 'EMT' },
  { codigo: 'EMCT_F_S_2os_TRANS_2026', escuela: 'Escuela Militar de Clases de Transmisiones', nombre: 'Formación de Sargentos 2/os. · Transmisiones', logo: null, escudoRespaldo: 'EMT' },

  // ---- Escuela Militar de Enfermería ----
  { codigo: 'EME_C_I_F_O_E_M_2026', escuela: 'Escuela Militar de Enfermería', nombre: 'C.I.F.O.E.M.', logo: 'EME-CIFOEM', escudoRespaldo: 'EME' },

  // ---- Escuela Militar de Ingeniería ----
  { codigo: 'EMI_ADM_EVLN_PROYEC_2026', escuela: 'Escuela Militar de Ingeniería', nombre: 'Administración y Evaluación de Proyectos', logo: 'EMI-AEP', escudoRespaldo: 'EMI' },
  { codigo: 'EMI_ING_AUTOMOTRIZ_2026', escuela: 'Escuela Militar de Ingeniería', nombre: 'Especialidad en Ingeniería Automotriz', logo: 'EMI-EIA', escudoRespaldo: 'EMI' },
  { codigo: 'EMI_ING_COSTOS_2026', escuela: 'Escuela Militar de Ingeniería', nombre: 'Especialidad en Ingeniería de Costos', logo: 'EMI-EIC', escudoRespaldo: 'EMI' },
  { codigo: 'EMI_SIST_CALIDAD_2026', escuela: 'Escuela Militar de Ingeniería', nombre: 'Especialidad en Sistemas de Calidad', logo: 'EMI-ESC', escudoRespaldo: 'EMI' },
  { codigo: 'EMI_ESP_TELEM__TICA_2026', escuela: 'Escuela Militar de Ingeniería', nombre: 'Especialidad en Telemática', logo: 'EMI-ET', escudoRespaldo: 'EMI' },
  { codigo: 'EMI_T_I_2026', escuela: 'Escuela Militar de Ingeniería', nombre: 'Especialidad en Tecnologías de la Información', logo: 'EMI-ETI', escudoRespaldo: 'EMI' },

  // ---- Escuela Militar de Mantenimiento y Abastecimiento ----
  { codigo: 'EMMA_F_A_I_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'Formación de Aviación · I.M.A.', logo: null, escudoRespaldo: 'EMMA' },
  { codigo: 'EMMA_F_O_F_A_A_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'Formación de Oficiales · F.A.A.A.', logo: null, escudoRespaldo: 'EMMA' },
  { codigo: 'EMMA_F_O_F_A_A_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'Formación de Oficiales · F.A.A.M.A.', logo: null, escudoRespaldo: 'EMMA' },
  { codigo: 'EMMA_F_O_F_A_E_E_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'Formación de Oficiales · F.A.E.E.A.', logo: null, escudoRespaldo: 'EMMA' },
  { codigo: 'EMMA_I_F_O_F_A_A_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'C.I.F.O.F.A. · F.A.A.A.', logo: 'EMMA-CIFOFA', escudoRespaldo: 'EMMA' },
  { codigo: 'EMMA_I_F_O_F_A_A_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'C.I.F.O.F.A. · F.A.A.M.A.', logo: 'EMMA-CIFOFA', escudoRespaldo: 'EMMA' },
  { codigo: 'EMMA_I_F_O_F_A_E_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', nombre: 'C.I.F.O.F.A. · F.A.E.M.A.', logo: 'EMMA-CIFOFA', escudoRespaldo: 'EMMA' },

  // ---- Escuela Militar de Materiales de Guerra ----
  { codigo: 'EMMG_F_S_1os_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', nombre: 'Formación de Sargentos 1/os.', logo: 'EMMG-FS', escudoRespaldo: 'EMMG' },
  { codigo: 'EMMG_F_S_2os_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', nombre: 'Formación de Sargentos 2/os.', logo: 'EMMG-FS', escudoRespaldo: 'EMMG' },
  { codigo: 'EMMG_MG_LIC_LOG_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', nombre: 'Licenciatura en Logística', logo: null, escudoRespaldo: 'EMMG' },
  { codigo: 'EMMG_MG_TEC_MANTO_I_2026', escuela: 'Escuela Militar de Materiales de Guerra', nombre: 'Técnico en Mantenimiento I', logo: 'EMMG-FOMGTMI', escudoRespaldo: 'EMMG' },
  { codigo: 'EMMG_Sgto_1o_M_I_2026', escuela: 'Escuela Militar de Materiales de Guerra', nombre: 'Sargento 1/o. M.I.', logo: null, escudoRespaldo: 'EMMG' },
  { codigo: 'EMMG_T_E_BALISTICA_2026', escuela: 'Escuela Militar de Materiales de Guerra', nombre: 'Técnico Especializado en Balística', logo: 'EMMG-TEB', escudoRespaldo: 'EMMG' },

  // ---- Escuela Militar de Oficiales de Sanidad ----
  { codigo: 'EMOS_C_I_F_O_S_T_U_M_2026', escuela: 'Escuela Militar de Oficiales de Sanidad', nombre: 'C.I.F.O.S. · T.U.M.', logo: null, escudoRespaldo: 'EMOS' },

  // ---- Escuela Militar de Transmisiones ----
  { codigo: 'EMT_F_O_TRANS_2026', escuela: 'Escuela Militar de Transmisiones', nombre: 'Formación de Oficiales · Transmisiones', logo: 'EMT-CFSBTTET', escudoRespaldo: 'EMT' },
  { codigo: 'EMT_TRANS_LIC_TICS_2026', escuela: 'Escuela Militar de Transmisiones', nombre: 'Licenciatura en T.I.C.S.', logo: null, escudoRespaldo: 'EMT' },

  // ---- Heroico Colegio Militar ----
  { codigo: 'HCM_CIFOA_A_B___2026', escuela: 'Heroico Colegio Militar', nombre: 'C.I.F.O.A. · Arma Blindada', logo: 'HCM-CIFOA', escudoRespaldo: 'HCM' },
  { codigo: 'HCM_CIFOA_CAB___2026', escuela: 'Heroico Colegio Militar', nombre: 'C.I.F.O.A. · Caballería', logo: 'HCM-CIFOA', escudoRespaldo: 'HCM' },
  { codigo: 'HCM_CIFOA_ZPDR___2026', escuela: 'Heroico Colegio Militar', nombre: 'C.I.F.O.A. · Zapadores', logo: 'HCM-CIFOA', escudoRespaldo: 'HCM' },
  { codigo: 'HCM_CIFOGN_2026', escuela: 'Heroico Colegio Militar', nombre: 'C.I.F.O.G.N.', logo: 'HCM-CIFOGN', escudoRespaldo: 'HCM' },
  { codigo: 'HCM_CIFOS_PM__2026', escuela: 'Heroico Colegio Militar', nombre: 'C.I.F.O.S. · Policía Militar', logo: 'HCM-CIFOSP', escudoRespaldo: 'HCM' },
  { codigo: 'HCM_HCMART_2026', escuela: 'Heroico Colegio Militar', nombre: 'C.I.F.O.A. · Artillería', logo: 'HCM-CIFOA', escudoRespaldo: 'HCM' },

  // ---- Escuela Militar de Tropas Especialistas de la F.A. ----
  { codigo: 'EMTEFA_F_S_1os_FAAA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 1/os. · F.A.A.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_1os_FAAMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 1/os. · F.A.A.M.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_1os_FAEEA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 1/os. · F.A.E.E.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_1os_FAEMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 1/os. · F.A.E.M.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_2os_FAAA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 2/os. · F.A.A.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_2os_FAAMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 2/os. · F.A.A.M.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_2os_FAEEA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 2/os. · F.A.E.E.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
  { codigo: 'EMTEFA_F_S_2os_FAEMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', nombre: 'Formación de Sargentos 2/os. · F.A.E.M.A.', logo: 'EMEFA-FS', escudoRespaldo: null },
];
