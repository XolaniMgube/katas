var strings = ['xolani', 'mgubeqqqqqqqqqqqqqqq', 'longestwordeverqqqqq'];
var long = 0;



 function string(myArray){
    for(var i = 0; i < myArray.length; i++){
        if(myArray[i].length > long){  
            long = myArray[i].length;
            
        }

        if (myArray[i].length == long){
            console.log(myArray[i]);
        }
        
      
       

    }

        

    
    

    console.log(long);


 }

 string(strings);