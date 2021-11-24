function getRandomInt(range) {
  return Math.floor(Math.random() * range);
}

function getRandomWord() {
  return words[getRandomInt(words.length)];
}

function getIndexOfWord(word) {
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] == word[0]) {
      return i;
    }
  }
  
  return -1;
}

// TODO: validate input

function CheckWord(answer) {
  // Check if all words already had been
  if (parseInt($("#numberOfDoneWords").text()) + 1 > $("#numberOfUndoneWords").text()) {
    alert("Stop");
    return;
  }
  
  // Check the answer
  // TODO: Card animation, show answer
  if ($(".answer--input").val() == answer[1]) {
    $("#right").text(parseInt($("#right").text()) + 1);
  } else {
    $("#wrong").text(parseInt($("#wrong").text()) + 1);
  }
  $(".answer--input").val(""); // Clear answer

  // Add 1 to number of done words and delete current word
  $("#numberOfDoneWords").text(parseInt($("#numberOfDoneWords").text()) + 1);
  words.splice(getIndexOfWord(answer), 1);

  // Generate the next word
  word = getRandomWord();
  $("#word").text(word[0]);
}

// Call a function CheckWord if enter is clicked
$(".answer--input").keypress(function(event) {
  let key = event.which;
  if (key == 13) {
    CheckWord(word);
    return false;  
  }
});

var word; // Current word
const words = [
  ["melon", "диня"],
  ["soap", "мило"],
  ["corn", "кукурудза"],
  ["spine", "хребет"],
  ["fist", "кулак"],
  ["together", "разом"],
  ["yell", "кричати"],
  ["jaw", "щелепа"],
  ["toe", "палець ноги"],
  ["beard", "борода"],
];

// Get first word when page are loaded
word = getRandomWord();
$("#word").text(word[0]);
$("#numberOfUndoneWords").text(words.length);