/* Write a JavaScript program which iterates the integers from 1 to 100.
 But for multiples of three print "bestenlist" instead of the number and for the multiples of five print "react". 
 For numbers which are multiples of both three and five print "bestenlistreact". */

 for(var i=1;i<=100;i++){

    if(i%3===0 && i%5 ===0){
        console.log("bestenlistreact");

    }
    else if(i%3===0 && i%5!==0){
        console.log("bestenlist");
    }

    else if(i%5===0 && i%3!==0){
        console.log("react");
    }

    else{
        console.log(i);
    }
 }
