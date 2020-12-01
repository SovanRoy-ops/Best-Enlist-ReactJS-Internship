/* Write a JavaScript prototype method named bespacify which extends string to allow spaces between each character of a input string
Example- "hello".bespacify ()
Output - h e l l o  */


function MyString(s){
    this.your_string = s;
}

const mystr = new MyString("Sovan");

MyString.prototype.bespacify = function(){

    console.log(this.your_string.split("").join(" "));
}

mystr.bespacify();


