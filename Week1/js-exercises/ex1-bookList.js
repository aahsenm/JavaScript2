'use strict';

/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element

  //iteration

  for ( let i = 0; i<books.length; i++) {
    let titleOfBook = books[i].title;
    let authorOfBook = books[i].author;
    let bookRead = books[i].alreadyRead;

    // created p element with the book title and author

    let elementOfP = document.createElement("p");
    elementOfP.innerHTML = titleOfBook + "-" + authorOfBook;

    //created ul element

    let ulElement = document.createElement("ul"); 
    ulElement.style.display = "flex";
    ulElement.style.justifyContent = "center";
    ulElement.style.alignItems = "center";

    //created li element
    
    let liElement = document.createElement("li"); 
    liElement.style.display = "flex";
    liElement.style.justifyContent = "center";
    liElement.style.alignItems = "center";
    liElement.style.width= "100%";
    liElement.style.listStyle = "none";
    liElement.style.padding = "20px";
    liElement.style.margin = "20px";
    
    //added background color 
    liElement.style.backgroundColor = bookRead === true ? "green" : "red";

    //added images for bookcovers
    let elementOfBookCover = document.createElement("img");
    if (titleOfBook === "The Design of Everyday Things") {
      elementOfBookCover.src = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
    }
		else if (titleOfBook === "The Most Human Human") {
			elementOfBookCover.src = "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
		}
		else if (titleOfBook === "The Pragmatic Programmer") {
			elementOfBookCover.src = "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg";
		}
		elementOfBookCover.height = 250;
    elementOfBookCover.title = titleOfBook;
   
    //created a container 

    let containerElement = document.querySelector("#bookList");
    containerElement.style.display = "flex";
    containerElement.style.margin = "auto";
    containerElement.style.width = "80%";

    // appended

    liElement.appendChild(elementOfP);
    liElement.appendChild(elementOfBookCover);
    ulElement.appendChild(liElement); 
    containerElement.appendChild(ulElement);
    document.body.appendChild(containerElement); 
  
  }

  }

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }

];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);