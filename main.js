const gitAPI = "https://api.github.com/users/gatejarr";
const reposAPI = "https://api.github.com/users/gatejarr/repos";
let userProfile = document.getElementById("gitName");
let button = document.getElementById("idButton");
let results = document.getElementById("results");
let head = document.getElementById("head");
let avatar = document.getElementById("imageContainer");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");

fetch(gitAPI)
  .then((response) => {
    return response.json();
  })
  .then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let image = new Image();
    image.src = parsedJsonResponse.avatar_url;
    imageContainer.appendChild(image);

    let name = document.createElement("h1");
    name.innerText = parsedJsonResponse.name;
    head.appendChild(name);

    let location = document.createElement("h4");
    location.innerText = "Location: " + parsedJsonResponse.location;
    bio.appendChild(location);

    let gitUrl = document.createElement("a");
    gitUrl.innerText = "GitHub URL: " + parsedJsonResponse.html_url;
    gitUrl.href = parsedJsonResponse.html_url;
    bio.appendChild(gitUrl);

    let usrName = document.createElement("h4");
    usrName.innerText = "GitHub username: " + parsedJsonResponse.login;
    bio.appendChild(usrName);

    // let reposAPI = document.createElement("h4");
    // reposAPI.innerText = parsedJsonResponse.repos_url;
    // repos.appendChild(reposAPI);

    results.appendChild(head);
    results.appendChild(bio);
    // results.appendChild(repos);
  });

fetch(reposAPI)
  .then((response) => {
    return response.json();
  })
  .then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let reposAPI = document.createElement("ul");
    reposAPI.innerText = parsedJsonResponse[0]["name"];
    repos.appendChild(reposAPI);

    results.appendChild(repos);
  });
// const gitRepos = parsedJsonResponse.repos_url;
// fetch(gitRepos).then((response) =>{
//   return response.json();
// })
// .then((parsedJsonResponse);
// console.log(parsedJsonResponse);)
