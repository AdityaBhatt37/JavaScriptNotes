//API
/*

What is API?
->API stands for Application Programming Interface
-> An API is a set of rules and tools that allows different software applications to communicate with each other.

*/


//FEATURES OF ASYNCHRONOUS JS
/*

->clean and Concise.
->Better Error Handling.
->Easy Debugging.

*/


//PROMISE IN JS

/*
->Promise is used when we want to executes the Asynchronous Programs in JS Parallelly with Synchronous JS programs in background.

-> A Promise is in one of these states:

-> pending: initial state, neither fulfilled nor rejected.
-> fulfilled: meaning that the operation was completed successfully.
-> rejected: meaning that the operation failed.

//Promise method takes a Call back function as an argument 
  which takes two "resolve And rejected" as an arguments.

  -> we can also pass the value on successful execution of code inside resolve()
  -> and we can also pass any value on error inside rejected()
*/

let MeraPromise1 = new Promise(function (resolve, rejected) {

    setTimeout(function () {

        console.log("This is Asynchronous JS");

    }, 5000);

    //Passing values 

    // resolve(37); //Mtlb code ache se chal gaya or 37 value resolve le lega

    // rejected("Error aa gaya Bhai ji"); //is se error aayga and message print hoga jo value rejected ke inside hai.
});


//We can take any Action after the Promise is completed 
// by the use of resolve() state on which we can apply then() method to take action.

let MeraPromise2 = new Promise((resolve, rejected) => {

    setTimeout(() => {

        console.log("bhai mai 5 sec baad chalunga ");

    }), 5000;

    resolve("Bhai MenePromise2 purra kr diya");

});

MeraPromise2.then((value) => { console.log(value); });


//We can also handle the error occours in the promise 
//by the use of rejected() state on which we can apply catch() method to take action.

let MeraPromise3 = new Promise(function (resolve, rejected) {

    setTimeout(function () {

        console.log("Bhai mai Promise3 ka hu jo ki 5 sec baad chalne waala tha");

    }, 5000);

    rejected("Bhai Mene Jaan Booj ke Error De diay");
});

MeraPromise3.catch(function (value) { console.log(value) });

//OR

MeraPromise3.catch((Error) => { console.log("Error mene Error object ke ander likh diya") });

//OR

MeraPromise3.then((value) => { console.log(value) }, (Error) => { console.log("Error aa gaya Bhai") });

//WE CAN ALSO MAKE A CODE TO RUN MULTIPLE ASYNCHRONOUS JS CODE WHICH ARE DEPENDENT ON EACH OTHER.

let waada1 = new Promise((resolve, rejected) => {

    setTimeout(() => {

        console.log("waada1 hun mai ");

    }, 3000);

    resolve(true);


});

let output = waada1.then(function () {

    let waada2 = new Promise(function (resolve, rejected) {

        setTimeout(() => {
            console.log("Waada2 hun mai");

        }, 3000);


    });

    return waada2;

});

output.then(function (value) {

    console.log(value)
});





//async-await Keywords in JS
/*
async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises.
async functions implicitly return promises, while Await pauses the execution until the promise is resolved.
This simplifies asynchronous code and enhances readability by making it appear synchronous.

*/


async function userDef() {

    console.log("Hello World");
}

userDef(); //check in console

//OUTPUT IS : 
//Hello World
// Promise {<fulfilled>: undefined}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// undefined

//->async keyword return a promise.


// async function stepBySteps(){

// let Step1 = new Promise(function(resolve,rejected){

//     setTimeout(function(){

//         resolve("This is Step 1");

//     },5000);
// });


// let Step2 = new Promise(function(resolve,rejected){

//     setTimeout(function(){

//        resolve("This is Step 2");
//     },6000);

// });


// let s1 = await Step1;
// let s2 = await Step2;

// return[s1,s2];

// }


async function utility(){

    let delhiMausam = new Promise((resolve, rejecte) => {

        setTimeout(() =>{
            resolve("Delhi me bhout garmi hai");
        },5000);

    });


    let hydMausam = new Promise((resolve, rejecte) => {

        setTimeout(() =>{
            resolve("Hyderabad is Cool");
        },6000);

    });

    let dM =  delhiMausam;
    let hM =  hydMausam;

    return[dM, hM];
}


//utility(); //do in console

//without await keyword both the promise will be run parallaly 
//but when we use await keyword both the promise will be run one by one.

//we can make many method by using async-await which are dependent one after another.



//FETCH API
//fetch() Method

/*
The global fetch() method starts the process of fetching a resource from the network,
returning a promise which is fullfilled once the responce is available.

*/
 
