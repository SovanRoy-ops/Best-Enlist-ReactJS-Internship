/* Write a JavaScript prototype method named beaddobject which extends Array prototype, to add a object with its value to the array of objects

Example-  Input -varsampleinput=[{name:"John",age:26},{name:"siva",age:27}] Output - sampleinput.beaddobject(Country:"india")
[{name:"John",age:26,Country:"India"},{name:"siva",age:27,Country:"India"}]  */


Array.prototype.beaddobject = function(obj) {

    var keys = Object.keys(obj);
    var vals = Object.values(obj);

  
    for(var i=0;i<this.length;i++){

        this[i] [keys] = vals;
     }

    console.log(this);
}



var sampleinput=[
    {
        name:"John",
        age:26
    },
    {   
        name:"siva",
        age:27
    }
]

sampleinput.beaddobject({Country:"India"});