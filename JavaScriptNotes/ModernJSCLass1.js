//RUN IN CONSOLE

/*

// 1)WINDOW -> Window is a global object which is created by our browser inside which lies  DOM and BOM.

// 2)DOM ->Document Object model .. We convert our full web page (all html code) into a JavaScript object we name this object as the document
           This is called Document object model,
// You can go to the console and type document you will get the document object of that particular page.

// 3)BOM ->Browser object model is used when JS want to communicate with browser other then the topic of content of the website ex->location etc…

//check image.
*/


//SOME IMPORTANT METHODS OF DOM

//1)getElementById('idName');

let idName = document.getElementById('container');//RUN IN CONSOLE.
console.log(idName);

//2)getElementByTagName('TagName');

let Tag = document.getElementsByTagName('marquee');
console.log(Tag);

//3)getElementByClassName('classname');

let classname = document.getElementsByClassName('text');
console.log(classname);


//#NOTE - Both 2 and 3 methods return the list of object as an output that is not an array.


//4)querySelector('#CSS SLECTOR');

let idSelector = document.querySelector('#container');//will select id
console.log(idSelector);

let classSelector = document.querySelector('.text');//will select single class which will apear first.
console.log(classSelector);

//To select multiple items we use querySelectorAll()

let multipleClassSelector = document.querySelectorAll('.text');//it will select all the class 
console.log(multipleClassSelector);

let tagSelector = document.querySelector('p');//It will select p tag.
console.log(tagSelector);



//SOME PROPERTY OF DOM TO MANIPULATE(get and set) OUR WEB PAGE

/*
//1) innerHTML
     ->using the innerHTML property we can get the element of web page and can get all the descendent elements of that element.
     ->using the innerHTML property we can set the content of element.

  2)outerHTML ->HOME WORK

  3)textContent -> will give us all the text 

  4)innerText -> will give us only those text whose css property is not set as "display : hidden"
*/

  console.log( tagSelector.innerHTML);//GET
  console.log(tagSelector.innerHTML = ' ')//SET empty //this will set empty our tagSelector which is geting the paragraph.


   

//ADDING NEW ELEMENT AND CONTENT USING THE JS 

//USING THE createElement() mehtod.

let divElement = document.querySelector("#container"); //1)Select the parent element

let newPara = document.createElement('p'); //2)Creating new <p> tag.

newPara.textContent = "This is Paragraph tag created IN JS"; //3)Giving content to the new <p> element.

divElement.appendChild(newPara); //4)Appending as child the new <p> tag with in the parent tag.
                                 //and the new child element will always will be append to the last of the parent tag.

console.log(newPara);


//POSITIONING ACCORDINGLY NEW CREATING ELEMENT IN JS FOR HTML

//To possition we use insertAdjacentHTML() method.

//this method takes two argument.
//1)location(where to insert), 2)Element/contant(what to insert)

//1)location has 4 values :
//  a)beforeBegin  ->beforeBegin of parent element.
//  b)afterBegin
//  c)beforeEnd
//  d)afterEnd    ->After end of parent element.

//.insertAjacentHTML(location,Element/contant);


let parentElement = document.querySelector('#container');

let newPreTag = document.createElement('pre');

newPreTag.textContent = `
                          This 
                          is  pre tag 
                          created 
                          in JS`;

parentElement.insertAdjacentElement('afterend',newPreTag);




//REMOVING ELEMENT USING THE JS 

//WE use .removeChild() method.

parentElement.removeChild(newPara);


{
  //CHECK THE BELOW ONE USING INTERNET OR MDN AI etc...

// //#And if we dont know the parent element we use a propery of child element that is ".parentNode"


// let newPTag = document.createElement("p");
// newPTag.textContent = 'This is content of new tag ';

// parentElement.appendChild(newPTag);//appending new tag

// // newPTag.parentNode.remove(newPTag);


}


//APPLYING CSS USING THE JS TO HTML ELEMENT

//TO APPLY CSS WE USE SOME PROPERTIES -:
/*
  1).style
  2).cssText
  3).setAttribute() is method
  4).className
  5).classList
*/

//1).style property

let paraElement = document.querySelector('#para');

paraElement.style.color = 'red';

paraElement.style.backgroundColor = 'yellow';

//The draw back of .style property is we can only style one property of css at a time.


//2).cssText

paraElement.style.cssText = "color: red; background-color: yellow; font-size = 3rem; ";


//3).setAttribute() is a method
//this method is also used to give element id and class names.

paraElement.setAttribute("style","color:blue; background-color: pink");

paraElement.setAttribute("class","paraClass1 paraClass2 paraClass3"); //CHECK IN INSPECT.
//we give the 3 class to paraElement.



//4).className
//This property is used to get  all the class names of a html element as an string.

paraElement.className; //OUTPUT IN CONSOLE : 'paraClass1 paraClass2 paraClass3' //All the class name of element as string
                                                                        //these class we give above



//5).classList
//This property is used to get all the class name of a html element as an array of class.
//this .classList has their own methods ex Add(),toggle() etc.. check mdn


paraElement.classList;  /* //OUTPUT IN CONSOLE

                                
DOMTokenList(3) ['paraClass1', 'paraClass2', 'paraClass3', value: 'paraClass1 paraClass2 paraClass3']
0
: 
"paraClass1"
1
: 
"paraClass2"
2
: 
"paraClass3"
length
: 
3
value
: 
"paraClass1 paraClass2 paraClass3"

*/