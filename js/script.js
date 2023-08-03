// Get all list items and add a "close" button to them
var native = document.getElementsByTagName("LI");
for (var i = 0; i < native.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); // Unicode character for "x"
  span.className = "close";
  span.appendChild(txt);
  native[i].appendChild(span);
}

// Get the ding sound element by ID
const dingSound = document.getElementById('dingSound');

// Hide the list item when clicking on the "close" button
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var dive = this.parentElement;
    setTimeout(function() {
      dive.style.display = "none";
    }, 400); // Wait for 500 milliseconds before hiding the element
  }
}

// Show a message when the user completes a task
function show_Message(message) {
  messageContainer.innerText = message;
  messageContainer.style.display = 'block';
  setTimeout(function() {
    messageContainer.style.display = 'none';
  }, 4000); // Hide the message after 3 seconds
}

// Add a "checked" symbol when clicking on a list item and play ding sound
var list = document.querySelector('ul');
var messageContainer = document.getElementById('message-container');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    dingSound.play();
    if (ev.target.classList.contains('checked')) {
      show_Message('Good job! Keep up the great work.');
    }
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  // create a new list item
  var li = document.createElement("li");
  // get the value of the input field
  var inputValue = document.getElementById("myInput").value;
  // create a text node with the input value
  var t = document.createTextNode(inputValue);
  // append the text node to the list item
  li.appendChild(t);
  
  // check if the input field is empty
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    // append the list item to the unordered list
    document.getElementById("myUL").appendChild(li);
  }
  
  // clear the input field
  document.getElementById("myInput").value = "";

  // create a close button for the list item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // add an onclick event to the close button
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      // get the parent element of the close button (i.e., the list item)
      var dive = this.parentElement;
      // hide the list item by setting its display property to "none"
      dive.style.display = "none";
    }
  }
}

