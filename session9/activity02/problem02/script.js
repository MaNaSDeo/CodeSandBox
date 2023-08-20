/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  const sortedlistELe = document.getElementById("sorted-list");
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  arr.forEach((element) => {
    const liEle = document.createElement("li");
    liEle.textContent = element;
    sortedlistELe.appendChild(liEle);
  });
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);