//GET CALL
//->In get call we get the data from the Api's
//format of "fetch(url)" for GET CALL


async function apiFetch(){

    let apiContent = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //we have taken a free API from jsonplaceholder
    let Result = await apiContent.json();//converting api data into json formate.
    console.log(Result);

    /*
    JSON stands for JavaScript Object Notation

    JSON is a lightweight format for storing and transporting data

    JSON is often used when data is sent from a server to a web page

    */
}


apiFetch(); 
//OUTPUT IN CONSOLE
/*
{userId: 1, id: 1, title: 'delectus aut autem', completed: false} //json output.
completed: false
id: 1
title: "delectus aut autem"
userId: 1
[[Prototype]]: Object

*/


//POST CALL
//->In Post call we send the data through the Api.
//->Format of fetch(url,option object); //we have to write option object for post call.


let optionObj = {

    method: 'POST',
    body: JSON.stringify({
        
        title: 'WEB DEVELOPER',
        body: 'HTML,CSS,JS',
        userId: 37,
    }),
    headers: {

        'Content-Type': 'application/json; charset=UTF-8',
    },

};

/*
->The JSON.stringify() static method cnverts a JavaScript value to a JSON string.

*/
async function PostCall(){
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts',optionObj);
    let result = await content.json();
    console.log(result);
}

PostCall();

//OUTPUT IN CONSOLE
// {title: 'WEB DEVELOPER', body: 'HTML,CSS,JS', userId: 37, id: 101}
// body: "HTML,CSS,JS"
// id: 101
// title: "WEB DEVELOPER"
// userId: 37
// [[Prototype]]: Object


//CLOSURE IN JS
// A closure is a specific feature of functions in JavaScript,
// allowing them to "remember" and access variables from their lexical scope
// even after the outer function has finished executing.

// DIFFERENCE BETWEEN LEXICAL ENVIRONMENT AND CLOUSURE IN JS
/* -> lexical environment holds the scope and scope chain of the that function.

   -> Lexical Environment: The structure holding the variables and their values.
   -> Closure: The combination of a function and its lexical environment, 
   ->          allowing the function to access those variables even 
               when executed outside its original scope. */



//DIFFERENCE BETWEEN EXECUTION CONTEXT AND CLOUSURE IN JS
/*
->  To summarize, an execution context is a broader concept that includes the environment
    in which a piece of JavaScript code runs. 
    A closure is a specific feature of functions in JavaScript,
    allowing them to "remember" and access variables from their 
    lexical scope even after the outer function has finished executing.

    https://jsbyadi.blogspot.com/2024/01/advance-js-1.html //check the link for code.
*/


//Example of Closure

function parent(){

    let a = 3;

    function innerFunction1(){

        console.log("The value of a inside inner Function 1 is : ",a);

    }

    function innerFunction2(){

        console.log("The value of a inside inner Function 2 is : ",a);
    }

    console.log("Mai parent method hun");

    return [innerFunction1,innerFunction2];
};

let innerFunc1And2 = parent();

console.log(parent()); //Calling of Parent //after parent() executed all the variable will get deleted.

console.log(innerFunc1And2[0]());//calling innerFunction1
console.log(innerFunc1And2[1]());//calling innerFunction2

//So for innerFunction1 and innerFunction2 The variable a reference will be saved in closure.


//LEARN YOURSELF IN MDN ABOUT "CLASSES AND EXPORT MODULE IN JS".


//CLASSES in JS
/*
  ->  A JavaScript class is not an object.
  ->  It is a template for JavaScript objects.
  ->  Use the keyword class to create a class.
  ->  Always add a method named constructor().
  ->  The constructor method is called automatically when a new object is created.


  // The constructor method is a special method:

  ->  It has to have the exact name "constructor"
  ->  It is executed automatically when a new object is created
  ->  It is used to initialize object properties
  ->  If you do not define a constructor method, JavaScript will add an empty constructor method.


 //Class Methods
    Class methods are created with the same syntax as object methods.

    Syntax
        class ClassName {
            constructor() { ... }
            method_1() { ... }
            method_2() { ... }
            method_3() { ... }
        }
*/

class nameOfClass{

    constructor(name,roll){

        this.name = name;
        this.roll = roll;
        
    }

    //Class methods

    Course(){

        console.log("Bachelor's Of Computer Application");
    }

    meth(){

        console.log("The name is : ",this.name);
        console.log("The roll number is : ",this.roll);
    }

}

//CREATING OF OBJECTS IN JS

let obj1 = new nameOfClass('Aditya',3);

console.log(obje1.meth());


//MODULE EXPORT IN JS(Go through the below links)
// https://www.w3schools.com/js/js_modules.asp 