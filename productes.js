const fs = require('fs');

function llegirProductes() {
  try {
    const data = fs.readFileSync('productes.json', 'utf8');
    const productes = JSON.parse(data);
    return productes;
  } catch (error) {
    console.error('Error en llegir el fitxer JSON:', error);
    return [];
  }
}

function mostrarProducte(producte) {
  console.log(`ID: ${producte.id}`);
  console.log(`Nom: ${producte.nom}`);
  console.log(`Preu: ${producte.preu}`);
}

function mostrarProductes(productes) {
  productes.forEach(mostrarProducte);
}

function mostrarProducteID(productes, id) {
  const producte = productes.find((p) => p.id === id);
  if (producte) {
    mostrarProducte(producte);
  } else {
    console.log(`Producte amb ID ${id} no trobat.`);
  }
}

const productes = llegirProductes();
mostrarProductes(productes);
mostrarProducteID(productes, 2);
