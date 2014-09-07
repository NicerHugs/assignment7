//Ten Simple Javascript Exercises

// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max(a, b) {
  if (a > b) {
    return a;
  }
  else
    return b;
}

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  else if (b > a && b > c) {
    return b;
  }
  else
    return c;
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(character) {
  character = character.toLowerCase();
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    return true;
  }
  else
    return false;
}

// 4. Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function isPunctuation(character) {
  if (character === "." || character === "," || character === "'" || character === "\"" || character === " " || character === "!" || character === "?" || character === "$") {
    return true;
  }
  else
    return false;
}

function translate(string) {
  var newString = "";
  for (i = 0; i < string.length; i++) {
    var currLetter = string.slice(i, i + 1);
    if (isVowel(currLetter) === true ||
        isPunctuation(currLetter) === true) {
      newString = newString + currLetter;
    }
    else {
      newString = newString + currLetter + "o" + currLetter;
    }
  }
  return newString;
}

// 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];}
  return total;
}

function multiply(array) {
  var total = 1;
  for (var i = 0; i < array.length; i++) {
    total = total * array[i];}
  return total;
}

// 6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(string) {
  var newString = "";
  for (var i = string.length-1; i >= 0 ; i--) {
    var currLetter = string.slice(i, i + 1);
    newString = newString + currLetter;
  }
  return newString;
}

// 7. Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

var swedish = {
  "merry": "god",
  "christmas": "jul",
  "and":"och",
  "happy": "gott",
  "new": "nytt",
  "year": "år"};

function swedishTranslate(string) {
  var sliceStart = 0;
  var sliceEnd = 0;
  var newString = "";
  for (i = 0; i <= string.length; i++) {
    var currLetter = string.slice(i, i + 1);
    if (currLetter === " ") {
      sliceEnd = i;
      currWord =  string.slice(sliceStart, sliceEnd);
      if (swedish[currWord] === undefined) {
        newString = newString + (string.slice(sliceStart, sliceEnd)) + " ";}
      else {
        newString = newString + swedish[currWord] + " ";
      }
      sliceStart = sliceEnd + 1;
    }
  }
  sliceEnd = string.length;
  currWord =  string.slice(sliceStart, sliceEnd);
  if (swedish[currWord] === undefined) {
    newString = newString + (string.slice(sliceStart, sliceEnd));}
  else {
    newString = newString + swedish[currWord];
  }
  return newString;
}

// 8. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
  var wordLength = 0;
  array.forEach(function(word){
    if (word.length > wordLength) {
      wordLength = word.length;}});
  return wordLength;}

// 9. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(array, i) {
  var longWords = array.filter(function(word){
    return word.length > i;}
  );
  return longWords;
}

// 10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(string) {
  var frequency = {};
  for (var i = string.length-1; i >= 0 ; i--) {
    var currLetter = string.slice(i, i + 1);
    if (frequency[currLetter] === undefined) {
      Object.defineProperty(frequency, currLetter, {value: 1, configurable: true});
    }
    else {
      Object.defineProperty(frequency, currLetter, {value: frequency[currLetter] + 1});}}
    return frequency;
}
