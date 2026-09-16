/* =================================================================
   PORTAL DE PRÁCTICAS PROFESIONALES - UNIVERSIDAD PRIVADA DOMINGO SAVIO (UPDS)
   Lógica de Convocatorias, Simulación Microsoft Entra ID y Postulaciones
   ================================================================= */

/* =================================================================
   1. CONVOCATORIAS DE PRÁCTICAS PROFESIONALES (UPDS)
   ================================================================= */
const UPDS_PRACTICAS = [
  {
    id: "PRAC-001",
    institution: "Banco Unión S.A. - División de Innovación y Banca Digital",
    repLegal: "Lic. Fernando Gómez Terán",
    rubro: "Banca y Finanzas",
    tipoConvenio: "Convenio Interinstitucional Vigente",
    modality: "Híbrido",
    horario: "Turno Mañana o Tarde (A elección)",
    location: "Sede Santa Cruz (Edif. Centro Financiero)",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 5,
    cuposDisponibles: 3,
    email: "pasantias.ti@bancounion.com.bo",
    phone: "+591 3 3362200",
    vigencia: "Diciembre 2027",
    description: "Práctica en desarrollo de módulos para banca móvil, pruebas de estrés y seguridad en APIs bancarias, y administración de bases de datos Oracle / SQL Server.",
    requirements: [
      "Estudiante regular UPDS de Ingeniería de Sistemas desde 6to semestre.",
      "Conocimientos en bases de datos relacionales (SQL), APIs REST o Java/C#.",
      "Disponibilidad de 4 horas diarias (mañana o tarde)."
    ]
  },
  {
    id: "PRAC-002",
    institution: "TechLabs Soluciones Digitales S.R.L. (Software Factory)",
    repLegal: "Ing. Mariana Cossio Vargas",
    rubro: "Tecnología e Información",
    tipoConvenio: "Convenio Marco de Prácticas",
    modality: "100% Remoto",
    horario: "Turno Mañana o Tarde (Flexible)",
    location: "Santa Cruz / Nacional (Virtual)",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 a 4 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 6,
    cuposDisponibles: 4,
    email: "talento.dev@techlabs.io",
    phone: "+591 3 3558899",
    vigencia: "Octubre 2026",
    description: "Desarrollo de software en proyectos reales de exportación. Frontend en React/TypeScript, backend en Node.js, control de versiones con GitHub y metodologías ágiles Scrum.",
    requirements: [
      "Estudiante regular UPDS de Ingeniería de Sistemas.",
      "Manejo de JavaScript / TypeScript, Git y nociones de backend.",
      "Horarios flexibles compatibles con tus materias universitarias."
    ]
  },
  {
    id: "PRAC-003",
    institution: "Cervecería Boliviana Nacional (CBN) - Sistemas & TI Industrial",
    repLegal: "Ing. Roberto Alarcón Paz",
    rubro: "Industrial y Manufactura",
    tipoConvenio: "Convenio Empresarial Estratégico",
    modality: "Presencial",
    horario: "Turno Mañana (08:00 - 12:30)",
    location: "Parque Industrial, Santa Cruz",
    sede: "Santa Cruz",
    horas: 400,
    duracion: "4 horas diarias • 4 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 4,
    cuposDisponibles: 2,
    email: "practicas.sistemas@cbn.bo",
    phone: "+591 3 3465000",
    vigencia: "Enero 2028",
    description: "Soporte y configuración en módulos del sistema ERP SAP, automatización de captura de datos en líneas de producción y desarrollo de tableros de BI.",
    requirements: [
      "Estudiante UPDS de Ingeniería de Sistemas desde 7mo semestre.",
      "Interés en ERPs, bases de datos y analítica de datos en planta.",
      "Transporte y almuerzo institucional cubierto en planta."
    ]
  },
  {
    id: "PRAC-004",
    institution: "Telecel S.A. (Tigo Bolivia) - Cloud Infrastructure & DevOps",
    repLegal: "Ing. Javier Morales Pinto",
    rubro: "Tecnología e Información",
    tipoConvenio: "Convenio Interinstitucional UPDS",
    modality: "Híbrido",
    horario: "Turno Tarde (14:00 - 18:00)",
    location: "Doble Vía La Guardia, Santa Cruz",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 4,
    cuposDisponibles: 3,
    email: "talentoti@tigo.net.bo",
    phone: "+591 3 3180000",
    vigencia: "Noviembre 2027",
    description: "Monitoreo de servidores Linux en la nube (AWS/Azure), soporte a redes corporativas, automatización de tareas con Python y despliegue de microservicios.",
    requirements: [
      "Estudiante de Ingeniería de Sistemas desde 6to semestre.",
      "Conocimientos básicos de redes TCP/IP, Linux y scripting.",
      "Capacidad de trabajo en equipo y resolución de incidencias técnicas."
    ]
  },
  {
    id: "PRAC-005",
    institution: "Farmacias Chávez S.A. - Dpto. de Desarrollo y TI",
    repLegal: "Lic. Leonardo Chávez Barba",
    rubro: "Comercio y Retail",
    tipoConvenio: "Convenio Marco Vigente",
    modality: "Presencial",
    horario: "Turno Mañana o Tarde",
    location: "Av. San Martín, Equipetrol, Santa Cruz",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 3,
    cuposDisponibles: 2,
    email: "sistemas@farmaciaschavez.com.bo",
    phone: "+591 3 3421100",
    vigencia: "Marzo 2027",
    description: "Desarrollo de módulos para el sistema POS de sucursales, facturación electrónica SIAT, optimización de consultas SQL Server y aplicaciones móviles.",
    requirements: [
      "Estudiante UPDS de Ingeniería de Sistemas.",
      "Manejo de SQL Server intermedio y lenguaje C# (.NET) o JavaScript.",
      "Excelente actitud proactiva y orientación a soluciones."
    ]
  },
  {
    id: "PRAC-006",
    institution: "Sofía LTDA. - Innovación Tecnológica & Business Intelligence",
    repLegal: "Ing. Carlos Mario Anglarill",
    rubro: "Industrial y Manufactura",
    tipoConvenio: "Convenio Corporativo UPDS",
    modality: "Híbrido",
    horario: "Turno Mañana (08:30 - 12:30)",
    location: "4to Anillo, Zona Norte, Santa Cruz",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 4,
    cuposDisponibles: 2,
    email: "ti.reclutamiento@sofia.com.bo",
    phone: "+591 3 3448000",
    vigencia: "Agosto 2027",
    description: "Extracción y modelado de datos ETL, creación de dashboards interactivos en Power BI, análisis de rendimiento y soporte a sistemas de logística agroindustrial.",
    requirements: [
      "Estudiante regular de Ingeniería de Sistemas desde 7mo semestre.",
      "Manejo de Power BI, Excel avanzado y nociones de Python/SQL.",
      "Interés en ciencia de datos e inteligencia de negocios."
    ]
  },
  {
    id: "PRAC-007",
    institution: "Jalasoft / Jala Tech - Testing Automatizado & Calidad de Software (QA)",
    repLegal: "Ing. Jorge Lopez Pacheco",
    rubro: "Tecnología e Información",
    tipoConvenio: "Convenio Específico de Prácticas",
    modality: "100% Remoto",
    horario: "Turno Mañana o Tarde (Flexible)",
    location: "Nacional (Virtual)",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 a 4 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 8,
    cuposDisponibles: 5,
    email: "internships@jalasoft.com",
    phone: "+591 4 4140000",
    vigencia: "Diciembre 2028",
    description: "Formación e integración en equipos de pruebas automatizadas con Cypress y Selenium. Diseño de planes de prueba, reporte de bugs y testing funcional.",
    requirements: [
      "Estudiante UPDS de Ingeniería de Sistemas.",
      "Ganas de especializarse en QA Engineering y desarrollo.",
      "Pensamiento analítico y buen manejo de lógica de programación."
    ]
  },
  {
    id: "PRAC-008",
    institution: "Droguería INTI S.A. - Infraestructura de Redes & Seguridad",
    repLegal: "Ing. Christian Schilling",
    rubro: "Salud y Educación",
    tipoConvenio: "Convenio Marco UPDS",
    modality: "Presencial",
    horario: "Turno Mañana (08:00 - 12:00)",
    location: "Parque Industrial Norte, Santa Cruz",
    sede: "Santa Cruz",
    horas: 360,
    duracion: "4 horas diarias • 3 meses",
    careers: ["Ingeniería de Sistemas"],
    cuposTotales: 3,
    cuposDisponibles: 2,
    email: "sistemas.scz@inti.com.bo",
    phone: "+591 3 3462000",
    vigencia: "Septiembre 2027",
    description: "Administración de Directorio Activo (Active Directory), soporte a servidores corporativos, políticas de respaldo y seguridad perimetral de red.",
    requirements: [
      "Estudiante de Ingeniería de Sistemas (materias de redes/sistemas operativos cursadas).",
      "Conocimiento de cableado estructurado, switches y Windows Server.",
      "Disponibilidad de horario matutino."
    ]
  }
];

