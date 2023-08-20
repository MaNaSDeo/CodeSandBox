const isPalindrome = (word) => {
  let n = word.length;
  for (let i = 0; i < n / 2; i++) {
    if (word[i] !== word[n - 1 - i]) return false;
  }
  return true;
};

const maskPalindrome = (sentence) => {
  const wordArray = sentence.split(" ");
  const resultArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    let wordCheck = "";
    if (isPalindrome(wordArray[i])) {
      for (let j = 0; j < wordArray[i].length; j++) {
        wordCheck = wordCheck + "*";
      }
      resultArray.push(wordCheck);
    } else resultArray.push(wordArray[i]);
  }
  console.log(resultArray);
};

const palindromeSentence = "this is a racecar";

maskPalindrome(palindromeSentence);
