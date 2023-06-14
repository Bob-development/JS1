var userName = prompt('What`s ur name, bro?');
var userBirth = parseInt(prompt('What`s ur year of birth?'));
var userSurname = prompt('What`s ur surname?');

var userOld = 2023 - userBirth;

alert("Hello " + ' ' + userName + ' ' + userSurname + ' ' + userOld + " years old");

var userMoney = prompt('Do u like money?');

if (userMoney == 'yes'){
  alert("Welcome, pane!")
}
else if(userMoney == 'no'){
  alert("It`s business center, go away)")
}