/* =================================================================
   2. SESIÓN INTEGRADA SAADS (UPDS) - TOKEN PAYLOAD
   ================================================================= */
const SAADS_TOKEN_SESSION = {
  nameid: "104077",
  unique_name: "Carlos Daniel Cuellar",
  email: "sc.carlos.cuellar.g@upds.net.bo",
  sedeId: "1",
  sede: "Santa Cruz",
  tenantId: "SAADSSC",
  cargo: "estudiante",
  career: "Ingeniería de Sistemas",
  semestre: "8vo Semestre",
  avatarInitials: "CD"
};

let currentUser = { ...SAADS_TOKEN_SESSION };
let practicasList = [...UPDS_PRACTICAS];
let selectedPracticaForModal = null;

/* =================================================================
   3. ESTADOS DEL CICLO DE VIDA DE PRÁCTICAS (UPDS)
   ================================================================= */
const UPDS_APPLICATION_STAGES = {
  REGISTRADA: {
    key: "REGISTRADA",
    stepIndex: 1,
    badgeLabel: "Postulación Registrada",
    shortLabel: "Registrada",
    title: "Postulación Registrada en SAADS",
    color: "blue",
    badgeBg: "bg-blue-100 text-blue-900 border-blue-300",
    dotClass: "bg-blue-600",
    headerPillClass: "bg-blue-100 text-blue-900 border-blue-300",
    headerDotClass: "bg-blue-600",
    desc: "Tu postulación ha sido enviada con éxito. En cola de recepción para verificación curricular por la Dirección de Carrera."
  },
  EN_REVISION: {
    key: "EN_REVISION",
    stepIndex: 2,
    badgeLabel: "En Revisión por Carrera",
    shortLabel: "En Revisión",
    title: "En Revisión por Coordinador de Carrera",
    color: "amber",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    dotClass: "bg-amber-500 animate-pulse",
    headerPillClass: "bg-amber-100 text-amber-900 border-amber-300",
    headerDotClass: "bg-amber-500 animate-pulse",
    desc: "El Coordinador de la Carrera de Ingeniería de Sistemas está validando tu avance curricular (8vo semestre) para emitir la Carta Oficial de Presentación."
  },
  CARTA_EMITIDA: {
    key: "CARTA_EMITIDA",
    stepIndex: 3,
    badgeLabel: "Carta Oficial Emitida",
    shortLabel: "Carta Emitida",
    title: "Carta Oficial de Presentación Emitida",
    color: "indigo",
    badgeBg: "bg-indigo-100 text-indigo-900 border-indigo-300",
    dotClass: "bg-indigo-600",
    headerPillClass: "bg-indigo-100 text-indigo-900 border-indigo-300",
    headerDotClass: "bg-indigo-600",
    desc: "La Dirección Académica UPDS ha emitido tu Carta Oficial de Presentación firmada. Ya puedes descargarla en formato digital o retirarla en ventanilla de Sede Santa Cruz."
  },
  ACEPTADA_EMPRESA: {
    key: "ACEPTADA_EMPRESA",
    stepIndex: 4,
    badgeLabel: "Aceptada por Empresa",
    shortLabel: "Aceptada",
    title: "Aceptación Confirmada por la Empresa",
    color: "teal",
    badgeBg: "bg-teal-100 text-teal-900 border-teal-300",
    dotClass: "bg-teal-600",
    headerPillClass: "bg-teal-100 text-teal-900 border-teal-300",
    headerDotClass: "bg-teal-600",
    desc: "La empresa receptora confirmó la recepción de la carta, aceptó tu vinculación y asignó tutor empresarial. Plan de trabajo de 360 horas validado."
  },
  EN_CURSO: {
    key: "EN_CURSO",
    stepIndex: 5,
    badgeLabel: "Práctica en Curso (360 hrs)",
    shortLabel: "En Curso (360h)",
    title: "Práctica Profesional en Curso (360 hrs)",
    color: "emerald",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    dotClass: "bg-emerald-500 animate-pulse",
    headerPillClass: "bg-emerald-100 text-emerald-900 border-emerald-300",
    headerDotClass: "bg-emerald-500 animate-pulse",
    desc: "Estás desarrollando tus 360 horas de práctica profesional institucional. Recuerda registrar tus bitácoras de actividades para el docente tutor UPDS."
  },
  CONCLUIDA: {
    key: "CONCLUIDA",
    stepIndex: 6,
    badgeLabel: "Práctica Acreditada",
    shortLabel: "Acreditada",
    title: "Práctica Acreditada en Kardex SAADS",
    color: "emerald",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    dotClass: "bg-emerald-600",
    headerPillClass: "bg-emerald-100 text-emerald-900 border-emerald-300",
    headerDotClass: "bg-emerald-600",
    desc: "¡Felicitaciones! Has completado satisfactoriamente tus 360 horas de práctica profesional. La acreditación oficial ya se encuentra registrada en tu kardex académico."
  },
  OBSERVADA: {
    key: "OBSERVADA",
    stepIndex: 2,
    badgeLabel: "Observada / Subsanar",
    shortLabel: "Observada",
    title: "Solicitud con Observación Académica",
    color: "rose",
    badgeBg: "bg-rose-100 text-rose-900 border-rose-300",
    dotClass: "bg-rose-500 animate-pulse",
    headerPillClass: "bg-rose-100 text-rose-900 border-rose-300",
    headerDotClass: "bg-rose-500 animate-pulse",
    desc: "La Dirección de Carrera ha observado tu postulación por incompatibilidad de horario o documentación faltante. Comunícate con Coordinación para subsanar."
  }
};

