let runsScored = [20, 100, 53, 44, 21];
// let newArray = [];

// for (let i = 0; i < runsScored.length; i++) {
//   let currScore = runsScored[i];

//   if (currScore >= 50) {
//     newArray.push(currScore);
//   } else {
//     newArray.push(0);
//   }
// }
// console.log(newArray); // prints [ 0, 100, 53, 0, 0 ]
const halfCentury = runsScored.map((element) => {
  if (element > 50) return element;
  else return 0;
});
console.log(halfCentury);
