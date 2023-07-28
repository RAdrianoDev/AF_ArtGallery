// get elements from textarea and count
let comments = document.getElementById("message");
let count = document.getElementById("count");

// add type event to textarea
comments.addEventListener("input", function () {
  // get the value from textarea
  let text = comments.value;

  // count the number of characters
  let numberCharacters = text.length;

  // count update
  count.innerHTML = numberCharacters;
});
