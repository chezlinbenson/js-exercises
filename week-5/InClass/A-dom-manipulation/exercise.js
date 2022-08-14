/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

document.querySelector("#mainHeader");
console.log(document.querySelectorAll("p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const button = document.querySelector("#alertBtn");

// Event Listener

button.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
// let paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet
// myElement.appendChild(paragraph); // now the element is added to our view, but it's empty

// const button = document.querySelector("#addTextBtn");

// Event Listener
const buttons = document.querySelector("#addTextBtn");
let myElement = document.querySelector(".buttons");
buttons.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  myElement.appendChild(paragraph);
  paragraph.innerText = "How are you?";
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
largerLinksBtn;
("article-title article-title--sidebar");
("#");

const largerLinksBtn = document.querySelector("#largerLinksBtn");
let linksToLarge = document.querySelectorAll("#");
console.log(largerLinksBtn);

largerLinksBtn.addEventListener("click", function () {
  // linksToLarge.innerText = title;
  largerLinksBtn.forEach((link) => {
    linksToLarge.style.fontSize = "25px";
  });
  //   // inputBox.value = title;
  //   linksToLarge.style.backgroundColor = "blue";
  //   linksToLarge.style.fontSize = "40px";
});
