import React from 'react';
import { ENGLISH, ESPANOL, DEUTSCH } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
      <p>Welcome! You have found the LingView site for the Enenlhet Language Documentation Project. Use this site to view our currently transcribed and translated recordings with speakers from Pozo Amarillo, Casanillo, Puerto Casado, and Laguna Porã, Paraguay.</p>
      <p>This website is powered by <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a> and <a href='https://github.com/sjhuskey/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>. Click <a href='#/index'>"Recordings"</a> to browse our current recordings.</p>
    </div>,
  [ESPANOL]:
    <div>
      <p>¡Bienvenido! Ha encontrado el sitio LingView para el proyecto de documentación del idioma Enenlhet. Use este sitio para ver nuestros grabaciones transcritos y traducidos con hablantes de Pozo Amarillo, Casanillo, Puerto Casado, y Laguna Porã, Paraguay.</p>
      <p>Este sitio web funciona con <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a> y <a href='https://github.com/sjhuskey/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>. Haga clic <a href='#/index'>"Grabaciones"</a> para explorar nuestras grabaciones actuales.</p>
    </div>,
  [DEUTSCH]:
    <div>
      <p> Willkommen! Sie haben die LingView-Website des Enenlhet-Sprachdokumentationsprojekts gefunden. Hier können Sie unsere aktuell transkribierten und übersetzten Aufnahmen mit Sprechern aus Pozo Amarillo, Casanillo, Puerto Casado und Laguna Porã, Paraguay, ansehen.</p>
      <p>Diese Website wird von <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a> und <a href='https://github.com/sjhuskey/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a> betrieben. Klicken Sie auf <a href='#/index'>„Aufnahmen“</a>, um unsere aktuellen Aufnahmen zu durchsuchen.</p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
