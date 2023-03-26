import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
      <p>Welcome! You have found the LingView site for the Enenlhet Language Documentation Project. Use this site to view our currently transcribed and translated narrative texts with speakers from Pozo Amarillo and Casanillo, Paraguay. </p>
      <p>This website is powered by <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>. Click <a href='#/index'>"Index of Texts"</a> to see some example texts. </p>
    </div>,
  [ESPANOL]:
    <div>
      <p>¡Bienvenido! Ha encontrado el sitio LingView para el proyecto de documentación del idioma Enenlhet. Use este sitio para ver nuestros textos narrativos actualmente transcritos y traducidos con hablantes de Pozo Amarillo y Casanillo, Paraguay. </p>
      <p>Este sitio web funciona con LingView. Haga clic <a href='#/index'>"Índice de textos"</a> para ver algunos textos de ejemplo. </p>
    </div>,
  [FRANCAIS]:
    <div>
      <p>Willkommen! Sie haben die LingView-Site für das Enenlhet Language Documentation Project gefunden. Verwenden Sie diese Seite, um unsere derzeit transkribierten und übersetzten Erzähltexte mit Sprechern aus Pozo Amarillo und Casanillo, Paraguay, anzuzeigen. </p>
      <p>Diese Web-Site ist ein Lebensmittel von LingView. Klicken Sie auf <a href='#/index'>"Index der Texte"</a> für alle Ihre Textbeispiele. </p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
