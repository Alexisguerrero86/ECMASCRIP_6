function newUser(name ,age ,country){
    var name =name||'oscar';
    var age = age || 34;
    var country = country || "MX";
     console.log(name,age,country);
}
newUser();

newUser('alexis',28,'PE');
//

function newAdmin(name='oscar',age = 32,country='CL') {
    console.log(name,age,country);
    
}

newAdmin();
newAdmin("jesus",32,"bra");