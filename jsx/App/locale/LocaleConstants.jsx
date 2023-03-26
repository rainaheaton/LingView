// Put language constants here to use in your display.
// JSX for entire pages, specifically the Landing page, Glossary page, and the
// About page, are in the respective files themselves
// (e.g. jsx/App/LandingPage.jsx).
export const ENGLISH = "en";
export const ESPANOL = "es";
export const DEUTSCH = "gr";

// Put default language here.
export const DEFAULT_LOCALE = ESPANOL;

// Below, write the text that goes in various parts of the website for each
// language.

// NavBar text (header).
export const navBarTitleText = {
  [ENGLISH]: "Enenlhet Language Documentation Project",
  [ESPANOL]: "Enenlhet Nempaivoma",
  [DEUTSCH]: "Enenlhet-Sprachdokumentationsprojekt",
};

export const navBarSearchText = {
  [ENGLISH]: "Search",
  [ESPANOL]: "Buscar",
  [DEUTSCH]: "Suchen",
};

export const navBarAboutText = {
  [ENGLISH]: "About",
  [ESPANOL]: "Acerca del corpus",
  [DEUTSCH]: "Über den Korpus",
};

export const navBarGlossaryText = {
  [ENGLISH]: "Glossary",
  [ESPANOL]: "Glosario",
  [DEUTSCH]: "Glossar",
};

export const navBarIndexText = {
  [ENGLISH]: "Index of Texts",
  [ESPANOL]: "Índice de textos",
  [DEUTSCH]: "Index der Texte",
};

// Search page text
export const searchPagePromptText = {
  [ENGLISH] : "Search database:",
  [ESPANOL] : "Buscar en la base de datos:",
  [DEUTSCH] : "Durchsuchen Sie die Datenbank:",
};

export const searchPageNextButtonText = {
  [ENGLISH] : "Next page",
  [ESPANOL] : "Página siguiente",
  [DEUTSCH] : "Nächste Seite",
};

export const searchPagePrevButtonText = {
  [ENGLISH] : "Previous page",
  [ESPANOL] : "Página anterior",
  [DEUTSCH] : "Vorherige Seite",
};

// Story index columns text.
export const indexPageTitleHeaderText = {
  [ENGLISH] : "Title",
  [ESPANOL] : "Título",
  [DEUTSCH] : "Titel",
};

export const indexPageAuthorHeaderText = {
  [ENGLISH] : "Author",
  [ESPANOL] : "Autor",
  [DEUTSCH] : "Autor",
};

export const indexPageMediaHeaderText = {
  [ENGLISH] : "Media",
  [ESPANOL] : "Medios",
  [DEUTSCH] : "Medien",
};

// Use if a story isn't found.
export const notFoundPageText = {
  [ENGLISH] : "Story not found. Perhaps you mistyped the URL?",
  [ESPANOL] : "Historia no encontrada. ¿Quizás escribiste mal la URL?",
  [DEUTSCH] : "Geschichte nicht gefunden. Vielleicht hast du die URL falsch eingegeben?",
};

// Use when a story is loading.
export const loadingPageText = {
  [ENGLISH] : "Loading...",
  [ESPANOL] : "Cargando...",
  [DEUTSCH] : "Laden...",
};

// Story controls and metadata.
export const showVideoButtonText = {
  [ENGLISH] : "Show video",
  [ESPANOL] : "Mostrar video",
  [DEUTSCH] : "Videos zeigen",
};

export const showOrHideTiersButtonText = {
  [ENGLISH] : "Show/hide tiers",
  [ESPANOL] : "Mostrar/ocultar niveles",
  [DEUTSCH] : "Ebenen ein-/ausblenden",
};

export const metadataAuthorText = {
  [ENGLISH] : "Author",
  [ESPANOL] : "Autor",
  [DEUTSCH] : "Autor",
};

export const metadataDateText = {
  [ENGLISH] : "Date",
  [ESPANOL] : "Fecha",
  [DEUTSCH] : "Datum",
};

