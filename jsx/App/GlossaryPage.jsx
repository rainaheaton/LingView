import React from 'react';
import { ENGLISH, ESPANOL, DEUTSCH } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const glossaryPageJSX = {
  [ENGLISH] :
    <div>
      <p>There is no glossary at this time. For a working dictionary of Enenlhet, write Raina Heaton at rainaheaton [at] ou.edu for a copy of the project's FLEx database. </p>
      <p> </p>
    </div>,
  [ESPANOL] :
    <div>
      <p>No hay glosario en este momento. Para obtener un diccionario funcional de Enenlhet, escriba a Raina Heaton en rainaheaton [arroba] ou.edu para obtener una copia de la base de datos FLEx del proyecto. </p>
      <p> </p>
    </div>,
  [DEUTSCH] :
    <div>
      <p>Derzeit gibt es kein Glossar. Für ein Arbeitswörterbuch von Enenlhet schreiben Sie Raina Heaton an rainaheaton [et] ou.edu für eine Kopie der FLEx-Datenbank des Projekts. </p>
      <p> </p>
    </div>,
};

export function GlossaryPage() {
  return <TranslatableText dictionary={glossaryPageJSX} />;
}
