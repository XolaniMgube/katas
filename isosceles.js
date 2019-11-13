function isosceles(hash){

    
    for(var i = 1; i <= hash; i+=2){
        for(var k = 1; k <= i; k++){
            for(var s = 1; s <= (hash - 1); s++ ){
                document.write("&nbsp;");
            }
            document.write("#");
            
        }
        document.write("<br>");
        
    }
}

isosceles(7);