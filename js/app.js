'use strict';
let result1 = 0;



//question1
function guess1() {

let major =prompt('Is my major psycology?');
switch (major.toLowerCase())
{
case 'yes':
case 'y':
  result1=result1+1;
  alert('It is Correct !');
  console.log(major);
  break;
case 'no':
case 'n':
  alert('Try Again!!');
  console.log(major);
  break;
}
}
guess1();







//question2

function guess2(){
let age =prompt('Am I 27 years old?');
switch (age.toUpperCase())
{
case 'yes':
case 'y':
  alert('Wrong');
  console.log(age);
  break;
case 'no':
case 'n':
  result1=result1+1;
  alert('You guessed it ');
  console.log(age);
  break;
}
}
guess2();




//question3

function guess3(){
let Language= prompt('Dose I speak turkish language?');
switch (Language.toLowerCase())
{
case 'yes':
case 'y':
  alert('just A little ');
  console.log(Language);
  break;
case 'no':
case 'n':
  result1=result1+1;
  alert('Unfortunately');
  console.log(Language);
  break;
}
}
guess3();





//question4

function guess4(){
let name1= prompt('Is my name Muhammad?');
switch (name1.toUpperCase())
{
case 'yes':
case 'y':
  result1=result1+1;
  alert('yes my name is muhammad');
  console.log(name1);
  break;
case 'no':
case 'n':
  alert('NO NO NO');
  console.log(name1);
  break;
}
}
guess4();




//question5


function guess5(){
let hopes= prompt('is favorite hobbies are programming?');
switch (hopes.toLowerCase())
{
case 'yes':
case 'y':
  result1=result1+1;
  alert('yes true');
  console.log(hopes);
  break;
case 'no':
case 'n':
  alert('NOOOO!');
  console.log(hopes);
  break;
}
}
guess5();



//qustion 6


function guess6(){
alert('You have 4 guesses, guess from 1-20');


let guess = Number(prompt('what is your guess ?'));

for (let i=0;i<=4;i++){
  if (15 === guess){
    result1=result1+1;
    alert('congratulations its right');
    break;
  }else{
    guess = prompt('Try Again not matched');
  }
}
}
guess6();



// qustion 7


function guess7(){
alert('You have 6 guesses, guess one off my favorite animals');

let animals = ['cats ,dogs,ants'];
let guess1 = prompt('guess one off my favorite animals');

for(let i=0;i<=6; i++){
  if (guess1 ==='dogs' || guess1==='monkyes' || guess1 ==='fieshs'){
    result1=result1+1;
    alert('Correct !!');
    break;
  }else{
    guess1 = prompt('Wrong !');
  }
}
alert('Your result ' + result1);
}
guess7();

