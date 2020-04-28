const findLongestWord = function (string) {
  let words = string.split(' ');

  let biggestWord = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > biggestWord.length) {
      biggestWord = words[i];
    }
  }
  return biggestWord;
};
const v1 = findLongestWord('May the force be with you');
console.log(v1);
