const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
  const response = await fetch(GITHUB_API);
  const result = await response.json();

  const resultArray = result.map((element) => {
    // console.log(element.login);
    return element.login;
  });
  return resultArray;
}
getGithubUsernames();
/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
  // 1. Get the parent element
  const parentElement = document.getElementById("usernames-list");
  // 2. For each value in values
  values.forEach((element) => {
    // 2.1 Create an <li> element with text as the value
    const li = document.createElement("li");
    li.textContent = element;

    // 2.2 Append the element to the parent element
    parentElement.append(li);
  });
}

async function main() {
  const usernamesArray = await getGithubUsernames();
  console.log(usernamesArray);

  displayValuesAsList(usernamesArray);
}

main();
