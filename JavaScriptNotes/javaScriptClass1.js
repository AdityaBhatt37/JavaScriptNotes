//What is JavaScript ?
//->JS is programing or client site scripting language which is used to provide functionality and behaviour to our webpage.
// Client-side scripting languages are those programming languages that run on a user's device, 
// usually in a browser, to enhance the interactivity of websites and online pages. 
// Client-side scripting is different from server-side scripting, which runs on the web server example php is server site.


// A scripting language is a type of programming language that is used to write scripts,
//  which are small programs designed to automate tasks or control other software.
//   Unlike compiled languages, which are translated into machine code before they are executed,
//    scripting languages are typically interpreted at runtime.
//     This means that the code is read and executed line-by-line by an interpreter.


//TOPICS WHICH ARE COVER IN THE FIRST LECTURE-:
/*
1)What can we do with JS?
2)Do we need a Compiler?
3)Adding JS in code.
4)Variables.
  ->Dynamic typing 
  ex-> in java or c++ -> int a = 4;
                      -> a = 'aditya' //Error will occours.
       but in JS - let a = 5;
                 - a = 'aditya' //No Error will occours.

5)Data Types 
  ->Primitive Types-:
    -String
    -Number
    -Boolean
    -undefined
    -Null

  ->Reference Types-:
    -Objects
    -Arrays
    -Functions

6)Equality Operator
   Ex->let num = 1;
       let str = '1';

  ->Loose equality(==)  => True(because loose equality operator check only values)
  ->Strict Equality(===) => False(because strict eqality operator check data types also with value)

7)Ternary Operator
  ->Sntax
    -> condition ? print(if true) : print(if false);

  Ex-> let status = (age>=18)? 'I can vote' : ' Cannot Vote';

8)Logical Operators.
  ->And(&&)
  ->or(||)
  ->not(!)

9)Concept of Falsy and Truthy
  ->FALSY ARE : undefined, null, 0, false, NaN

10)IF ELSE STATEMENTS AND SWITCH CASE STATEMENT

11)LOOPS
   for
   while
   do-while
   for-in
   forEach 
   for-of loop


*/

//forEach loop in JavaScript

// ->forEach loop is used with array only whenever we want to perform operations on, 
//    each element of array then we use forEach loop. 

// forEach loop does not change the values in your orignal array it makes change in its copy.


// Q:Write a program to add 3 in each element of an array.

var arr2 = [1,2,3,4,5,55,44,23,23,53,64];

arr2.forEach(function(val){ //'forEach' loop take Anonymous Function as input, in it.

    console.log(val+3);
})

//Anonymous Function is a function that has no name, or
//  more precisely, one that laks a name.

console.log(arr2);//value of 'array(arr2)' will not change
               // because forEach does not perform operations on orignal Array.


         
               
//FORIN loop in JS
// -> to perform looping on objects in JS we use forin loop.


var obj = {

 name: "mork",
 age: 20,
 city: "uttarkashi"
}


for(var key in obj){ // 'key' is normal variable which will store all the properties of obj.

console.log(key, obj[key]);
}

//'in' is keyword to show that it is forin loop
// in key values will be name,age,city
//and obj[key] it will store the value of those properties of object.




//for-of loop in JS
//->for loop are used with iterable and they are array and maps.
//EX -> 

for(let key of Object.keys(obj)){ //yhn pe hamne obj Object ki keys ka array banaya hai.

    console.log(key);
}

for(let key of Object.entries(obj)){ //yhn pe hamne obj Object ki keys mai jo entries ho rakhi hai uska array banaya hai.

    console.log(key);
}



// Question: Given the following object where each property is an array,
//  use a for...in loop to iterate over the properties and a forEach loop
// to iterate over the elements of each array. Log each element to the console.
// javascript

const data = {
  fruits: ['apple', 'banana', 'cherry'],
  vegetables: ['carrot', 'broccoli', 'spinach']
};


for(let keys in data){

    data[keys].forEach((v)=>{console.log(v)});
    
}


// Question: Write a for...of loop to iterate over each character of
//  the following string and log each character to the console.

const message = 'Hello';

for(let chars of message){

    console.log(chars);
}


//   Question: Given the following array, write a for...of loop
//   to iterate over the array using Array.prototype.
//   entries and log the index and value of each element to the console.


const fruits = ['apple', 'banana', 'cherry'];


for(let [index,ele] of fruits.entries()){

    console.log(`${index} = ${ele}`);
}