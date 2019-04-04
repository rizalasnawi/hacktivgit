function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 
}


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}


$(document).ready(function() {
  $("#list-repos").click(function(){
  }); 
});

$( "button:first" ).click(function() {
    getRepos()
});
  
function getRepos() {
    $
    .ajax({
    url: 'http://localhost:3000/users',
    method: 'GET'
    })
    
    .done((data) => {
      console.log(data)
         $(`#list-repos`).append(
          `<br><a href = "${data.html_url}"> Rizal </a>`
         )
         $(`#list-repos`).append(
          `<li>${data.login}</li>`
         )
    })
    .fail((jqXHR, textStatus) => {
          console.log('failed', textStatus)
      })
    }

function createRepos () {
  $
   .ajax({
     url: 'http://localhost:3000/users',
     method: 'POST'
   })
   .done((data) => {

   })
   .fail((jqXHR, textStatus) => {
     console.log('failed', textStatus)
   })
}
