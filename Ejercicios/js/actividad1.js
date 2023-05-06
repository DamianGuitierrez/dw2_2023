function sumarArreglo(arreglo) {
    let sum = 0;
    for (let i = 0; i < arreglo.length; i++) {
      sum += arreglo[i];
    }
    return sum;
  }
  
  const num = [1, 2, 3, 4, 5];
  const resultado = sumarArreglo(num);
  console.log(resultado); 
  