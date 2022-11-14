//*<--------------- Query Selectors --------------->*// 

let myDiv = $('<div>Click Here:</div>');
let documentBody = $('body');
let textInput = $('#textInput');


//create ul element
let myList = $('<ul> </ul>');


//add div & list elements to document body -- you can append more than one thing to the body. This allows them to show up on the document body
documentBody.append(myDiv);   // shows your div on the body
documentBody.append(myList); //shows your list on the body


//*<--------------- Working Code --------------->*// 
myDiv.on('click', () => {
  console.log("Click here is functioning correctly:")
  myList.append(`<li>${textInput.val()}</li>`);
  console.log(textInput);
 
  // clear the text for the input box
  textInput.val("");

});
//instead of .style, you use .css
documentBody.css({
  backgroundColor: "green",
  color: "white"

})
