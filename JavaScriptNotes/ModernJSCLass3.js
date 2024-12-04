//HOW TO WRITE OPTIMIZE CODE IN JS
//STANDARD WAY TO CALCULATE THE TIME TAKEN BY A PROGRAM FOR EXECUTION by.

// USING OF performance.now() method

const t1 = performance.now();
for(let i = 1; i<=100; i++){

    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para' + i;

    document.body.appendChild(newElement);

}

const t2 = performance.now();

console.log("First loop took " + (t2-t1) + " ms to Execute");


//optimising the above loop a bit

const t3 = performance.now();
let myDiv = document.createElement('p');


for(let i = 1; i<=100; i++){

    let newele = document.createElement('p');
    newele.textContent = "This is Para " + i;

    myDiv.appendChild(newele);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("Second loop took " + (t4-t3) + " ms to Execute (Optimised Loop)");


//CONCEPT OF REFLOW AND REPAINT IN JS
/*
 ->Reflow is a calculation of position,geometry and dimentions 
   whenever Adding, Removing, Updating the DOM.

 ->Repaint is used to display the element of created using DOM pixel by pixel.

 -> So, in above loops whenever a new paragraph element is created using the loop,
    reflow and repaint for each paragraph element will occours.

 -> so, lesser the reflow and repaint for each element lower the time taken,
    by a program for its execution.
 */


//Now How CAN we optimized our code?
//By Using Document Fragment.
/*
->Document Fragment is a light weight DOM.
->So now we will First add our paragraphs using loop to Document Fragments.

//WHY WE ARE USING DOCUMENT FRAGMENT.
->Because when we add one or numbers of element to the Document Fragment,
  there is no Reflow and Repaint occour for them.

->And Reflow and Repaint will only occours when we will add this Document Fragment to orignal Document.
->so, only ONE Reflow and ONE Repaint.

*/

let fragment = document.createDocumentFragment();

for(let i = 1; i<=100; i++){

    let newElement = document.createElement('p');
    newElement.textContent = "This is Para " + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); //1 Reflow, 1 Repaint



//CALL STACK
/*
->JS is a single-Threaded (Synchronous) Scripted Language.

What is call stack ?
 ->JavaScript uses a Call Stack to track the functions in a program.
   The call stack works on the Last In, First Out (LIFO) principle.

// IMPORTANT NOTE
  ->JavaScript is, at its core, a single-threaded synchronous language.
    This means it executes code line by line, one operation at a time.
    Each line of code must complete before the next one starts.
    However, JavaScript also supports asynchronous operations,
    which allow it to handle tasks that take time to complete,
    like fetching data from a server or reading a file.


//EVENT LOOP IN JS (Check picture Event loop)
//->JavaScript's event loop is the core mechanism that enables asynchronous operations.

//BELOW IS THE EXPLANATION OF EVENT LOOP 
  ->When the Asynchronous Event comes in the "call stack" then All the Asynchronous Events request goes to the browser and then the function which will 
    going to be execute on Event(ex->Click) will move to the Event Queue and when user will
    do event(ex->click) then first browser will check the "call stack" that it is empty or not
    if empty then the Asynchronous function which is in the event queue other wise Asynchronous
    code has to be wait for "Stack" to get empty.

     (check EventLoopN picture also.)//check below link(philip robert 26min vedio).
  http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


->All the Asynchronous Code of JS is handled by Browser
  and used the Event loop for its execution.



*/




//setTimeOut() Function

//check ss(setTimeoutFunction.png)
/*
  //SYNTAX
  setTimeout(function(){ which will going to execude}, 
             Time (in milisecond(1000ms = 1second) after which the function will executed));

*/


setTimeout(function(){

    console.log(`Hello bhai mai set Timeout ke ander function hun
                 mai 5000 milisecond means 5 second baad execute honga.`);

},5000);


//ONE IMPRTANT QUESTION 

setTimeout(() => {
  
   console.log("Hello imediate ");
}, 0); //ye imediate nahi chalega kunki ye event loop mai jayga.



//GUESS THE OUTPUT OF THE FOLLOWING -:

setTimeout(()=>{

    console.log("FIRST");
},3000)

function Second(){

    console.log("Second");

}

Second();

console.log("Third");