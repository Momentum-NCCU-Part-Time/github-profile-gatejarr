const gitAPI = "https://api.github.com/users/";
let gitForm = document.getElementById("gitForm");
let userProfile = document.getElementById("gitName");
let button = document.getElementById("idButton");
let results = document.getElementById("results");
let head = document.getElementById("head");
let avatar = document.getElementById("imageContainer");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let newSearch = false;

gitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let profile = userProfile.value;

  fetch(gitAPI + profile)
    .then((response) => {
      return response.json();
    })
    .then((parsedJsonResponse) => {
      console.log(parsedJsonResponse);

      let image = new Image();
      image.src = parsedJsonResponse.avatar_url;
      imageContainer.appendChild(image);

      let name = document.createElement("h2");
      name.innerText = parsedJsonResponse.name;
      head.appendChild(name);

      let location = document.createElement("h3");
      location.innerText = "Location: " + parsedJsonResponse.location;
      bio.appendChild(location);

      let gitUrl = document.createElement("a");
      gitUrl.innerText = "GitHub URL: " + parsedJsonResponse.html_url;
      gitUrl.href = parsedJsonResponse.html_url;
      bio.appendChild(gitUrl);

      let usrName = document.createElement("h3");
      usrName.innerText = "GitHub username: " + parsedJsonResponse.login;
      bio.appendChild(usrName);

      let gitRepos = document.createElement("h4");
      gitRepos.innerText = parsedJsonResponse.repos_url;
      repos.appendChild(gitRepos);

      results.appendChild(head);
      results.appendChild(bio);
      results.appendChild(repos);
    });
});
