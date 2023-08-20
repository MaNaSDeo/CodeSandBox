/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  const existingDOMNode = document.querySelector("#sorted-list");
  for (let i = 0; i < arr.length; i++) {
    const newDOMNode = document.createElement("li");
    newDOMNode.textContent = arr[i];
    existingDOMNode.appendChild(newDOMNode);
  }
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);
