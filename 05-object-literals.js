// enahced object literals
function newUser(user,age,country) {
    return{
        user:user,
        age:age,
        country:country
    }
}
console.log(newUser('alexisf',35,'PE',));
////

function newUser2(user,age,country,uId) {
    return{
        user,
        age,
        country,
        id:uId
    }
}
console.log(newUser2('alexisf',35,'MEX',1));