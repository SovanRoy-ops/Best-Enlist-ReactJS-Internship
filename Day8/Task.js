/* Write a JavaScript prototype method named beremoveobject which extends Array prototype, to remove a object with its value from the array of objects

Example- 
Input -var sampleinput=[{name:"John",age:26,Country:"india"},{name:"siva",age:27,Country:"india"}]
Output - sampleinput.beremoveobject(Country:"india")

[{name:"John",age:26},{name:"siva",age:27}]  */


Array.prototype.beremoveobject = function(obj) {

    var keys = Object.keys(obj);
    
    
    for(var i=0;i<this.length;i++){

         delete this[i][keys];

    }

    console.log(this);

}



var sampleinput=[
    {
        name:"John",
        age:26,
        Country:"india"
    },
    {
        name:"siva",
        age:27,
        Country:"india"
    }
]

sampleinput.beremoveobject({Country:"india"});
