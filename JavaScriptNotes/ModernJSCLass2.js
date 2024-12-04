// EventTarget -> EventTarget is an interface implemented by object that can recive events & may have listeners for them.

// EventListeners -> Listeners are nothing but responsed to the event.
// (in simple hm kya kr rahe hai agar koi event hogga to hamme kya krna hai this is EventListeners.)
//  Ex-> my mummy slap me this is an event and listeners will decide how will I   responsed I will cry.


// So EventTarget have three methods of Event Listeners they are : 
// 1)addEventListener()
// 2)removeEventListener()
// 3)dispatchEvent()
                                                       
// ->EventTarget is top most interface. Means there is no parent of EventTarget so, 
//   inside it there is -> document object,  it contain all the elements : paragraph element, vedio, audio..etc…

//                 inherit by                   inherit by
// EVENT TARGET <------------------- NODES <--------------------  ELEMENTS(HTML ELEMENTS)

//What is elements ->  <tag> content </tag>

// So node will have all the property of EventTarget and elements will have all the property of EventTarget and Node.Node changes.

// #IMPORTANT 
//   as we know that all the content of html is sequence of charcter 
//  which are converted into tags and tags are converted into token and token are coverted into Node and Node milkar kya banati hai DOM.




// Browser events are invisible to see them we have to use a method "monitorEvents(document)" 
//in console to see all the events when you click to website any where.
// And if we want to hide events again we can use " unmonitorEvents() " method.



// WHAT ARE EVENTS :
// Events are fired inside the browser window, 
// and tend to be attached to a specific item that resides in it. 
// This might be a single element, a set of elements, 
// the HTML document loaded in the current tab, 
// or the entire browser window. There are many different types of events that can occur

//check image EventTarget.png

// PSCEDOCODE THAT HOW TO APPLY addEventListener(check image ->pscedocode.png)


//HOW TO APPLTY addEventlistener()

let divElement = document.querySelector("#container");

divElement.addEventListener('click',function(){

    divElement.style.backgroundColor = 'yellow';

});


function print(){

    console.log("You over on our website");
}

document.addEventListener('click',print);


//OUTPUT  in console (15 ModernJSCLass2.js:61 You over on our website)
//15 represent number of click on entire website because our targetEvent is docuement.
//Check output in console it also shows that how much time we have click.



//HOW TO REMOVE THE listener()
//using removeEventListener();

//This removeEventListener() works properly when -:
//1)There is same Target.
//2)There is same Type of Event.
//3)There is same Type of Function.

document.removeEventListener('click',print); //this will remove the event
//and this is correct way to implement.


//YOU CAN ALSO check the eventListener on the inspect window(on element window).


//PHSASES OF EVENTs IN JS

/*

There are three pases of events ->

->Capturing Phase
->at Target Phase
->Bubbling phase

check image(PhasesOfEvent.png)

To, execute our .addEventListener() at capturing phase we pass 3rd argument as 'true'.
and by default our .addEventlistener() method is execute at bubbling phase.
//Check for the 'at Target Phase'.


Ex -> <targetEvent>.addEventListener('type of event', <Event Function>, true); // for capturing phase.
*/


//EVENT OBJECT
/*

-> When ever the .addEventListener() method is execute its <Event Function> recive and 'Event object',
   which has many information about the event which will take place.\
   //we can get the information in console.

*/


let button1 = document.querySelector('#button1');

button1.addEventListener('click',function(eventOb){

    button1.style.cssText = "width: 20%; color : white; background-color: black; border: solid 2px red; border-radius: 30px";

    console.log(eventOb); //Check output in console you will get the details information of above event;
})



//THE DEFAULT ACTION

/*
->So, as we know that each element in HTML has their default actions.
  ex-> anchor tag <a> tag has work to open links.
    -> so, by using the JS we can prevent the default action of any html element.

    By using -> .preventDefault() method.

    //.preventDefault() method is a method of Event Object.

*/

let allAnchorTag = document.querySelectorAll('a');

allAnchorTag[2].addEventListener('click',function(event){

        event.preventDefault();
        console.log("Maja aa Gaya");
});




//event.target property in js.

//-> event.target property return that element on which event occurs.


//CASE 1 -> we apply the eventListener on individual paragraph.
//          so we can access each paragraph individualy.


let newDiv = document.createElement('div');

for(let i = 1; i<=10; i++){

    let newPara = document.createElement('p');
 
    newPara.textContent = "This is "+i+" Paragraph created in JS";

    newPara.addEventListener('click',function(EvenObject){

        console.log(this.textContent);  //Ye console mai print krega us paragraph ka content jispe event occour hogga.

    });

    newDiv.appendChild(newPara);
}

document.body.appendChild(newDiv);




//CASE 2 -> we apply the eventListener on parent div element inside which all the new heading element lies.
//          now we can access each heading tags individualy using the "event.target" property.


let parentDiv = document.createElement('div');

parentDiv.addEventListener('click',function(EventObj){

        console.log(event.target.textContent); //It will return the content of that element on which event is occured inside parentDiv element  .
});

for(let i = 1; i<=10; i++){

    let newHeading = document.createElement('h3');

    newHeading.textContent = 'This is '+i+' Heading.';

    parentDiv.appendChild(newHeading);
}


document.body.appendChild(parentDiv);



//
//Now we want to see the contant of only heading3 element of #container2 div
//and when we click on rest of content our event should not execute 
//so we use 'nodename' property of JS(event.target.nodeName)
//each element had their own 'nodeName'

let container2Div = document.querySelector('#container2');

container2Div.addEventListener('click',function(){

    if(event.target.nodeName === 'H4'){ //condition is jis element ka nodeName 'H4' hai uspe he -:

    console.log(event.target.textContent); // ye console print krwana.

    }

});


//ALAWAYS ADD YOUR SCRIPT FILE BELOW ALL THE CONTENT OF WEB PAGE OR WEBSITE.
//so, all the content of web page or site should load then our script will work.

//TO check that our content is fully loaded switch from Element panel to Network panel and then check below 
//there is "DOMContentLoaded" it will give you time that at how much time your full website is loaded fully.

