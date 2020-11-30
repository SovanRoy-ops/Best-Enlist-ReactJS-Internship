/* Write a JavaScript program to find the sign of product of user given 3 numbers 
 
Ex- (assume getsign is your method name) 
getsign(1,2,-7) alert minus (-) sign  
getsign(1,+2,-7) alert both plus(+)&minus (-) sign 
getsign(1,2,7) alert welcome message */


var a,b,c;
a="-2";
b="+5";
c="+9";
getsign(a,b,c);

function getsign(n1,n2,n3){

    var collection = [n1[0],n2[0],n3[0]];
        for(var i=0;i<collection.length;i++){
            if(collection[i]==="-" || collection[i]==="+"){
                console.log(collection[i]+" found");        /*- found
                                                              + found
                                                              + found */
            }
        }

}

