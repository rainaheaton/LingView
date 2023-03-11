import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const aboutPageJSX = {
  [ENGLISH]:
    <div>
      <p>This is display tool for the oral histories collected as part of the Enenlhet Language Documentation Project with the (Toba) Enenlhet communities in Pozo Amarillo and Casanillo, Paraguay. The goal here is that speakers can interact with the texts/recordings, enjoy them, and provide feedback to the project team. To explore all the files from the project, see the archival repository at the University of Texas at Austin: https://ailla.utexas.org/es/islandora/object/ailla%3A266557 </p>
      <p>To customize this welcome text, edit the jsx/App/AboutPage.jsx file, then run webpack for your changes to take effect. </p>
    </div>,
  [ESPANOL]:
    <div>
      <p>Esta es una herramienta de exhibición de las historias orales recopiladas como parte del Proyecto de Documentación de la Lengua Enenlhet con las comunidades (Toba) Enenlhet en Pozo Amarillo y Casanillo, Paraguay. El objetivo aquí es que los oradores puedan interactuar con los textos/grabaciones, disfrutarlos y brindar retroalimentación al equipo del proyecto. Para explorar todos los archivos del proyecto, consulte el repositorio de archivos de la Universidad de Texas en Austin: https://ailla.utexas.org/es/islandora/object/ailla%3A266557 </p>
      <p>Es una prueba </p>
    </div>,
  [FRANCAIS]:
    <div>
      <p>Saisissez le contenu ici :) </p>
      <p>Pour personnaliser ce texte de bienvenue, modifiez le fichier 'jsx/App/AboutPage.jsx', puis exécutez webpack pour que vos modifications prennent effet. </p>
    </div>,
};

export function AboutPage() {
  return <TranslatableText dictionary={aboutPageJSX} />;
}
