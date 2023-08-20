/**
 * Append a new child element to the parent Node element passed as argument
 * - Child element should be of specified tag type
 * - Child element should contain the specified text as its content
 * @param {Node} parentId
 * @param {String} childTagType
 * @param {String} text
 */
function addNewChildElementToParent(parentId, childTagType, text) {
  const parentIdNode = document.getElementById(parentId);
  const childTagNode = document.createElement(childTagType);
  childTagNode.textContent = text;
  parentIdNode.appendChild(childTagNode);
}

// addNewChildElementToParent("numbers-list", "li", "3"); // Appends 3 as a list item
addNewChildElementToParent("text-paras", "p", "Hey there");
