function contarRepeticiones(cadena) {
    // Objeto para almacenar las repeticiones de cada letra
    let repeticiones = {};
  
    // Convertir la cadena a minúsculas para contar sin distinguir entre mayúsculas y minúsculas
    cadena = cadena.toLowerCase();
  
    // Iterar por cada caracter en la cadena
    for (let i = 0; i < cadena.length; i++) {
      let letra = cadena[i];
  
      // Ignorar caracteres que no sean letras
      if (letra.match(/[a-z]/)) {
        // Si la letra ya existe en el objeto de repeticiones, incrementar su contador
        if (repeticiones[letra]) {
          repeticiones[letra]++;
        } else {
          // Si la letra no existe, inicializar su contador en 1
          repeticiones[letra] = 1;
        }
      }
    }
  
    return repeticiones;
  }
  
  // Ejemplo de uso
  let cadena = 'RYIWXVEWTSPMXMGEWVIPEXMZEWEPEPMFIVXEHHIIBTVIWMSR';
  let resultado = contarRepeticiones(cadena);
  
  console.log(resultado);