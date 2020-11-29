// Create a function that takes an integer and returns whether it is repeated one or not print true if its repeated else print false



function repeatedNumChecker(num){

    var numString = num.toString();
    

    var i = numString.length - 1;

        
    return (numString[i] === numString[i-1]);
           
    
    
}

console.log(repeatedNumChecker(3443)); // false
console.log(repeatedNumChecker(3444)); // true