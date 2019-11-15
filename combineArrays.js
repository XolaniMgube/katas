

 function combine(arrayOne, arrayTwo){
   if(arrayOne.length == arrayTwo.length){
       var combineArrays = [];
       for(var i=0; i<arrayOne.length; i++){
           combineArrays.push(arrayOne[i], arrayTwo[i]);
       }
       console.log(combineArrays);
   }
  }
  combine([11,22,33], [1,2,3]);



