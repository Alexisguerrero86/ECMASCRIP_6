const promises =()=>{
  return new Promise((resolve, reject) => {
    if(false){
        resolve('hey !!');
    }else{
        reject('Whoooops !!');
    }
  })
}
promises()
  .then(Response => console.log(Response))
  .catch(err => console.log(err));



  const helloPromise = () => { 

    return new Promise((resolve, reject) => { 

      if (true) {
         resolve('Hey!'); 
        } else {
           reject('Whooops!'); 
          } 
        }); 
      
      };

      helloPromise()
  .then(Response => console.log(Response))
  .catch(err => console.log(err));