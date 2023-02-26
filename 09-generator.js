function* iterate(array){
    for(let value of array){
        yield value;
        console.log(value);
    }
}   

const it = iterate(['osccar','david','luz','alexis','jenifer']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* miles2(array) {

    let value = 0
    while (value < array.length) {

        yield value++;
         
    }

}

const it2 = miles2(['alexis','samir','yaseli','alessia']);

console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);


 function* getId() {
    let id = 0;
    while (true) {
      id++;
      yield id;
      
    console.log(getId())
  }
}
const array =[2,5,6,6]
for (let numero of array) {
    console.log(numero)
}