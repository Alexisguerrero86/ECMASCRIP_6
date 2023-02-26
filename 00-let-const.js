var lastName ='alexis';
//reacinando el valor  de  lastName de alexis  a  jesus s 
lastName = 'jesus';
console.log(lastName);

let fruit ='fresa';
fruit='kiwi';
console.log(fruit);

//reaccinacion de  LET 
const animal='dog';
/*
animal='paloma'
*/
console.log(animal);

const frutas =() =>{
    if(true){
        var frutas1 = 'fresa '; // function escope;
        let frutas2 = 'banana';// function escope dentro del  blocke
        const frutas3 = 'pera';// blockj scope  
    }
    console.log(frutas1);
    /*
    consoles.log(frutas2);
    console.log(frutas3);
    */
}
 frutas();
 const suma=(num1 , num2) =>{
    let resultado = num1 + num2;

    return resultado;
 
 
}

console.log(suma(12,5));


 