// Trámite Único del Estudiante (El estudiante no puede tener más de una solicitud simultánea)
let currentApplication = {
  id: "SOL-8092",
  practicaId: "PRAC-001",
  type: "CONVOCATORIA_CONVENIO",
  institution: "Banco Unión S.A. - División de Innovación y Banca Digital",
  repLegal: "Lic. Fernando Gómez Terán",
  rubro: "Banca y Finanzas",
  horas: 360,
  horario: "Turno Mañana o Tarde (A elección)",
  location: "Sede Santa Cruz (Edif. Centro Financiero)",
  date: "14/09/2026",
  statusKey: "REGISTRADA",
  observacion: null
};

/* =================================================================
   4. PASARELA MULTI-PASO DE PRÁCTICA PROFESIONAL (ESTRUCTURA VISUAL)
   ================================================================= */
const PASARELA_STEPS = [
  { step: 1, key: "POSTULACION", label: "Postulación", name: "1. Postulación" },
  { step: 2, key: "REVISION", label: "Revisión", name: "2. Revisión de Postulación" },
  { step: 3, key: "ORDEN_COBRO", label: "Orden de Cobro", name: "3. Orden de Cobro" },
  { step: 4, key: "EN_CURSO", label: "En Curso", name: "4. En Curso (360h)" },
  { step: 5, key: "FINALIZADO", label: "Finalizado", name: "5. Finalizado" }
];

let currentPasarelaStep = 1;

function setPasarelaStep(stepNum) {
  currentPasarelaStep = stepNum;
  if (currentApplication) {
    if (stepNum === 1) currentApplication.statusKey = "REGISTRADA";
    else if (stepNum === 2) currentApplication.statusKey = "EN_REVISION";
    else if (stepNum === 3) currentApplication.statusKey = "CARTA_EMITIDA";
    else if (stepNum === 4) currentApplication.statusKey = "EN_CURSO";
    else if (stepNum === 5) currentApplication.statusKey = "CONCLUIDA";
  }
  renderPasarela();
}

function downloadFormularioApertura() {
  showToast("📄 Descargando Formulario Oficial de APERTURA DE PRÁCTICA UPDS (PDF)...", "success");
}

function downloadFormularioFinalizacion() {
  showToast("📄 Descargando FORMULARIO DE FINALIZACIÓN DE PRÁCTICA UPDS (PDF)...", "success");
}

function downloadDocumentoNotaFinal() {
  showToast("🎓 Descargando Certificado Oficial y Acta de Acreditación con NOTA FINAL (98/100)...", "success");
}

function submitDocsApertura() {
  showToast("✓ Documentos de Apertura enviados a la Dirección de Carrera.", "success");
  setPasarelaStep(2);
}

function submitInformeFinal() {
  showToast("✓ Informe Final y Formulario de Finalización entregados con éxito.", "success");
  setPasarelaStep(5);
}

