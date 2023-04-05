const moves = ['north', 'north', 'west', 'west', 'east','south','north', 'east','north'];
const finalPosition = function (direction) {
    var paradePath = [];
    var x = 0;
    var y = 0;
    var i = 0
    var final = [];
    for (const move of direction) {
        switch (move) {
            case 'north':
                paradePath.push([0,1]);
                y = y + 1;
                
                
                break;
            
                
            case 'west':
                paradePath.push([-1,0]);
                x = x - 1;
                
                
                break;
                
                
            case 'south':
                paradePath.push([0,-1]);
                y = y - 1;
                
               
                
                break;
                
            case 'east':
                paradePath.push([1,0]);
                x = x + 1;


                break;
                
        
            default:
            break;
        }
        
   
        
    }
    final[0] = x;
    final[1] = y;
    //console.log(x);
    //console.log(y);
    
    return final;
        
    
}

let result = finalPosition(moves);
console.log(result);