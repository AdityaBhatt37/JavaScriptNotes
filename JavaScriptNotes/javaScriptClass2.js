
//OBJECTS in JS

objec = {

   'Name': 'Prince',
   'Roll no': '12',

   behaviour: function () {

      console.log("This is function ");
   },

   funcName() {

      console.log("this is another function ");

   }


};

console.log(objec.behaviour());
console.log(objec.funcName());



//OBJECT CREATION - HOW?
//Two ways of creation of the Objects:
//These  used when we want to create our object again and again in repeat.

//1)FACTORY FUNCTION
/*
//1)Using the Factory function. ->This funtion create the object and return that object.

*/

//In Fatory Function we use camelCaseNaming

function createRectangle(len, bre) {

   return rectangle = {

      length: len,
      breadth: bre,

      draw: function () {

         console.log("The length of rectange is : ", rectangle.length);
         console.log("the breadth of rectangle is : ", rectangle.breadth);
      }
   };
}

let rectangle1 = createRectangle(7, 8);
rectangle1.draw();


//2)CONSTRUCTOR FUNCTION
// This function is used to initialize property or methods.
//Use Pascel naming to create the constructor function.

//ABOUT "this" keyword.
//    'this' keyword denotes the current object which is in Use.    
//     If their is no current object in the use  then the 'this' keyword denotes and empty object.     


function Square(h, w) {

   this.height = h;
   this.width = w;
   this.draw = function () {

      console.log("This is the function ");
   }
}

let SqOb = new Square(4, 3); //new keyword is used to create the empty object.
SqOb.draw();

//Dynamic Nature of Objects

let a = {

   l: 1,
   b: 2,

};

a.c = 5;

delete a.c;



//CONSTRUCTOR PROPERTY
//->In JS each and every object has an property which shows that how that object is made.
//  and that property is constructor property.

//EX-> 
console.log(SqOb.constructor);

//BELOW IS THE OUTPUT IN CONSOLE.
// ƒ Square(h,w){

//    this.height = h;
//    this.width = w;
//    this.draw  = function(){

//       console.log("This is the function ");
//    }
//  }

//So, the above output is the constructor of the "SqOb" object which shows that
//that the above object is made with Square function.







console.log(Square.constructor);
//BELOW IS THE OUTPUT IN CONSOLE
// ƒ Function() { [native code] }

//And the above output shows that the above is the constructor of Square function
//and as we know that functions also an object in the JS.
//and the JS constructor is above code which is predefine in the JS.



//CREATING THE CONSTRUCTOR FUNCTION INTERNALY -

let Rectangle = new Function('length', 'breadth',
   ` 
      this.length = length;
      this.breadth = breadth;
      
      this.draw = function(){

            console.log("The length of rectangle is : ",length);
            console.log("The breadth of rectangle is : ",breadth);
      }
   
   `);


//NOW CREATION OF OBJECT

let RectOb = new Rectangle(3, 4);

console.log(RectOb);
console.log(RectOb.draw());


/*
//?Dought -> ki ye upper waala kisko dikha raha hai internally
             object of constructor ko ki "constructor function "
             ke constructor ko ???

   Answer -> simple hai ki -> hm objects ko 2 types se banate hain
             -->"factory function" se and "Constructor function se"
             -->to agar hm "constructor function " use kren objects 
             -->banane ke liye to hmme kuch -:

             "function Rectangle(length,breadth){

                  this.length = length;
                  this.breadth = breadth;

                  this.fun() = function(){

                        console.log(this.length,this.breadth);
                  }
             } "

             ->then hm object bana sakte hai using the "Rectangle constructor function"
              
             Ex-> let obj1 = new Rectangle(3,4); //to ek obj1 ban gaya hai.

             -> hamme pata hai "obj1" ka constructor "Rectangle contructor function hai"

             -> and "Rectangle constructor function " ka constructor "Function" hai
                jo ki predefine hai.

             -> so upper waala code hamme ye dikha raha hai ki Internally "Function"
                kese "Rectangle constructor function " ko bana raha hai.

        
*/




//FUNCTIONS ARE OBJECTS IN JS

/*

as we can use our function name and then dot operator(.) :
we found that function has their properties and methods,
so functions are objects in JS

ex -> functionName.

*/


//PRIMITIVE TYPES AND REFERENCE TYPES IN JS
/*

Primitives Types -> Data are get copied
Reference Types -> are object and copy does not occour 
                   address are passed.

EX-> let a = {val: 3};
     let b = a 

*/



//HOW TO CHECK WEATHER THE PROPERTY IS PRESENT IN THE OBJECT OF NOT

let Rec = {

   'length': 2,
   'breadth': 3
};

if ('length' in Rec) {

   console.log("Present");
}
else {

   console.log("Absent");
}



//OBJECT CLONING
/*
  1) using ITERATION.
  2) using Assign() function.
  3) using Spread(...) Operator

*/


//1) USING ITERATION
let srcOb = {

   'a': 3,
   'b': 5
};

let destinationOb = {}

for (let key in srcOb) {

   destinationOb[key] = srcOb[key];

}

console.log(destinationOb);


//2)USSING ASSIGN() FUNFCTION of Object


let desOB = Object.assign({}, srcOb);

console.log(desOB);

//3)USING SPREAD(...) OPERATOR

let desO = { ...srcOb };
console.log(desO);


//GARBAGE COLLECTOR
//->Garbage collector in JS is a automatic tool which deallocate the memory
//  of the variables or constant which is not in use.

