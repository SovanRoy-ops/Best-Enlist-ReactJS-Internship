/* Write a JavaScript function to clone an array */

    function cloner(orginal_arr){

        return orginal_arr.slice();

    } 

var given_arr = [1,2,3]
var cloned_arr  = cloner(given_arr)

console.log(`Original array: ${given_arr}`)
console.log(`Cloned array: ${cloned_arr}`)