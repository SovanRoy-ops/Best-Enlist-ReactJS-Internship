// Create a function that squares every digit of a number.



function squareEveryNum(num){
  
    var numString = num.toString();
    
    
    var results = [];
    
    
    for(var i = 0; i < numString.length; i++){
        
        results.push(Math.pow(numString[i], 2));
    
    
    }
  
  
    return Number(results.join(''));
    
  }
  
  console.log(squareEveryNum(3345));  // 991625