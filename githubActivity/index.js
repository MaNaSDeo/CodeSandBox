let nameArray = [];
let avatar_urlArray = [];
let html_urlArray = [];
// ,
fetch("https://api.github.com/users")
  .then((result) => result.json())
  .then((data) => {
    data.forEach(({ login }) => {
      nameArray.push(login);
    });
    data.forEach(({ avatar_url }) => {
      avatar_urlArray.push(avatar_url);
    });
    data.forEach(({ html_url }) => {
      html_urlArray.push(html_url);
    });
    console.log(nameArray);
    console.log(avatar_urlArray);
    console.log(html_urlArray);
    let exsitingDOMNode = document.querySelector(".card");
    let newImageElement = document.createElement("img");
    newImageElement.setAttribute("src", avatar_urlArray[0]);
    exsitingDOMNode.append(newImageElement);

    let linkDOMNode = document.querySelector(".gitDetail");
    let newLinkTextElement = document.createElement("a");
    newLinkTextElement.setAttribute("href", html_urlArray[0]);
    newLinkTextElement.textContent = nameArray[0];
    linkDOMNode.append(newLinkTextElement);
  });
