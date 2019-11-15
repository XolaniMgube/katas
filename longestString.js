function longest(myArray) {

    var max = "";
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].length > max.length) {
        max = myArray[i];   
      }
    }
    return max;
  }
  
  console.log(longest(["the","quick","brown", "fox", "ate", "my", "chickens"]));