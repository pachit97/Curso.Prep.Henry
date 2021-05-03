// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      A: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 return Object.entries(objeto);
  }
// var array = []
//for (let prop in objeto)
//Array.push([prop,objeto[prop]])
// return array
 
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const objeto = {};

    for (let i = 0; i < string.length; i++) {

        let letra = string.charAt(i);

        if (objeto[letra]) { 
            objeto[letra]++
        } 
        else {
            objeto[letra] = 1; 
        }

    }

    return objeto;
}
//var objeto = {}
//for (i = 0; i <string.length;i++)
//if (obj[string[i]]){
// (obj[string[i]]+=1)
//else
//obj[string[i]]=1;
//return obj
//
//
function capToFront(string) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let stringArray = Array.from(string);

    let mayusculas = [];
    let minusculas = [];

    for (let indice = 0; indice < stringArray.length; indice++) {
        
        const letraDelArray = stringArray[indice];
        
        const letraDelArrayMayuscula = letraDelArray.toUpperCase()

        if (letraDelArray === letraDelArrayMayuscula)  {
            mayusculas.push(letraDelArray);
        } else {
            minusculas.push(letraDelArray);
        }
    }

    return mayusculas.join("") + minusculas.join("");
}
//var min = []
//var may = []
//for (i = 0; i menor que s.length; i++)
// if(s[i].toUppercase() === s[i]) {
//may+= s[i]
//else
//min+=s[i]
// return may+min

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mirror = "";
  for (var i = str.length - 1; i>=0; i--){
    mirror+=str[i]
  }
  var array = mirror.split(" ");
  return array.reverse().join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var num = numero.toString();
for (let i = 0; i<num.length/2; i++) {
if (num[i] === num[num.length-1-[i]]){
  return "No es capicua";
}
}
return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 var exclude = ["a","b","c"];
 var newString = ""
 for (i = 0; i < cadena.length; i++) {
   if (!exclude.includes(cadena[i])){
     newString+=cadena[i]
   }
 }
 return newString
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = [];
  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])){
      interseccion.push(arreglo1[i]);
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

