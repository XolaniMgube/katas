function square(hash){
    for(var i = 1; i <= hash; i++){
        for(var s = 1; s <= hash; s++){
            console.log("#");
            //The line below is for seeing the the square pattern in a browser
            //document.write("#");
        }
            console.log("<br>");
            //The line below is for displaying the square pattern in a browser
            //document.write("<br>");
    }
}
square(4);