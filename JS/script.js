
//Bootlet 01 homero
/*let nombre = prompt ('Ingresa tu nombre');
let apellido = prompt ('Ingresa tu apellido');
let edad = parseInt (prompt ('Ingreda tu edad'));


alert('Bienvenida(o) '+nombre+' '+apellido);
*/


//bootlet2 ciudades
/*
const cl = 'Chile';
const br = 'Brasil';
const usa = "Estados Unidos";
const ita = 'Italia';
const ca = 'Canada';
console.log(cl);
console.log(br);
console.log(usa);
console.log(ita);
console.log(ca);
*/

//booklet3 carnet
/*
let nombreCarnet = nombre+' '+apellido;
let direccionCarnet = prompt('Ingresa tu direccion');
let pais = prompt ('Ingresa tu pais');
let carnet = nombreCarnet+' '+direccionCarnet+' '+pais;
alert ('Tu carnet es: '+carnet)
*/

//Bootlet3.2 carnetv2
/*
let nombre = prompt ('Ingresa tu nombre completo');
let domicilio = prompt ('Ingresa tu domicilio');
let pais = prompt ('Ingresa tu pais');
let nascimiento = prompt ('Ingresa tu fecha de nascimiento');
const codigocarnet = "w987w398739879";

alert('Tu carnet de conducir es: '+'\n nombre \n domicilio \n pais \n nascimiento \n codigocarnet');
*/

//Bootlet 4 registro de personas
/*
let padre = prompt('Ingresa el nombre de su padre');
let madre = prompt ('Ingresa el nombre de su madre');
let hermano = prompt ('Ingresa el nombre de su hermana(o)');
let abuela = prompt('Ingresa el nombre de su abuela');
let pri = prompt('Ingresa el nombre de su prima');
let familia = padre+' '+madre+' '+hermano+' '+abuela+' '+pri;

alert ('Tu familia es: '+familia);
*/

//Bootlet5 descuentos
/*
let precio1 = parseFloat(prompt('Ingresa el precio de la carne'));
let precio2 = parseFloat(prompt('Ingresa el precio del pescado'));
let descuentocarne = precio1 - (precio1 * 0.2);
let descuentopescado = precio2 - (precio2 * 0.3);

alert (descuentocarne);
alert (descuentopescado);
*/

//ACTIVIDAD1 YO FUI Yo
/*
let nombreUsuario = prompt('Cual es su nombre');
let nombreOtrousuario = ('Juliana');

if (nombreUsuario == nombreOtrousuario) {
    alert ('Fui Yo')
}else{
    alert('No fui yo');
}
*/

//ACTIVIDAD 1 PRESIONAR Y
/*
let teclaUsuario = prompt('Presionar cualqueir tecla');
let teclaYminuscula = ('y');
let teclaYmayuscula = ('Y');

if ((teclaUsuario == teclaYminuscula) || (teclaUsuario == teclaYmayuscula)){
    alert ('Correcto');
}else {
    alert ('Error');
}
teclaUsuario = prompt('Presionar cualqueir tecla');
*/

//ACTIVIDAD ESCOGER PERSONAJE:
/*
let homero = 1;
let marge = 2;
let bart = 3;
let lisa = 4;
let numeroUsuario = parseInt (prompt('Por favor, elegir un número entre 1 a 4'));

if (numeroUsuario == homero){
    alert ('Elegiste Homero');
} else if (numeroUsuario == marge){
    alert('Elegiste Marge');
}else if (numeroUsuario == bart){
    alert ('Elegiste Bart');
}else if (numeroUsuario == lisa){
    alert ('Elegiste Lisa');
}else {
    alert('Numero invalido');
}
*/

//ACTIVIDAD 4 PRESUPUESTO
/*
let numeroUsuario = parseFloat(prompt('Por favor, seleccionar un número:'));

if ((numeroUsuario >= 0) && (numeroUsuario <= 1000)){
    alert ('Presupuesto bajo');
}else if ((numeroUsuario >= 1001) && (numeroUsuario <= 3000)){
    alert ('Presupuesto medio');
}else if (numeroUsuario > 3000){
    alert ('Presupuesto alto');
}else {
    alert('EROOR');
}
*/

//ACTIVIDAD 5 VACIO
/*
let producto1 = prompt ('Producto 1');
let producto2 = prompt ('Producto 2');
let producto3 = prompt ('Producto 3');
let producto4 = prompt ('Producto 4');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    alert ('Sus productos son: '+producto1+" "+producto2+" "+producto3+" "+producto4);
}else{
    alert ("Error: Es necesario cargar todos los productos");
}
*/

//ACTIVIDAD 1 EL PIZARRON
/*
let cantidad = prompt ('Ingresar cantidad de repeticiones');
let texto = prompt ('Ingresar tezto a repetor');
for (let index = 0; index < cantidad; index++){
    alert(texto);
}
*/
/*
let cantidad = prompt('Ingresar cantidad de repeticiones');
let texto = prompt ('Ingresar texto a repetir');

for (let i=0; i<cantidad; i++){
    alert(texto);
}
*/

//ACTIVIDAD 2 EL CUADRO ORDINARIO
/*
let numero = prompt('Elegir un numero de 1 a 10');

for (let i = 0; i <= numero; i++) {
    if (i>3){
        break;
    }
alert ("lado");
}
*/

// ACTIVIDAD 3 REGISTRO DE ALUMNOS
/*
let almnos = ' ';

for (let i = 0; i<10; i++){
    almnos += prompt ('Ingresar nonbre de alumnos') + '\n';

}
alert (almnos);
*/

//ACTIVIDAD 4 EL INNOMBRABLE

let nombre = prompt('Ingresa un nombre');