export const metadataDescriptionText = {
  [ENGLISH] : "Description",
  [ESPANOL] : "Descripción",
  [DEUTSCH] : "Beschreibung",
};

export const metadataGenreText = {
  [ENGLISH] : "Genre",
  [ESPANOL] : "Género",
  [DEUTSCH] : "Genre",
};

export const metadataGlosserText = {
  [ENGLISH] : "Glosser",
  [ESPANOL] : "Glosador",
  [DEUTSCH] : "Glosser",
};

export const metadataSourceText = {
  [ENGLISH] : "Source",
  [ESPANOL] : "Fuente",
  [DEUTSCH] : "Quelle",
};

export const metadataSpeakersText = {
  [ENGLISH] : "Speakers",
  [ESPANOL] : "Oradores",
  [DEUTSCH] : "Lautsprecher",
};

export const storySearchText = {
  [ENGLISH] : "Story",
  [ESPANOL] : "Historia",
  [DEUTSCH] : "Geschichte",
};

export const storySearchViewStoryText = {
  [ENGLISH] : "View story",
  [ESPANOL] : "Ver historia",
  [DEUTSCH] : "Geschichte ansehen",
};

// Texts for LaTeX conversion UI

export const latexButtonText = {
  [ENGLISH] : "LaTeX",
  [ESPANOL] : "LaTeX",
  [DEUTSCH] : "LaTeX",
};

export const latexSelectTiersPromptText = {
  [ENGLISH] : "Please select what tier to use for each line in the LaTeX gloss.",
  [ESPANOL] : "Seleccione qué nivel usar para cada línea en la glosa en LaTeX.",
  [DEUTSCH] : "Bitte wählen Sie aus, welche Stufe für jede Zeile im LaTeX-Gloss verwendet werden soll.",
};

export const latexSentenceTierName = {
	[ENGLISH] : "original sentence",
	[ESPANOL] : "frase original",
	[DEUTSCH] : "ursprünglicher Satz",
};

export const latexMorphemesTierName = {
	[ENGLISH] : "morphemes",
	[ESPANOL] : "morfemas",
	[DEUTSCH] : "Morpheme",
};

export const latexMorphemeTranslationsTierName = {
	[ENGLISH] : "morpheme glosses",
	[ESPANOL] : "glosas de morfemas",
	[DEUTSCH] : "Morphem-Glosser",
};

export const latexSentenceTranslationsTierName = {
	[ENGLISH] : "sentence translation",
	[ESPANOL] : "frase traducida",
	[DEUTSCH] : "Satz Übersetzung",
};

// Text on the tier selection confirm button
export const tierSelectionConfirmButtonText = {
  [ENGLISH] : "Confirm",
  [ESPANOL] : "Confirmar",
  [DEUTSCH] : "Bestätigen",
};

// Text on the LaTeX formatter close button
export const latexCloseButtonText = {
  [ENGLISH] : "Close",
  [ESPANOL] : "Cerrar",
  [DEUTSCH] : "Schließen",
};

export const latexStoryTitleText = {
  [ENGLISH] : "Story title:",
  [ESPANOL] : "Título de la historia:",
  [DEUTSCH] : "Titel der Geschichte:",
};

export const latexStoryIDText = {
  [ENGLISH] : "Story ID:",
  [ESPANOL] : "ID de historia:",
  [DEUTSCH] : "Geschichte-Kennung:",
};

export const latexSentenceURLText = {
  [ENGLISH] : "Sentence URL:",
  [ESPANOL] : "URL de la frase:",
  [DEUTSCH] : "Satz-URL:",
};

export const latexLibraryText = {
  [ENGLISH] : "Formatted for gb4e and gb4e-modified LaTeX packages:",
  [ESPANOL] : "Formateado para paquetes LaTeX gb4e y gb4e-modified:",
  [DEUTSCH] : "Formatiert für gb4e und gb4e-modifizierte LaTeX-Pakete:",
};

export const footerText = {
  [ENGLISH]: "This website is powered by ",
  [ESPANOL]: "Este sitio web funciona con ",
  [DEUTSCH]: "Diese Website wird betrieben von ",
};
