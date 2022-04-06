$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >=18) {
    alert("You're old enough to vote!");
    $('#voting').show();
  } else {
    alert("You're not old enough to vote");
    $('#under-18').show();
  }
});