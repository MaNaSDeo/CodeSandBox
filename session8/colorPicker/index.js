/**
 * Add event listeners and handlers to
 * 1. Change the color of the "target" div
 * 2. Update the text Content on the "target" div
 */
const colorParent = document.getElementById("colors");
const targetDiv = document.getElementById("target");
colorParent.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubble up to the parent.
  // if (e.target.id === "red") {
  //   targetDiv.textContent = "Selected Color: Red";
  //   targetDiv.setAttribute("style", "background:red");
  // }
  // if (e.target.id === "green") {
  //   targetDiv.textContent = "Selected Color: Green";
  //   targetDiv.setAttribute("style", "background:green");
  // }
  // if (e.target.id === "blue") {
  //   targetDiv.textContent = "Selected Color: Blue";
  //   targetDiv.setAttribute("style", "background:blue");
  // }
  // if (e.target.id === "yellow") {
  //   targetDiv.textContent = "Selected Color: Yellow";
  //   targetDiv.style.background = "yellow";
  // }

  //2nd method
  if (e.target.id === "colors") return;
  targetDiv.style.background = e.target.id;
  targetDiv.textContent = `Selected Color: ${e.target.id}`;
});
