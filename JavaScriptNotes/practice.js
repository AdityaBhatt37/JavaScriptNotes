// //forEach loop is used for the arrays only
// //for-in loop is used for the objects only
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };

//   for(key in person){

//         console.log(key," = ",person[key]);
//   }


//   const numbers = [1, 2, 3, 4, 5];

//   numbers.forEach((elements)=>{console.log(elements)});


//   const scores = {
//     math: 90,
//     science: 85,
//     english: 88
//   };

//   //INCREMENTED EACH VALUE BY ONE

//   for(key in scores){

//         console.log(key, " = ", scores[key]+1);
//   }

//   //Factory function to create the objects in js

//   function factoryFunction(naam, rollNo){

//         return obj = {

//             name : naam,
//             roll : rollNo,

//             func : function(){

//                 console.log(`Your name is ${naam} and rollno is : ${rollNo}`);
//             }
//         };

//   };

// let entity = factoryFunction('Aditya',3);

// entity.func();


// //Constructor Function

// function ConstructorFun(name,roll){

//     this.name = name;
//     this.roll = roll;

//     this.fun = function(){

//         console.log(this.name);
//         console.log(this.roll);
//     }        
// };

// let objn = new ConstructorFun('Ayush',12);

// objn.fun();


// //TOPICS I HAVE COVERT TILL NOW ARE : 
// /*

// 1 What is JS
// 2 Primary and Reference Data types
// 3 Equality Operators
// 4 forEach loop
// 5 for-in loop
// 6 for-of loop
// 7 Two Ways of creation of Objects 
//     a. Factory function
//     b. Constructor Function


// */

// let a = 3;
// let b = '3';

// if(a===b){

//     console.log("equals");
// }
// else{

//     console.log("Not equals");
// }


// • Math Object
// • String Object
// • Template Literals
// • Date Object
// • Arrays in JavaScript
// • Array Methods
// 	• Insertion
// 	• Searching
// 	• Array of Objects
// 	• Removing Elements
// 	• Emptying the Array
// 	• Combining Arrays
// 	• Slicing Arrays
// 	• Iteration using forEach Loop
// 	• Joining and Splitting Arrays
// 	• Filtering Arrays
// 	• Mapping Arrays
// Sorting Arrays


// Project: Library Management System
// Features:
// Add Books:
// Add book details (title, author, year).
// Display Books:
// Show a list of all books in the library.
// Search Books:
// Search for a book by title or author.
// Sort Books:
// Sort the list of books by title or year.



//ADDING BOOKS 

//Using the factory Function

function addingBooks(){

function addBooks(naam,author,description,price){


    this.naam = naam;
    this.author = author;
    this.description = description;
    this.price = price;

};



let Book1 = new addBooks('To Kill a Mockingbird' , 'Harper Lee ' , 'A coming-of-age story set in the American South that explores themes of racial injustice and loss of innocence. ',2000 );

let Book2 = new addBooks( '1984 ' , 'George Orwell ' , 'A dystopian novel depicting a totalitarian society where individual thought and freedom are suppressed.',3000 );

let Book3 = new addBooks( 'Pride and Prejudice ' , 'Jane Austen ' , 'A classic romance novel that satirizes the social norms of the English Regency period. ',4000 );

let Book4 = new addBooks( 'The Great Gatsby ' , 'F. Scott Fitzgerald ' , 'A tragic love story set in the Jazz Age, exploring themes of wealth, class, and the American Dream. ',2000 );

let Book5 = new addBooks( 'The Lord of the Rings ' , 'J.R.R. Tolkien ' , 'An epic high fantasy novel set in Middle-earth, following the journey of Frodo Baggins to destroy the One Ring. ',1400 );

let Book6 = new addBooks( 'Harry Potter and the Sorcerer"s Stone ' , 'J.K. Rowling ' , 'The first book in a popular fantasy series about a young wizard attending Hogwarts School of Witchcraft and Wizardry. ',5000 );

let Book7 = new addBooks( 'The Alchemist ' , 'Paulo Coelho ' , 'A spiritual allegory about a young shepherd"s journey to find treasure and fulfill his personal legend. ',1000 );

let arryOfObj = [

    {Book1},
    {Book2},
    {Book3},
    {Book4},
    {Book5},
    {Book6},
    {Book7}

];

return arryOfObj;
};


function BookDisplay(){

    let arrOfO = addingBooks();

}