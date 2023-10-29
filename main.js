const gitAPI = "https://api.github.com/users/";
let gitForm = document.getElementById("gitForm");
let userProfile = document.getElementById("git-name");
let button = document.getElementById("id-button");

gitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let profile = userProfile.value;

  fetch(gitAPI + profile)
    .then((response) => {
      return response.json();
    })
    .then((parsedJsonResponse) => {
      console.log(parsedJsonResponse);
    });
});
