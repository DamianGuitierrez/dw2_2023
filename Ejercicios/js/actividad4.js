function reemplazarValor(arreglo, valorAntiguo, valorNuevo) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === valorAntiguo) {
        arreglo[i] = valorNuevo;
      }
    }
    return arreglo;
  }
  
  
  const arreglo1 = [1, 2, 3, 4, 5];
  const arreglo2 = ['a', 'b', 'c', 'd', 'e'];
  const resultado1 = reemplazarValor(arreglo1, 3, 10);
  const resultado2 = reemplazarValor(arreglo2, 'c', 'f');
  console.log(resultado1); 
  console.log(resultado2); 