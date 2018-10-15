
var rover= {

  direction: "N",
  x: 0,
  y:0,

  }
  
  
  function turnLeft(rover){
    switch (rover.direction) {
    case "N": rover.direction= "W";
    break;
  
    case "E": rover.direction= "N";
    break;
  
    case "S": rover.direction= "E";
    break;
  
    case "W": rover.direction= "S";
    break;
    }
    console.log("turnLeft was called!");
  }
  
  function turnRight(rover){
    switch (rover.direction){
      case "N": rover.direction="E";
    break;
  
      case "E": rover.direction="S";
    break;
  
      case "S": rover.direction="W";
    break;
  
      case "W": rover.direction="N";
    break;
  }
  
    console.log("turnRight was called!");
  }
  
  function moveForward(rover){
    switch (rover.direction){
      case "N": rover.y--;
      break;
      case "E": rover.x++;
      break;
    
      case "S": rover.y++;}
      break;

      case "W": rover.x--;}
      break;
    }
    console.log("moveForward was called")
  }
  function comandos(lista){
    for (var i=0;i<lista.length;i++){
     switch (lista.charAt(i)){
       case "f": moveForward(rover);
       break;
       case "r": turnRight(rover);
       break;
       case "l": turnLeft(rover);
       break;
       default: console.log("error!");
       break;
     }
    }
  }
  console.log(rover);
  turnLeft(rover);
  turnLeft(rover);
  console.log(rover)
  comandos("rffrfflfrff");