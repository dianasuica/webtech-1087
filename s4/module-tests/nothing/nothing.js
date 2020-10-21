const doNothing = () =>{
    console.log('doing nothing')
}

//ca sa o facem vizibila din exterior
 module.exports = {
     //doNothing: doNothing //daca cheia si val au acelasi nume putem scrie doar doNothing
      doNothing
    }