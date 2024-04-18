import { reflexivityCheck, symmetricCheck, antisymmetricCheck, transitiveCheck } from "./MatrixProperies.js";
import { boolToUpperString } from "./boolToUpperString.js";

// Get's the elements on the screen so I can use them
// =======================================================
let cells = document.getElementsByClassName('cell');
let randomizeMatrixBtn = document.getElementById('randomBtn');
randomizeMatrixBtn.addEventListener('click', randomizeMatrix);
let propertyBtn = document.getElementById('propertyBtn');
propertyBtn.addEventListener('click', getValues);
let properties = document.getElementsByClassName('property');
// =======================================================


function randomizeMatrix(){ // Randomizes the values in the matrix
  for(let i = 0; i < cells.length; i++){
    cells[i].value = Math.round(Math.random())
  }
}

function getValues(){ // Gets the values of the matrix cells and passes them to the checker
  let values = []
  const matrix = []

  for(let i=0; i < cells.length; i++) {
    values[i] = cells[i].value
  }

  while(values.length) {
    matrix.push(values.splice(0,3));
  }

  let reflexiveValue = reflexivityCheck(matrix);
  let reflexive = boolToUpperString(reflexiveValue);
  properties[0].innerHTML = `Reflexive: <span class='${reflexiveValue ? 'true' : 'false'}'>${reflexive}</span>`;

  let symmetricValue = symmetricCheck(matrix);
  let symmetric = boolToUpperString(symmetricValue);
  properties[1].innerHTML = `Symmetric: <span class='${symmetricValue ? 'true' : 'false'}'>${symmetric}</span>`;

  let antisymmetricValue = antisymmetricCheck(matrix);
  let antisymmetric = boolToUpperString(antisymmetricValue);
  properties[2].innerHTML = `Anti-Symmetric: <span class='${antisymmetricValue ? 'true' : 'false'}'>${antisymmetric}</span>`;

  let transitiveValue = transitiveCheck(matrix);
  let transitive = boolToUpperString(transitiveValue);
  properties[3].innerHTML = `Transitive: <span class='${transitiveValue ? 'true' : 'false'}'>${transitive}</span>`;
}