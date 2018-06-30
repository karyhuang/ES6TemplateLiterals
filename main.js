"use strict"

let name = 'Kary';

function makeUpperCase(word) {
  return word.toUpperCase();
}

let template = 
`<h1>${makeUpperCase('Hello')}, ${name}</h1>
<p>This is a simple template in JS.</p>`;

document.getElementById('template').innerHTML = template;