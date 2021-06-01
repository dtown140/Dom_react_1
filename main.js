console.dir(document);

// Step1: Get Elements by ID
const pageHeader = document.getElementById("page-header");
const mainHeading = document.getElementById("main-heading");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const btn = document.getElementById("btn");
const para4 = document.getElementById("para4");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const black = document.getElementById("black");


//Step 2: Change header and background color
mainHeading.textContent = "New DOM Layout";

pageHeader.classList.add('bg-success');
pageHeader.classList.remove('bg-dark');

//Step 3: Get element by tag name
var para = document.getElementsByTagName("p");
para[0].textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
para[1].textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

//Step 4: Add click event
btn.addEventListener("click", function(){para[2].textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."});

//Step 5: Change box colors
red.classList.add('bg-danger');
red.classList.remove('bg-white');

blue.classList.add('bg-primary');
blue.classList.remove('bg-white');

yellow.classList.add('bg-warning');
yellow.classList.remove('bg-white');

green.classList.add('bg-success');
green.classList.remove('bg-white');

black.classList.add('bg-dark');
black.classList.remove('bg-white');
