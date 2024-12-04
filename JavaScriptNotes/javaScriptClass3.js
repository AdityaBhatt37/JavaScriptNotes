//CHECK THE MDN WEBSITE FOR MORE METHODS AND PROPERTIES OF OBJECTS IN JS.

//MATH OBJECT IN JS
//->Math is an inbuild object in js which has many methods which is used to perform lots of mathemetical operations.

let variable = NaN;

variable = Math.round(1.3);
console.log(variable);

variable = Math.max(1,2,3,4,5);
console.log(variable);

variable = Math.min(1,2,3,4,5);
console.log(variable);

variable = Math.pow(2,2);
console.log(variable);


//STRING OBJECT IN JS
//STRING -> is also an primitive data types in js 
//         -> but can be treated as Object.


let str = 'Aditya';//primitive string
//we can treat the primitive string as object just use the dot(.) operator with the name of the string,
//JS will automatically treat the primitive string as object.

console.log(str.length);
console.log(str.includes('di'));
console.log(str.endsWith('ya'));
console.log(str.startsWith('Ad'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let strOb = new String(' Aditya Bhatt ');//Object string

console.log(strOb.trim());//it will remove the blank space from the start and end.
console.log(strOb.replace('Bhatt','Mork'));
let word = strOb.split(' ');
console.log(word);




//TEMPLATE LITERAL IN JAVASCRIPT
//->Template leteral is nothing but use of `back-tick characters` to write a string as we want to write
//  same string will reflect in output how we write in out code.

let name = 'Aditya';


var letter = `

To ${name},
         
           This is letter to you 
           for using of template literals.

 Thank You.

`;

//${} is place holder in JS with string.

console.log(letter);




//DATE OBJECT IN JS
//-> Is used to get and set the date and time.

let dateob = new Date();
console.log(dateob);//will print current date and time with month day.

let date1 = new Date("14 july 2003");
console.log(date1);



//ARRAY IN JS
//->In JS array is a collection of different data items.
// -> arrays are referece object in js.

let arr = [1,2,3,4,5];
console.log(arr);

//INSERTION IN ARRAY

//at begning.
arr.push(0);
console.log(arr);

//at end
arr.unshift(9);
console.log(arr);

//at middle
arr.splice(2,0,'a,b,c'); //splice(indexNo. , number of element you want to delete, number of element you want to insert at index number);
console.log(arr);

arr.splice(2,1,3);
console.log(arr);


//SEARCHING IN AN ARRAY

console.log(arr.indexOf(2)); //It will return the index number of element or return -1 if not present.

console.log(arr.indexOf(7,3)); //indexOf(element which you want to serarch, and index number from where you want to start searching);

//WAP check weather the element is present in an arrya or not ?

//First Approach
if(arr.indexOf(10)!= -1){

    console.log("Present");
}
else{

    console.log("Not present");
}

//Secod Approach

console.log(arr.includes(10));//return true and false.



//ARRAY OF OBJECTS
//-> Above we are performing operations on array of primitives values,
//   comparing values to values, but now we are making array of objects,
//   and above operations will not be performed on array of objects,
//   because then we are comparing objects with objects and both the objects,
//   will be on different address, so we use CALLBACK FUNCTION.

//CALLBACK FUNCTIONS is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some kind of routine or action.

let ar = [

    {no:1, name:'Aditya'}, //index 0
    {no:2, name:'Ayush'}  //index 1
    
];

console.log(console.log(ar.indexOf({no:1,name:'Aditya'}))); //OUTPUT -1

//Using of call back functions

//to check the in the object of array we use -: find() method
//find() method return the object, if find.

let checkarOb = ar.find(function(arrr){ //and ar.find(predicate\Callback function).

    return arrr.name === 'Aditya';
});

console.log(checkarOb); //OUTPUT { no: 1, name: 'Aditya' }


//SHORT HAND NOTATION TO WRITE THE ABOVE FUNCTION USING THE ARROW FUNCTION(=>) -:

let chO = ar.find((arrr)=>{

     return arrr.name === 'Ayush';
});

console.log(chO);//OUTPUT { no: 2, name: 'Ayush' }

//If you have one input parameter inside the call back function and one line of expression to print inside function.
//then short hand notaion is : -

let sh = ar.find(arr => arr.name === 'Aditya'); //OUTPUT { no: 1, name: 'Aditya' }
console.log(sh);


//REMOVING ELEMENTS
console.log(arr);

//from begining
//we use pop()

console.log(arr.pop());


//from ending
//we use shift()

console.log(arr.shift());


//from middle
//we use splice()

console.log(arr.splice(2,1)); //splice(index No., No. of elements you want to delete);



//EMPTING THE ARRAY 

//using assigning  arr = []

console.log(arr); //[ 1, 3, 3, 4, 5 ]
arr2 = arr
arr = [] //empting

console.log(arr);
console.log(arr2); //[ 1, 3, 3, 4, 5 ]
//there is error in this method not good



//using arr.length = 0

arr2.length = 0;

console.log(arr2);


//using splice(0,arr2.length);

arr2.splice(0,arr2.length);

//using itereation

while(arr.length){

    arr.pop();
}


//COMBINING OF ARRAYS

let first = [1,2,3,4,5];
let second = [6,7,8,9];

//using concate()
let Fircond = first.concat(second);

console.log(Fircond);

//using spread(...) operator
let combine = [...first,'b', ...second,'a']//best way of combine.
console.log(combine);


//SLICING THE ARRAY

console.log(Fircond);

console.log(Fircond.slice(2,4)); //so we will get number from index number 2 to index number 3 and 4 will exclude.

console.log(Fircond.slice()); //this will generate the copy of orignal array.


//FOR-each loop for iteration over the array

Fircond.forEach(function(elements){

    console.log(elements);
});

//SHORT HAND NOTATION

Fircond.forEach(elements => console.log(elements));

//JOINING AND SPLITING OF ARRAY

let stri = Fircond.join(",");

console.log(stri);

let combi = stri.split(",");
console.log(combi);

//CHECK THE SHORT() METHOD IN MDN
//CHECK THE REVERSE() method in MDN

//FILTRING AN ARRAY USING THE filter() method

let ab = [1,2,3,0,-1,-9,10];

let filterd  = ab.filter(function(element){

    return element >= 0;
});

let filterdd = ab.filter(element => element >=0 );

console.log(filterdd);


//MAPPING IN ARRAY
//adding something with each elements of array using the map() map method.
//Check mdn

let maparr = [1,2,3,4,5,6,9,10,11];

let mapping = maparr.map(function(elements){

    return 'student '+ elements;

});

console.log(mapping);

//MAPPING WITH OBJECT

let mappingObject = maparr.map(function(ele){
    
    return {objectValue : ele}
});

console.log(mappingObject);


//SORTING WITH ARRAY
//using the sort() method.

let ar1 =  [8,383,83,8,9,1,9,29,8383,];
console.log(ar1.sort());//Check things in mdn.

