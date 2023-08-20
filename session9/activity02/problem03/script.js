const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
  const response = await fetch(GITHUB_API);
  const jsonArr = await response.json();

  const nameArray = jsonArr.map((element) => {
    return element.login;
  });
  return nameArray;
}

/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
  const usernamesListEle = document.getElementById("usernames-list");

  values.forEach((element) => {
    const liEle = document.createElement("li");
    liEle.textContent = element;
    usernamesListEle.appendChild(liEle);
  });
}

const main = async () => {
  const resultNameArray = await getGithubUsernames();

  displayValuesAsList(resultNameArray);
};
main();
