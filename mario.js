function piso(nPiso, altura){
    // To do. Deben poner el numero 
    //correcto de espacios y de numerales de acuerdo 
    //al nPisos y a la altura.
    return "<p>" + "####" + "</p>";
}
let nPisos;
do{
//Lo que se hace
nPisos= Number(prompt("Ingrese el numero de pisos que desea"))
}while(isNaN(nPisos) || nPisos<=0 || nPisos>10 || nPisos%1 !=0) //Condicion para que se repita
let contenido = "";
for(let i=1; i<= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}
let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = contenido;
//