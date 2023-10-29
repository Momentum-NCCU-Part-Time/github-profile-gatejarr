const gitAPI = "https://api.github.com/users/";
let gitForm = document.getElementById("gitForm");
let userProfile = document.getElementById("gitName");
let button = document.getElementById("idButton");
let results = document.getElementById("results");
let head = document.getElementById("head");
let avatar = document.getElementById("imageContainer");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");

gitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let profile = userProfile.value;

  fetch(gitAPI + profile)
    .then((response) => {
      return response.json();
    })
    .then((parsedJsonResponse) => {
      console.log(parsedJsonResponse);
      // let avatar = document.createElement("img");
      // avatar.innerHTML = parsedJsonResponse.avatar_url;
      // bio.appendChild(avatar);

      let image = new Image();
      image.src = parsedJsonResponse.avatar_url;
      imageContainer.appendChild(image);

      let name = document.createElement("h2");
      name.innerText = parsedJsonResponse.name;
      head.appendChild(name);

      let location = document.createElement("h3");
      location.innerText = parsedJsonResponse.location;
      bio.appendChild(location);

      let gitUrl = document.createElement("h3");
      gitUrl.innerText = parsedJsonResponse.html_url;
      bio.appendChild(gitUrl);

      let usrName = document.createElement("h3");
      usrName.innerText = parsedJsonResponse.login;
      bio.appendChild(usrName);

      let gitRepos = document.createElement("h4");
      gitRepos.innerText = parsedJsonResponse.repos_url;
      repos.appendChild(gitRepos);

      results.appendChild(head);
      results.appendChild(bio);
      results.appendChild(repos);
    });
});
