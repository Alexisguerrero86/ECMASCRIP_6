// arrays destructuring

let fruits =['pera','platano'];

let [a,b]=fruits;
console.log(a,fruits[1]);
// Object destructuring

let user = {
    username:'alexis',age:23
};

let{
    username,age}=user;
console.log(username,user.age);

// spred operator
let person ={
    name:'jesus',
    age:28
};
let country ='mx';


let data ={...person,country};
console.log(data);

let data2 = {id:1,...person,country};
console.log(data2);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,2,3,4,5,6,7,8,9,10,11,12,13);



