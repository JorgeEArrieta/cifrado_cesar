function rot13(str) {
    
    let resultado = "";
    let pattern = /[A-Z]/g;

    for(let i = 0; i < str.length; i++){
        
        if(str[i].match(pattern)){
            // Obtiene el codigo ansii
            let n = str[i].charCodeAt(0);

            // Realiza el cifrado.
            if(n < 78){
                n = n + 13;
            }else {
                n = n - 13;
            }

            // Pasa el codificado al resultado.
            resultado += String.fromCharCode(n);

        }else{
            
            resultado += str[i];
        }

  }

  return resultado;

}
  
  console.log(rot13("SERR YBIR?"));