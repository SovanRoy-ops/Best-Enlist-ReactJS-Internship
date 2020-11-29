// Create a function that takes an array of numbers and returns the second largest number

var arr = [10,5,55,100,20,88];

console.log(`The second largest number in the array is: ${second_Largest(arr)}`);

function second_Largest(arr){

    var temp;

    for (var i = 0; i < arr.length; i++) {   
        for (var j = i+1; j < arr.length; j++) {   
           if(arr[i] < arr[j]) {  
               temp = arr[i];  
               arr[i] = arr[j];  
               arr[j] = temp;  
           }   
        }   
    }  

    return arr[1]; // 88
}