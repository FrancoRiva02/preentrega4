// Simulador de stock de tienda de ropa

// Array inicial con las prendas
const prendasEnStock = ["Remera", "Pantalon", "Zapatillas", "Buzo", "Campera"];

console.log("Catalogo inicial:", prendasEnStock);

// Agrego al final y al principio
prendasEnStock.push("Gorra");
prendasEnStock.unshift("Camisa");

// Saco el ultimo y lo muestro
const prendaEliminada = prendasEnStock.pop();
console.log("Se ha eliminado el elemento: " + prendaEliminada);

// Busqueda de prenda
const prendaBuscada = prompt("Que prenda queres buscar? (Ej: Remera, Pantalon, Buzo)");

if (prendaBuscada !== null && prendaBuscada.trim() !== "") {
  if (prendasEnStock.includes(prendaBuscada)) {
    const posicion = prendasEnStock.indexOf(prendaBuscada);
    alert("Tenemos stock! " + prendaBuscada + " esta en la posicion " + posicion);
    console.log("Encontrada: " + prendaBuscada + " en el indice " + posicion);
  } else {
    alert("No tenemos " + prendaBuscada + " en stock");
    console.log("No se encontro: " + prendaBuscada);
  }
}

// Reemplazo por indice con splice
prendasEnStock.splice(2, 1, "Pantalon Cargo");
console.log("Se actualizo el catalogo en el indice 2");

// Funcion para recorrer y mostrar todo
function listarPrendas(lista) {
  console.log("--- Stock actual ---");
  for (const prenda of lista) {
    console.log("Prenda: " + prenda);
  }
  console.log("Total de prendas: " + lista.length);
}

listarPrendas(prendasEnStock);