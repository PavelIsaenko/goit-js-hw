"use strict";

const findLongestWord = function (string) {
  const sentence = string.split(" ");
  //   console.log(sentence);
  let longWord = "";
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i].length > longWord.length) {
      longWord = sentence[i];
    }
  }
  return longWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
