//FUNCTIONS IN JS.

//HOISTING IN JS
run();//we are able to run the run function due to the HOISTING.
      //Hoisting is a concept In JS which moves the declaration of funciton top of a program.

function run(){

    console.log("I am run function");
}


//FUNCTION ASSIGNMENT IN JS

let vari = function walk(){

    console.log("I am walking");
}

console.log(vari());
// console.log(walk()); -> This will give error.


function func(a,b){

    console.log(a+b);
}

func(1,2);//OUTPUT 3
func(1);//OUTPUT NaN(Not a Number)
func();//OUTPUT NaN

func(1,2,3,4,5);//OUTPUT 3 
//in above func() we pass more then 2 parameters which it does not want.
//so it will store the rest of parameters in "arguments" object.

function fun(){

    console.log(arguments);

}

fun(1,2,3,4,5); //OUTPUT [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

//The above output is an object '0' key : 1 value


//CREATION OF DYNAMIC FUNCTION.
function meth(){

    let sum = 0;
    for(let key of arguments){

        sum = sum+key;
    }

    console.log("The sum of arguments are : ", sum);
}

meth(1,2,3,4,5,6,7,8,9,10); 



//Rest Operator(...) in JS


function fu(a,b, ...arr){ //->...arr (...(rest Operator) arr is array)

    console.log(arr);
}

fu(1,2,3,4,5,6,7); //OUTPUT [ 3, 4, 5, 6, 7 ]

//rest operator stores all the rest parameters passed as an array.


// function f(a,b, ...ar,c){//This will give error because after the rest operator we cant give any arguments.

//     console.log(ar);
// } //...arr(rest operator with its array should be last)


//DEFAULT ARGUMENT IN JS
function sum(a,b=3){

    console.log(a+b);
}
sum(3);
sum(3,4);


//GETTER AND SETTER IN THE OBJECTS

let obj = {

    fName :'Aditya',
    lName : 'Bhatt',

    //Setter Function 
    set setterFullName(value){

        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    },

    //Getter Function
    get getterFullName(){

        return `${this.fName}  ${this.lName}`;//`Back tick characters` with ${placeHolders}

    }


}


console.log(obj.getterFullName);//Calling of Getter Function.

obj.setterFullName = 'Ayush Bhatt';//Seting the value in Setter function of obj.
console.log(obj.setterFullName);//Calling of Setter Function.

console.log(obj.getterFullName);//Calling of Getter Function.


function readO(){//Normal reading function.

    console.log(`${obj.fName} ${obj.lName}`);
}




//EXCEPTION HANDLING IN JS

let o = {
    a: 'Aditya',
    b: 'Bhatt',

    set setterF(value) {
        if (typeof value !== 'string') {
            throw new Error("Please Enter a string");
        }

        let ar = value.split(' ');
        this.a = ar[0];
        this.b = ar[1];
    },

    get getterF() {
        console.log(`The value of a is : ${this.a} \n The value of b is : ${this.b}`);
    }
};

try {
    o.setterF = "Ayush Bhatt";
} catch (e) {
    alert("Please enter a string");
}




//ABOUT CONSTANTS

//constant has scope as let variables within the brasis.
function fun(){

    const v = 3;
    
}


//REDUCE METHOD IN JS (reduce())

let ar = [1,2,3,4,5];

var sum = 0;

for(let i of ar){

    sum = sum+i;
}

console.log("The sum of values of array are : ", sum);


//TO do the above task we use the reduce function 

let summ = ar.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
//check image

console.log("The sum of values of array are : ", sum);