const createNumeronym = (str) => {
  // strArr = [];
  if (str.length < 4) return str;
  else {
    return `${str.charAt(0)}${str.length}${str.charAt(str.length - 1)}`;
  }
};

// const main = (string) => {
//   const word = createNumeronym(string);
//   console.log(word);
// };

// main("apple");

const maskSentence = (sentence) => {
  const checkArray = sentence.split(" ");
  const resultArray = [];
  checkArray.forEach((element) => {
    resultArray.push(createNumeronym(element));
  });
  const resultString = resultArray.join(" ");
  // console.log(resultArray);
  console.log(resultString);
};

const sentenceToCheck =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

maskSentence(sentenceToCheck);
