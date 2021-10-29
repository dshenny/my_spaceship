//spaceship = {x : '0', y : '0', direction : "up"}


// move()
//     if direction == "up"
//         y -= 1
//     else if direction == "left"
//         x -= 1
//     else if direction == "down"
//         y += 1
//     else if direction == "right"
//         x += 1



// main()
// going through each letter 
//     if letter == 'A'
//         move
//     else if letter == 'R'
//         turn_right
//     else if letter == 'L'
//         turn_left


// turn_right()
//  if (spaceship["direction"] == "up") {
//      spaceship["direction"] = "right";
//  }
//  else if (spaceship["direction"] == "left")
//      spaceship["direction"] = "up";
//   }
//   else if (spaceship["direction"]) == "down") {
//       spaceship["direction"] = "left";
//   }
//   else if (spaceship["direction"] == "right"{
//        spaceship["direction"] = "down"
//     }   
// 

// turn_left()
//     if direction == "up"
//         direction = "left"
//     else if direction == "left"
//         direction = "down"
//     else if direction == "down"
//         direction = "right"
//     else if direction == "right"
//         direction = "up"


// main()
// going through each letter 
//     if letter == 'A'
//         move
//     else if letter == 'R'
//         turn_right
//     else if letter == 'L'
//         turn_left

function turn_right(spaceship) {
    if (spaceship["direction"] == 'up') {
        spaceship["direction"] = 'right';
    }
   else if (spaceship["direction"] == 'left') {
        spaceship["direction"] = 'up';
    }
   else if (spaceship["direction"] == 'down') {
        spaceship["direction"] = 'left';
    }
   else if (spaceship["direction"] == 'right') {
      spaceship["direction"] = 'down';
    }

}
    


   
function turn_left(spaceship) {
    if (spaceship["direction"] == 'up') {
         spaceship["direction"] = 'left';
    }
    else if (spaceship["direction"] == 'left') {
        spaceship["direction"] = 'down';
    }
    else if (spaceship["direction"] == 'down') {
        spaceship["direction"] = 'right';
    }
    else if (spaceship["direction"] == 'right') {
       spaceship["direction"] = 'up';
    }
} 
   
function move(spaceship) {
    if (spaceship["direction"] == 'up') {
        spaceship["y"] -= 1;
    }
    else if (spaceship["direction"] == 'left') {
        spaceship["x"] -= 1;
    }
    else if (spaceship["direction"] == 'down') {
        spaceship["y"] += 1;
    }
    else if (spaceship["direction"] == 'right') {
        spaceship["x"] +=1;
    }
}
   
   
   
function my_spaceship(params) {
    index = 0;
    spaceship = {"x": 0, "y": 0, "direction" : 'up'}
      
    while (index < params.length) {
        letter = params[index];
        //console.log(letter)
        if (letter == 'A'){
            move(spaceship);  
        }
        else if (letter == 'R') {
            turn_right(spaceship);
        }
        else if (letter == 'L') {
            turn_left(spaceship);
        }
        //console.log(spaceship);
        index += 1;
    }
    return ("{x: " + spaceship["x"] + ", " +  "y: " + spaceship["y"] + ", " + "direction: '" + spaceship["direction"] + "'}")
}         


//console.log(my_spaceship("RAALALL"))


//return ("x is " + spaceship["x"] + " y is " + spaceship["y"] + " direction is " + spaceship["direction"] )





// function turn_right(spaceship) {
//     if (spaceship["direction"] == "up") {
//         spaceship["direction"] = "right";
//     }
//    else if (spaceship["direction"] == "left") {
//         spaceship["direction"] = "up";
//     }
//    else if (spaceship["direction"] == "down") {
//         spaceship["direction"] = "left";
//     }
//    else if (spaceship["direction"] == "right") {
//       spaceship["direction"] = "down";
//     }

// }
    


   
// function turn_left(spaceship) {
//     if (spaceship["direction"] == "up") {
//          spaceship["direction"] = "left";
//     }
//     else if (spaceship["direction"] == "left") {
//         spaceship["direction"] = "down";
//     }
//     else if (spaceship["direction"] == "down") {
//         spaceship[direction] = "right";
//     }
//     else if (spaceship["direction"] == "right") {
//        spaceship["direction"] = "up";
//     }
// } 
   
// function move(spaceship) {
//     if (spaceship["direction"] == "up") {
//         spaceship['y'] -= 1;
//     }
//     else if (spaceship["direction"] == "left") {
//         spaceship['x'] -= 1;
//     }
//     else if (spaceship["direction"] == "down") {
//         spaceship['y'] += 1;
//     }
//     else if (spaceship["direction"] == "right") {
//         spaceship['x'] +=1;
//     }
// }
   
   
   
// function my_spaceship(params) {
//     index = 0;
//     spaceship = {'x': 0, 'y': 0, "direction" : "up"}
       
       
//     while (index < params.length) {
//         letter = params[index];
//         //console.log(letter)
//         if (letter == 'A'){
//             move(spaceship);  
//         }
//         else if (letter == 'R') {
//             turn_right(spaceship);
//         }
//         else if (letter == 'L') {
//             turn_left(spaceship);
//         }
//         //console.log(spaceship);
//         index += 1;
//     }
//     return (spaceship)
// }         


// //my_spaceship("RAALALL")