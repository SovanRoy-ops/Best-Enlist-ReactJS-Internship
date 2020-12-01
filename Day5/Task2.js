/* 
Write a JavaScript prototype method named bevowel which extends string to find all vowels in the inpu string
Example - "hello". bevowel ()
Output- eo   */

function MyString(s){
    this.your_string = s;
}

const mystr = new MyString("Sovan");

MyString.prototype.bespacify = function(){

    var str = this.your_string;
    var new_str = str.match(/[aeiou]/gi).toString();
    console.log(new_str.replace(',',""));
}

mystr.bespacify();
