import React from 'react';
import { ENGLISH, ESPANOL, DEUTSCH } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const aboutPageJSX = {
  [ENGLISH]:
    <div>
      <p>This is display tool for the oral histories collected as part of the Enenlhet Language Documentation Project with the (Toba) Enenlhet communities in the Central Paraguayan Chaco. Here speakers can interact with the texts/recordings, enjoy them, and provide feedback to the project team. To explore all the files from the project, see the archival repository at the University of Texas at Austin: <a href="https://ailla.lib.utexas.edu/collections/844/">https://ailla.lib.utexas.edu/collections/844/</a>.</p>

    </div>,
  [ESPANOL]:
    <div>
      <p>Esta es una herramienta de exhibición de las historias orales recopiladas como parte del Proyecto de Documentación de la Lengua Enenlhet con las comunidades (Toba) Enenlhet en el Chaco Central de Paraguay. Aquí los hablantes puedan interactuar con los textos/grabaciones, disfrutarlos y brindar retroalimentación al equipo del proyecto. Para explorar todos los archivos del proyecto, consulte el repositorio de archivos de la Universidad de Texas en Austin: <a href="https://ailla.lib.utexas.edu/collections/844/">https://ailla.lib.utexas.edu/collections/844/</a>.</p>

    </div>,
  [DEUTSCH]:
    <div>
      <p>Dies ist ein Anzeigetool für die mündlichen Überlieferungen, die im Rahmen des Enenlhet-Sprachdokumentationsprojekts mit den (Toba) Enenlhet-Gemeinden im zentralparaguayischen Chaco gesammelt wurden. Hier können Sprecher mit den Texten/Aufnahmen interagieren, sie genießen und dem Projektteam Feedback geben. Alle Dateien des Projekts finden Sie im Archiv der University of Texas in Austin: <a href="https://ailla.lib.utexas.edu/collections/844/">https://ailla.lib.utexas.edu/collections/844/</a>.</p>
    </div>,
};

export function AboutPage() {
  return <TranslatableText dictionary={aboutPageJSX} />;
}