function renderPasarela() {
  const container = document.getElementById('pasarela-container');
  if (!container || !currentApplication) return;

  const isSuggested = currentApplication.type === "EMPRESA_SUGERIDA";
  const item = practicasList.find(c => c.id === currentApplication.practicaId || c.institution === currentApplication.institution) || {
    institution: currentApplication.institution,
    rubro: currentApplication.rubro,
    horas: currentApplication.horas,
    horario: currentApplication.horario,
    location: currentApplication.location,
    repLegal: currentApplication.repLegal
  };

  let stepContentHtml = "";

  // -------------------------------------------------------------
  // PASO 1: POSTULACIÓN
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // PASO 1: POSTULACIÓN
  // -------------------------------------------------------------
  if (currentPasarelaStep === 1) {
    stepContentHtml = `
      <div class="space-y-4 animate-in fade-in duration-200">
        <!-- Ficha de Datos Institucionales de la Postulación -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3">
            <div>
              <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Institución Postulada</span>
              <h4 class="text-lg sm:text-2xl font-black text-slate-900 leading-snug">${currentApplication.institution}</h4>
              <p class="text-xs text-slate-500 mt-0.5">${currentApplication.rubro} • Tutor / Rep: <strong>${currentApplication.repLegal}</strong></p>
            </div>
            <div class="flex sm:flex-col items-center sm:items-end justify-between gap-1 text-right">
              <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-100 text-[#003876] border border-blue-200 shrink-0">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                Paso 1: Postulación
              </span>
              <span class="text-[11px] sm:text-xs text-slate-400 block">Código: <strong>${currentApplication.id}</strong></span>
            </div>
          </div>

          <!-- Metadatos Clave en Grid de 3 pastillas -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
            <div class="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Horas Académicas</span>
              <span class="text-xs sm:text-sm font-bold text-slate-800">${currentApplication.horas} Horas (8vo Semestre)</span>
            </div>
            <div class="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Horario de Trabajo</span>
              <span class="text-xs sm:text-sm font-bold text-slate-800">${currentApplication.horario}</span>
            </div>
            <div class="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Sede Universitaria</span>
              <span class="text-xs sm:text-sm font-bold text-slate-800">Sede Santa Cruz</span>
            </div>
          </div>
        </div>

        <!-- Disposición en Columna: Descarga Arriba y Drag & Drop Abajo -->
        <div class="space-y-3.5 sm:space-y-4 pt-1">
          <!-- 1. Descargar Formulario de Apertura -->
          <div class="p-3.5 sm:p-5 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/40 border border-blue-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div class="flex items-start sm:items-center gap-3">
              <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#003876] text-white flex items-center justify-center shrink-0 shadow-xs">
                <i data-lucide="file-text" class="w-5 h-5 text-amber-300"></i>
              </div>
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Formulario de Apertura</h5>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Descarga el documento oficial membretado con tus datos para firma y sello de la empresa.
                </p>
              </div>
            </div>

            <button onclick="downloadFormularioApertura()" class="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#003876] hover:bg-[#002855] text-white text-xs font-bold rounded-xl shadow-xs transition transform active:scale-95">
              <i data-lucide="download" class="w-4 h-4 text-amber-300"></i>
              <span>Descargar Formulario</span>
            </button>
          </div>

          <!-- 2. Drag and Drop para Subir Documentos -->
          <div class="p-3.5 sm:p-5 bg-slate-50/80 border border-slate-200 rounded-2xl space-y-3 sm:space-y-3.5">
            <div class="flex items-center justify-between">
              <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <i data-lucide="upload-cloud" class="w-4 h-4 text-[#003876]"></i>
                Subir Documentos
              </h5>
              <span class="text-[10px] text-slate-400 font-medium">PDF, JPG (Máx. 15MB)</span>
            </div>

            <!-- Dropzone Compacto -->
            <div onclick="showToast('Archivo Formulario_Apertura_Firmado.pdf seleccionado', 'info')" class="border-2 border-dashed border-slate-300 hover:border-[#003876] bg-white rounded-xl p-3.5 sm:p-4 text-center cursor-pointer transition group">
              <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 text-[#003876] mx-auto flex items-center justify-center mb-1 transition">
                <i data-lucide="upload-cloud" class="w-4 h-4"></i>
              </div>
              <p class="text-xs font-bold text-slate-700">Arrastra tus documentos o <span class="text-[#003876] underline">examinar</span></p>
            </div>

            <!-- Archivo Cargado -->
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div class="flex items-center gap-2 min-w-0">
                <i data-lucide="file-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span class="truncate font-semibold text-slate-700 text-[11px]">Formulario_Apertura_Firmado.pdf</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                Listo
              </span>
            </div>

            <!-- Botón de Envío -->
            <div class="pt-1">
              <button onclick="submitDocsApertura()" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition transform active:scale-95">
                <i data-lucide="send" class="w-3.5 h-3.5"></i>
                <span>Enviar Documentos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // PASO 2: REVISIÓN DE POSTULACIÓN
  // -------------------------------------------------------------
  else if (currentPasarelaStep === 2) {
    stepContentHtml = `
      <div class="animate-in fade-in duration-200 max-w-lg mx-auto py-2 sm:py-4">
        <div class="p-6 sm:p-8 bg-white border border-slate-200/90 rounded-2xl shadow-xs text-center space-y-4">
          <!-- Icono de Estado -->
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 mx-auto flex items-center justify-center">
            <i data-lucide="clock" class="w-6 h-6 sm:w-7 sm:h-7 animate-pulse"></i>
          </div>

          <!-- Encabezado y Explicación -->
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-2">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              En Revisión
            </span>
            <h4 class="text-lg sm:text-xl font-black text-slate-900 leading-tight">Solicitud en Revisión</h4>
            <p class="text-xs text-slate-500 mt-1">Dirección de Carrera de ${currentUser.career || 'Ingeniería de Sistemas'}</p>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Hemos recibido tus documentos correctamente. La Dirección de Carrera se encuentra revisando tu postulación.
          </p>

          <!-- Aviso de Permanecer Pendiente -->
          <div class="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-center gap-2.5 text-xs text-[#003876]">
            <i data-lucide="bell" class="w-4 h-4 shrink-0 text-amber-500"></i>
            <span class="font-medium text-left">Por favor, mantente al tanto de esta página para ver el avance de tu trámite.</span>
          </div>

          <!-- Botón de Continuar (Simulación Mockup) -->
          <div class="pt-2 flex justify-center">
            <button onclick="setPasarelaStep(3)" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#003876] hover:bg-[#002855] text-white font-bold text-xs rounded-xl shadow-xs transition transform active:scale-95">
              <span>Continuar</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // PASO 3: ORDEN DE COBRO
  // -------------------------------------------------------------
  else if (currentPasarelaStep === 3) {
    stepContentHtml = `
      <div class="animate-in fade-in duration-200 max-w-2xl mx-auto py-1 sm:py-2">
        <div class="p-4 sm:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-3.5 sm:space-y-4">
          <!-- Header de Orden de Cobro -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#003876] border border-blue-100 flex items-center justify-center shrink-0">
                <i data-lucide="credit-card" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">Orden N° ORD-104077-8092</h4>
                <span class="text-[10px] sm:text-[11px] text-slate-400">Postulación Aprobada Curricularmente</span>
              </div>
            </div>
            <span class="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
              Pendiente de Pago
            </span>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">
            Tu postulación para <strong>${currentApplication.institution}</strong> fue aprobada. Para formalizar el seguro universitario y la habilitación de horas, realiza el pago en el portal institucional.
          </p>

          <!-- Detalle de la Orden en Grid Limpio -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Concepto</span>
              <span class="font-semibold text-slate-800 text-[11px]">Seguro de Práctica Profesional (360 hrs)</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Estudiante</span>
              <span class="font-semibold text-slate-800 text-[11px]">${currentUser.unique_name} (Reg: ${currentUser.nameid})</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Institución</span>
              <span class="font-semibold text-slate-800 text-[11px] truncate block">${currentApplication.institution}</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Modalidad de Pago</span>
              <span class="font-semibold text-slate-800 text-[11px]">QR Simple / Tarjetas de Débito y Crédito</span>
            </div>
          </div>

          <!-- Acciones: Enlace Oficial a Pagos UPDS y Continuar -->
          <div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <a href="https://pagos.upds.edu.bo/" target="_blank" rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#003876] hover:bg-[#002855] text-white font-bold text-xs rounded-xl shadow-xs transition transform active:scale-95">
              <i data-lucide="credit-card" class="w-4 h-4"></i>
              <span>Pagar en Línea</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5 opacity-80"></i>
            </a>

            <button onclick="setPasarelaStep(4)" class="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition">
              <span>Continuar</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // PASO 4: EN CURSO
  // -------------------------------------------------------------
  else if (currentPasarelaStep === 4) {
    stepContentHtml = `
      <div class="space-y-4 animate-in fade-in duration-200">
        <!-- Ficha de Práctica Activa -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3">
            <div>
              <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Práctica Profesional Activa</span>
              <h4 class="text-lg sm:text-2xl font-black text-slate-900 leading-snug">${currentApplication.institution}</h4>
              <p class="text-xs text-slate-500 mt-0.5">Tutor Empresarial: <strong>${currentApplication.repLegal}</strong> • Sede Santa Cruz</p>
            </div>
            <div class="flex sm:flex-col items-center sm:items-end justify-between gap-1 text-right">
              <span class="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-100 text-[#003876] border border-blue-200 shrink-0">
                <span class="w-1.5 h-1.5 rounded-full bg-[#003876] animate-pulse"></span>
                Paso 4: En Curso (360h)
              </span>
              <span class="text-[11px] sm:text-xs text-slate-400 block">Código: <strong>${currentApplication.id}</strong></span>
            </div>
          </div>

          <!-- Metadatos de Horas y Estado en 3 pastillas -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
            <div class="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Horas Realizadas</span>
              <span class="text-xs sm:text-sm font-bold text-[#003876]">360 de 360 Horas (100% Cumplido)</span>
            </div>
            <div class="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Horario de Trabajo</span>
              <span class="text-xs sm:text-sm font-bold text-slate-800">${currentApplication.horario}</span>
            </div>
            <div class="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Estado de Práctica</span>
              <span class="text-xs sm:text-sm font-bold text-slate-800">Conclusión de Horas</span>
            </div>
          </div>
        </div>

        <!-- Disposición en Columna: Descarga Arriba y Drag & Drop Abajo -->
        <div class="space-y-3.5 sm:space-y-4 pt-1">
          <!-- 1. Descargar Formulario de Finalización -->
          <div class="p-3.5 sm:p-5 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/40 border border-blue-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div class="flex items-start sm:items-center gap-3">
              <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#003876] text-white flex items-center justify-center shrink-0 shadow-xs">
                <i data-lucide="file-check" class="w-5 h-5 text-amber-300"></i>
              </div>
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Formulario de Finalización</h5>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Descarga el formulario para que tu tutor empresarial evalúe tu desempeño laboral y selle la finalización oficial.
                </p>
              </div>
            </div>

            <button onclick="downloadFormularioFinalizacion()" class="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#003876] hover:bg-[#002855] text-white text-xs font-bold rounded-xl shadow-xs transition transform active:scale-95">
              <i data-lucide="download" class="w-4 h-4 text-amber-300"></i>
              <span>Descargar Formulario</span>
            </button>
          </div>

          <!-- 2. Drag and Drop para Entrega de Informe Final -->
          <div class="p-3.5 sm:p-5 bg-slate-50/80 border border-slate-200 rounded-2xl space-y-3 sm:space-y-3.5">
            <div class="flex items-center justify-between">
              <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <i data-lucide="upload-cloud" class="w-4 h-4 text-[#003876]"></i>
                Entrega de Informe Final
              </h5>
              <span class="text-[10px] text-slate-500 font-medium">Último Día de Práctica</span>
            </div>

            <!-- Dropzone Rediseñado y Compacto -->
            <div onclick="showToast('Archivo Informe_Final_360hrs.pdf seleccionado', 'info')" class="border-2 border-dashed border-slate-300 hover:border-[#003876] bg-white rounded-xl p-3.5 sm:p-4 text-center cursor-pointer transition group">
              <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 text-[#003876] mx-auto flex items-center justify-center mb-1 transition">
                <i data-lucide="upload-cloud" class="w-4 h-4"></i>
              </div>
              <p class="text-xs font-bold text-slate-700">Arrastra tu Informe Final o <span class="text-[#003876] underline">examinar</span></p>
            </div>

            <!-- Archivo Cargado -->
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div class="flex items-center gap-2 min-w-0">
                <i data-lucide="file-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span class="truncate font-semibold text-slate-700 text-[11px]">Informe_Final_360hrs_Firmado.pdf</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                Listo
              </span>
            </div>

            <!-- Botón de Envío Directo (Sin Validaciones) -->
            <div class="pt-1">
              <button onclick="submitInformeFinal()" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#003876] hover:bg-[#002855] text-white font-bold text-xs rounded-xl shadow-xs transition transform active:scale-95">
                <i data-lucide="check-check" class="w-3.5 h-3.5"></i>
                <span>Entregar Informe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // PASO 5: FINALIZADO
  // -------------------------------------------------------------
  else if (currentPasarelaStep === 5) {
    stepContentHtml = `
      <div class="animate-in fade-in duration-200 max-w-2xl mx-auto py-1 sm:py-2">
        <div class="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-2xl shadow-xs text-center space-y-3.5 sm:space-y-4">
          <!-- Icono Elegante UPDS -->
          <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#003876] border border-blue-100 mx-auto flex items-center justify-center">
            <i data-lucide="award" class="w-5 h-5 sm:w-6 sm:h-6"></i>
          </div>

          <!-- Textos de Conclusión -->
          <div class="max-w-md mx-auto">
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#003876] block mb-1">Acreditación Académica UPDS</span>
            <h4 class="text-lg sm:text-2xl font-black text-slate-900 leading-tight">Práctica Profesional Finalizada</h4>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">
              Has cumplido satisfactoriamente las horas de práctica en <strong>${currentApplication.institution}</strong>. Tu informe final ha sido calificado exitosamente.
            </p>
          </div>

          <!-- Calificación Final Única -->
          <div class="w-full sm:w-auto inline-flex flex-col items-center justify-center p-3.5 px-6 sm:px-8 rounded-xl bg-slate-50 border border-slate-100">
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Nota Final</span>
            <span class="text-2xl sm:text-3xl font-black text-[#003876] mt-0.5">98 <span class="text-xs sm:text-sm font-semibold text-slate-400">/ 100</span></span>
          </div>

          <!-- Botón de Descarga Oficial en Azul UPDS -->
          <div class="pt-2 flex justify-center">
            <button onclick="downloadDocumentoNotaFinal()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 bg-[#003876] hover:bg-[#002855] text-white font-bold text-xs rounded-xl shadow-xs transition transform active:scale-95">
              <i data-lucide="award" class="w-4 h-4"></i>
              <span>Descargar Nota Final</span>
              <i data-lucide="download" class="w-3.5 h-3.5 opacity-80"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Stepper Navigation Bar -->
    <div class="max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
      <div class="flex items-center justify-between relative">
        <!-- Línea Conectora de Fondo -->
        <div class="absolute left-4 right-4 sm:left-6 sm:right-6 top-4 sm:top-5 h-0.5 bg-slate-200 -z-0"></div>
        <div class="absolute left-4 right-4 sm:left-6 sm:right-6 top-4 sm:top-5 h-0.5 bg-[#003876] transition-all duration-500 -z-0" style="width: calc(${(currentPasarelaStep - 1) / (PASARELA_STEPS.length - 1)} * 100%)"></div>

        ${PASARELA_STEPS.map(s => {
    const isCompleted = s.step < currentPasarelaStep;
    const isActive = s.step === currentPasarelaStep;
    const isPending = s.step > currentPasarelaStep;

    let circleClass = "";
    let circleContent = "";
    let labelClass = "";

    if (isActive) {
      circleClass = "bg-[#003876] text-white ring-4 ring-blue-100 shadow-md";
      circleContent = s.step;
      labelClass = "text-[#003876] font-bold";
    } else if (isCompleted) {
      circleClass = "bg-[#003876] text-white";
      circleContent = '<i data-lucide="check" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"></i>';
      labelClass = "text-slate-800 font-semibold";
    } else {
      circleClass = "bg-white border-2 border-slate-300 text-slate-400";
      circleContent = s.step;
      labelClass = "text-slate-400 font-medium";
    }

    return `
              <div class="flex flex-col items-center relative z-10 group">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition ${circleClass}">
                  ${circleContent}
                </div>
                <span class="text-[9px] sm:text-xs mt-1.5 sm:mt-2 text-center transition max-w-[58px] sm:max-w-[85px] leading-tight ${labelClass}">
                  ${s.label}
                </span>
              </div>
            `;
  }).join('')}
      </div>
    </div>

    <!-- Contenido del Paso Activo -->
    ${stepContentHtml}

    <!-- Footer: Retirar Solicitud -->
    <div class="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
      <button onclick="cancelCurrentApplication()" class="text-xs text-slate-500 hover:text-rose-600 transition flex items-center gap-1.5 font-semibold">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        <span>Retirar Solicitud</span>
      </button>
    </div>
  `;

  lucide.createIcons();
}

/* =================================================================
   5. INICIALIZACIÓN DEL PORTAL Y CONTROLES
   ================================================================= */
function initPortal() {
  // Cargar datos del estudiante SAADS en la interfaz
  const dashName = document.getElementById('dash-student-name');
  if (dashName) dashName.innerText = currentUser.unique_name;

  const dashCareer = document.getElementById('dash-student-career-badge');
  if (dashCareer) dashCareer.innerText = currentUser.career;

  const dashSede = document.getElementById('dash-student-sede');
  if (dashSede) {
    dashSede.innerText = currentUser.email;
  }

  const careerTag = document.getElementById('active-student-career-tag');
  if (careerTag) {
    careerTag.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#003876]"></span><span>${currentUser.career}</span>`;
  }

  renderPracticas();
  lucide.createIcons();
}

/* =================================================================
   6. RENDERIZADO Y FILTRADO DE CONVOCATORIAS DE PRÁCTICAS
   ================================================================= */
function filterPracticas() {
  renderPracticas();
}

function renderPracticas() {
  const container = document.getElementById('practicas-grid');
  const emptyState = document.getElementById('empty-state');
  const counter = document.getElementById('practicas-counter');
  const convHeader = document.getElementById('convocatorias-header');
  const pasarelaContainer = document.getElementById('pasarela-container');
  const filtersBar = document.getElementById('header-filters-bar');
  const btnOpenSuggest = document.getElementById('btn-open-suggest');
  const studentCareer = currentUser ? currentUser.career : "Ingeniería de Sistemas";
  const selectedRubro = document.getElementById('select-rubro-filter')?.value || "ALL";
  const searchInput = document.getElementById('input-search-practica');
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

  // CUANDO EL ESTUDIANTE YA TIENE UNA SOLICITUD ACTIVA:
  // Se ocultan las convocatorias y se muestra la PASARELA DE 4/5 PASOS en la interface principal
  if (currentApplication) {
    if (convHeader) convHeader.classList.add('hidden');
    if (container) container.classList.add('hidden');
    if (emptyState) emptyState.classList.add('hidden');
    if (filtersBar) filtersBar.classList.add('hidden');
    if (btnOpenSuggest) btnOpenSuggest.classList.add('hidden');

    if (pasarelaContainer) {
      pasarelaContainer.classList.remove('hidden');
      renderPasarela();
    }
    return;
  }

  // CUANDO NO HAY SOLICITUD ACTIVA:
  // Se oculta la pasarela y se muestran todas las convocatorias correspondientes
  if (pasarelaContainer) pasarelaContainer.classList.add('hidden');
  if (convHeader) convHeader.classList.remove('hidden');
  if (container) container.classList.remove('hidden');
  if (filtersBar) filtersBar.classList.remove('hidden');
  if (btnOpenSuggest) btnOpenSuggest.classList.remove('hidden');

  // Filtrado de convocatorias correspondiente a la carrera del estudiante
  const filtered = practicasList.filter(item => {
    const matchesCareer = item.careers.includes(studentCareer);
    const matchesRubro = (selectedRubro === "ALL") || item.rubro === selectedRubro;
    const matchesSearch = !searchTerm ||
      item.institution.toLowerCase().includes(searchTerm) ||
      item.repLegal.toLowerCase().includes(searchTerm) ||
      item.rubro.toLowerCase().includes(searchTerm) ||
      item.sede.toLowerCase().includes(searchTerm);

    return matchesCareer && matchesRubro && matchesSearch;
  });

  if (counter) counter.innerText = `${filtered.length} Disponibles`;

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  } else {
    emptyState.classList.add('hidden');
  }

  container.innerHTML = filtered.map(item => {
    const hasCupos = item.cuposDisponibles > 0;

    return `
      <div onclick="openDetailsModal('${item.id}')" class="bg-white rounded-2xl border border-slate-200/80 hover:shadow-lg hover:border-[#003876]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group">
        <!-- Card Body -->
        <div class="p-5">
          <!-- Rubro + Modalidad -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-500">
              ${item.rubro}
            </span>
            <span class="text-[10px] font-semibold uppercase tracking-wide ${item.modality === '100% Remoto' ? 'text-violet-600' : item.modality === 'Híbrido' ? 'text-sky-600' : 'text-amber-600'}">
              ${item.modality}
            </span>
          </div>

          <!-- Institution -->
          <h4 class="text-base font-bold text-slate-900 leading-snug group-hover:text-[#003876] transition line-clamp-2">
            ${item.institution}
          </h4>

          <!-- Location -->
          <div class="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>
            <span class="truncate">${item.sede}</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
          <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold ${hasCupos ? 'text-emerald-600' : 'text-rose-500'}">
            <span class="w-1.5 h-1.5 rounded-full ${hasCupos ? 'bg-emerald-500' : 'bg-rose-400'}"></span>
            ${hasCupos ? `${item.cuposDisponibles} cupos` : 'Sin cupos'}
          </span>
          <span class="text-[11px] font-semibold text-[#003876] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
            Ver detalles
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

/* =================================================================
   6. DETALLES DE PRÁCTICA & POSTULACIÓN (TRÁMITE ÚNICO)
   ================================================================= */
function openDetailsModal(practicaId) {
  selectedPracticaForModal = practicasList.find(c => c.id === practicaId);
  if (!selectedPracticaForModal) return;

  const item = selectedPracticaForModal;

  const instEl = document.getElementById('detail-institution');
  if (instEl) instEl.innerText = item.institution;

  const tipoEl = document.getElementById('detail-tipo-convenio');
  if (tipoEl) tipoEl.innerText = item.tipoConvenio;

  const rubroEl = document.getElementById('detail-rubro');
  if (rubroEl) rubroEl.innerText = item.rubro;

  const horasEl = document.getElementById('detail-horas');
  if (horasEl) horasEl.innerText = `${item.horas} Horas Académicas`;

  const cuposTextEl = document.getElementById('detail-cupos-text');
  if (cuposTextEl) cuposTextEl.innerText = `${item.cuposDisponibles}/${item.cuposTotales} cupos libres`;

  const descEl = document.getElementById('detail-description');
  if (descEl) descEl.innerText = item.description;

  const horarioEl = document.getElementById('detail-horario');
  if (horarioEl) horarioEl.innerText = item.horario || "Turno Mañana o Tarde";

  const durEl = document.getElementById('detail-duracion');
  if (durEl) durEl.innerText = item.duracion;

  const locEl = document.getElementById('detail-location');
  if (locEl) locEl.innerText = item.location;

  const repEl = document.getElementById('detail-rep');
  if (repEl) repEl.innerText = item.repLegal;

  const contEl = document.getElementById('detail-contacto');
  if (contEl) contEl.innerText = `${item.email} • ${item.phone}`;

  const vigEl = document.getElementById('detail-vigencia');
  if (vigEl) vigEl.innerText = `Convenio vigente hasta ${item.vigencia}`;

  const cuposBar = document.getElementById('detail-cupos-bar');
  const cupoPercentage = Math.max(5, Math.round((item.cuposDisponibles / item.cuposTotales) * 100));
  if (cuposBar) {
    cuposBar.style.width = `${item.cuposDisponibles > 0 ? cupoPercentage : 0}%`;
  }

  const statusPill = document.getElementById('detail-status-pill');
  const submitBtn = document.getElementById('btn-submit-postulacion');

  const isCurrentActive = currentApplication && (
    currentApplication.practicaId === item.id ||
    currentApplication.institution.toLowerCase().includes(item.institution.toLowerCase()) ||
    item.institution.toLowerCase().includes(currentApplication.institution.toLowerCase())
  );

  if (currentApplication) {
    if (statusPill) {
      statusPill.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200 inline-flex items-center gap-1.5";
      statusPill.innerHTML = `<i data-lucide="lock" class="w-3.5 h-3.5 text-slate-400"></i>Trámite Activo`;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.className = "inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-400 bg-slate-200 rounded-xl cursor-not-allowed";
      submitBtn.innerHTML = `<i data-lucide="lock" class="w-3.5 h-3.5"></i><span>Trámite Activo</span>`;
      submitBtn.onclick = null;
    }
  } else {
    // Sin solicitud activa: puede postular normalmente
    if (item.cuposDisponibles > 0) {
      if (statusPill) {
        statusPill.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 inline-flex items-center gap-1.5";
        statusPill.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Convocatoria Abierta`;
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.className = "inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#003876] rounded-xl hover:bg-[#002855] shadow-xs transition transform active:scale-95";
        submitBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i><span>Postular</span>`;
        submitBtn.onclick = submitPostulacion;
      }
    } else {
      if (statusPill) {
        statusPill.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 inline-flex items-center gap-1.5";
        statusPill.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Sin cupos`;
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.className = "inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-400 bg-slate-200 rounded-xl cursor-not-allowed";
        submitBtn.innerHTML = `<span>Sin Cupos</span>`;
        submitBtn.onclick = null;
      }
    }
  }

  const modal = document.getElementById('modal-details');
  if (modal) {
    modal.classList.remove('hidden');
  }
  lucide.createIcons();
}

function closeDetailsModal() {
  document.getElementById('modal-details').classList.add('hidden');
  selectedPracticaForModal = null;
}

function submitPostulacion() {
  if (currentApplication) {
    showToast("Ya cuentas con una solicitud de práctica en trámite. Solo puedes mantener una postulación activa a la vez.", "warning");
    return;
  }
  if (!selectedPracticaForModal || selectedPracticaForModal.cuposDisponibles <= 0) return;

  // Descontar cupo en memoria
  selectedPracticaForModal.cuposDisponibles -= 1;

  // Registrar solicitud única en Paso 1 (Postulación)
  currentApplication = {
    id: "SOL-" + Math.floor(1000 + Math.random() * 9000),
    practicaId: selectedPracticaForModal.id,
    type: "CONVOCATORIA_CONVENIO",
    institution: selectedPracticaForModal.institution,
    repLegal: selectedPracticaForModal.repLegal,
    rubro: selectedPracticaForModal.rubro,
    horas: selectedPracticaForModal.horas,
    horario: selectedPracticaForModal.horario,
    location: selectedPracticaForModal.location,
    date: new Date().toLocaleDateString('es-BO'),
    statusKey: "REGISTRADA",
    observacion: null
  };

  currentPasarelaStep = 1;

  renderPracticas();
  closeDetailsModal();

  showToast(`¡Postulación iniciada para ${currentApplication.institution}! Descarga tu Formulario de Apertura y sube tus documentos.`, "success");
}

/* =================================================================
   7. PROPUESTA DE EMPRESA EXTERNA (TRÁMITE ÚNICO)
   ================================================================= */
function openSuggestModal() {
  const warningEl = document.getElementById('sug-active-warning');
  const warningTextEl = document.getElementById('sug-active-warning-text');
  const submitBtn = document.getElementById('btn-submit-suggest');

  if (currentApplication) {
    if (warningEl) warningEl.classList.remove('hidden');
    if (warningTextEl) {
      warningTextEl.innerText = `Actualmente ya cuentas con una solicitud activa para "${currentApplication.institution}". De acuerdo al reglamento de prácticas UPDS, debes concluir o retirar tu solicitud actual antes de proponer otra empresa.`;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
  } else {
    if (warningEl) warningEl.classList.add('hidden');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  }

  document.getElementById('modal-suggest').classList.remove('hidden');
  lucide.createIcons();
}

function closeSuggestModal() {
  document.getElementById('modal-suggest').classList.add('hidden');
  document.getElementById('form-suggest-convenio').reset();
}

function handleSuggestSubmit(event) {
  event.preventDefault();

  if (currentApplication) {
    showToast("Ya cuentas con una solicitud activa. Solo puedes tener un trámite a la vez.", "warning");
    return;
  }

  const companyName = document.getElementById('sug-company-name').value;
  const nit = document.getElementById('sug-nit').value;
  const rubro = document.getElementById('sug-rubro').value;
  const repLegal = document.getElementById('sug-rep-legal').value;
  const email = document.getElementById('sug-email').value;
  const phone = document.getElementById('sug-phone').value || "No especificado";
  const position = document.getElementById('sug-position').value;

  currentApplication = {
    id: "PROP-" + Math.floor(1000 + Math.random() * 9000),
    practicaId: null,
    type: "EMPRESA_SUGERIDA",
    institution: companyName,
    repLegal: repLegal,
    rubro: rubro,
    horas: 360,
    horario: "Turno Mañana o Tarde (A convenir)",
    location: "Sede Santa Cruz (Empresa Externa)",
    date: new Date().toLocaleDateString('es-BO'),
    statusKey: "REGISTRADA",
    position: position,
    nit: nit,
    phone: phone,
    email: email,
    observacion: null
  };

  currentPasarelaStep = 1;

  renderPracticas();
  closeSuggestModal();

  showToast(`Empresa "${companyName}" registrada. Descarga el Formulario de Apertura para iniciar tu trámite.`, "success");
}

/* =================================================================
   8. GESTIÓN DE LA SOLICITUD: RETIRAR POSTULACIÓN
   ================================================================= */
function cancelCurrentApplication() {
  if (!currentApplication) return;

  const instName = currentApplication.institution;
  const confirmMsg = `¿Deseas retirar tu solicitud de práctica para "${instName}"? Al retirarla, podrás postular a cualquier otra convocatoria disponible.`;

  if (confirm(confirmMsg)) {
    // Devolver cupo si era de una convocatoria interna
    if (currentApplication.practicaId) {
      const p = practicasList.find(x => x.id === currentApplication.practicaId);
      if (p) p.cuposDisponibles = Math.min(p.cuposTotales, p.cuposDisponibles + 1);
    }

    currentApplication = null;
    currentPasarelaStep = 1;

    renderPracticas();

    showToast(`Solicitud para "${instName}" retirada. Tu registro está libre para una nueva postulación.`, "info");
  }
}

/* =================================================================
   9. SISTEMA DE NOTIFICACIONES TOAST (UPDS)
   ================================================================= */
function showToast(message, type = "info") {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');

  const iconName = type === "success" ? "check-circle" : type === "warning" ? "alert-triangle" : "info";
  const borderClass = type === "success" ? "border-emerald-500 text-emerald-950" : type === "warning" ? "border-amber-500 text-amber-950" : "border-[#003876] text-slate-900";
  const bgBadge = type === "success" ? "bg-emerald-100 text-emerald-700" : type === "warning" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-[#003876]";

  toast.className = `pointer-events-auto flex items-center gap-3 p-4 bg-white rounded-2xl shadow-xl border-l-4 ${borderClass} text-sm font-medium transition transform translate-y-2 opacity-0 max-w-md`;
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${bgBadge} flex items-center justify-center shrink-0">
      <i data-lucide="${iconName}" class="w-4 h-4"></i>
    </div>
    <span class="flex-1 text-xs sm:text-sm text-slate-700 leading-snug">${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Inicialización automática del portal SAADS al cargar el DOM
window.addEventListener('DOMContentLoaded', () => {
  initPortal();
});
