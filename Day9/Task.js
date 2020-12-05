/* Write a JavaScript prototype method named begetduplicate which extends Array prototype, to find duplicate values from array irrespective of their datatype
Example-  
Input -var sampleinput=[1,2,4,5,2,5] Output - sampleinput.begetduplicate() [2,5]  */


Array.prototype.begetduplicate = function() {

    var sorted_arr = this.sort();
    var duplicates = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            duplicates.push(sorted_arr[i]);
        }
    }
    console.log(duplicates);

    } 

var sampleinput=[1,2,4,5,2,5];

sampleinput.begetduplicate();   // [2,5]
