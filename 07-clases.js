// declarando

class User{

}
// instancia de  una clase  
//const newUser = new User();
class user{
    //metodos
    greeting(){
        return 'hello';
    }

};

const gndx = new user();
console.log(gndx.greeting());

const bebeloger = new user();
console.log(bebeloger.greeting());

// constructor
class user1{
    //constructor
    constructor(){
        console.log('Nuevo Usuario')
    }
    greeting1(){
        return 'Adios';
    }
}

const david = new user1()

//this
class userPersona{
    //constructor
    constructor(id,name,age,usuario,pasword){
        this.id=id,
        this.name = name,
        this.age = age,
        this.usuario = usuario
        this.pasword = pasword;
        console.log(name)
    }
    // metodos
    speak(){
        return 'Hello ...!!!!';
    }
    greeting2(){
        return `${this.speak()}   
        ID:${this.id} 
        Nombre: ${this.name} 
        edad:${this.age} 
        usuario:${this.usuario}
        pasword:${this.pasword} `
    }
}


const ana = new userPersona(1,"alexis",23,"alexis21010",1234565668);

console.log(ana.greeting2())
// setters getters 
  class auto{
    // constructor
    constructor(modelo,age,color){
        this.modelo = modelo;
        this.age =age;
        this.color = color;


    }
    // metodos 
    saludo(){
        return'HOLA !!!! ';
    }
    bienvenida(){
        return `${this.saludo()}  ${this.modelo}`
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
  }
//creamos  un auto nuevo  con el  class 
  const auto2 = new auto('auto',1995,'rojos')
  
  // antes del cambio  de  auto   
   console.log(auto2);
   
   // usamos el get  para  ver el valor de age  1995
   console.log(auto2.uAge);

   // antes de  cambio  
   console.log(auto2);

   // llamamos al  set y cambiaños el  año de 1995 a 2022
   console.log(auto2.uAge = 2022);

   //  nuevo auto con el cambio  
    console.log(auto2);



    //------------------------------------


    // declaracion de una clase
class Userp {};
// genera una instancia
//const newUser = new User ();

class userp1 {
 // metodos
greeting() {
    return "hello";
}
};

const gndx1 = new userp1();
console.log(gndx.greeting());
const bebeloper = new userp1();
console.log(bebeloper.greeting());

// constructor

class userp2 { 
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david3 = new userp2();

// this

class userp3 {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const anap4 = new userp3("Ana");
console.log(ana.greeting());

// setters getters

class userp4 {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper15 = new userp4 ("david", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);