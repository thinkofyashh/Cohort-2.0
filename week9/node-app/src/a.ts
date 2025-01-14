enum Direction{
    up="up",   
    down='down' , 
    left="left" ,  
    right="right" 
}
console.log(Direction.up);

function pressed(keyPressed:Direction):void{
    if(keyPressed==Direction.up) console.log("up going");
    else if(keyPressed==Direction.down) console.log("down going");

}

pressed(Direction.up);
pressed(Direction.down);


