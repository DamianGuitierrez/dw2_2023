function esPalindromo(cadena) {
    
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
   
    for (let i = 0; i < cadena.length / 2; i++) {
      if (cadena[i] !== cadena[cadena.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  
  const texto1 = "Hola mundo";
  const texto2 = "lame el auto";
  console.log(esPalindromo(texto1)); 
  console.log(esPalindromo(texto2)); 