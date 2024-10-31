const fs = require('fs');

// Tasca 1: Llegir el fitxer JSON i retornar un array d'objectes
function llegirProductes() {
  try {
      const data = fs.readFileSync('productes.json', 'utf8');
      return JSON.parse(data);
  } catch (error) {
      console.error("Error en llegir el fitxer JSON:", error.message);
      return [];
  }
}

// Tasca 2: Mostrar un producte
function mostrarProducte(producte) {
  console.log(`Nom: ${producte.nom}`);
  console.log(`Marca: ${producte.marca}`);
  console.log(`Categoria: ${producte.categoria}`);
  console.log(`Preu: ${producte.preu}€`);
  console.log(`Disponibilitat: ${producte.disponible ? 'Disponible' : 'No disponible'}`);
  console.log("Característiques:");
  for (const [clau, valor] of Object.entries(producte.caracteristiques)) {
      console.log(`  ${clau.charAt(0).toUpperCase() + clau.slice(1)}: ${valor}`);
  }
  console.log("-".repeat(40));
}

// Tasca 3: Mostrar la llista de productes
function mostrarProductes(productes) {
  productes.forEach(mostrarProducte);
}

// Tasca 4: Mostrar producte segons ID
function mostrarProducteID(productes, id) {
  const producte = productes.find(p => p.id === id);
  if (producte) {
      mostrarProducte(producte);
  } else {
      console.log(`No s'ha trobat cap producte amb l'ID: ${id}`);
  }
}

// Tasca 5: Exemple d'ús per a cada funció
const productes = llegirProductes();

console.log("1. Llegeix i mostra tots els productes del fitxer:");
console.log(productes);

console.log("\n2. Mostrant un sol producte (primer producte de la llista):");
if (productes.length > 0) {
    mostrarProducte(productes[0]);
} else {
    console.log("No hi ha productes per mostrar.");
}

console.log("\n3. Mostrant la llista de tots els productes:");
mostrarProductes(productes);

console.log("\n4. Mostrant producte amb ID 3:");
mostrarProducteID(productes, 3);

console.log("\n5. Intentant mostrar un producte amb un ID que no existeix (ID 99):");
mostrarProducteID(productes, 99);