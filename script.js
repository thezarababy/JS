// function myData() {
//this is function declaration
// }
// myData();

// const myName = function () {
//   //this  is function expression
// };
// myName();

// const sayHello = () => {
//   //this is arrow function
// };
// sayHello();
// calculate the area of a cone
// 1/3 pie r square h
// function areaOfACone(r, h) {
//   answer = 1 / 3 * (Math.PI * r * h);
//   console.log(answer);
// }
// areaOfACone(7,9);
// quadratic equation
// function quadraticEquation(a,b,c){
//     let d = b**2 - 4*a*c;
//     let rootOne=((-b+ Math.sqrt(d))/(2*a));
//      let rootTwo=((-b-  Math.sqrt(d))/(2*a));
//      console.log(`the first root is ${rootOne} the second root is ${rootTwo}`)

// }
// quadraticEquation(1,5,6);

// function stringReverse() {
//   string = " Good evening everyone";
//   console.log(string.split(" ").reverse().join());
// }
// stringReverse();

//write a function that returns the longest word in a sentence

// function longestWord(){
//     let whoAreYou ="we are begining javascript now";
//     console.log(whoAreYou.length)
//       console.log(whoAreYou.split(" "));
//       console.log(Math.max (whoAreYou.split(" ")[0].length, whoAreYou.split(" ")[1].length, whoAreYou.split(" ")[2].length, whoAreYou.split(" ")[3].length, whoAreYou.split(" ")[4].length));

// }
// longestWord();

// let firstName = "Bro";
// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);
// let online = true;
// let isStudentAdmitted = false;
// console.log(`sis is online:${online}`);
// console.log(`is StudentAmitted: ${isStudentAdmitted}`)

// let fullName= "Joy Okoduwa"
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = ` Your name is ${fullName}`;
// document.getElementById("p2").textContent =`you are ${age} years old`;
// document.getElementById("p3").textContent = `student: ${student}`;
//  let students = 30
//  students= students + 1;
//  students = students - 1;
//  students = students*2;
//  students =students / 2;
//  students =students **3;
//0R
// students+=1;
// students-=1;
// students/=2;
// students**=2;
// students%=4;
//  console.log(students)

//operator prescedence
// 1. parenthesis ()
// 2. exponents **
// 3. multiplication & division &modulo * / %
// 4. addition & subtraction + - //
// let result= 6 / 2 ** (2+5);
// console.log(result.toFixed(2));

// let userNamejoy= window.prompt("what is your username?");
// console.log(userName)
// let btn=document.getElementById("btn");
// function display(){
// let input = document.getElementById("myText").value;
// document.getElementById("intro").textContent = `welcome ${input}`
// // console.log(input);

// }
// btn.addEventListener("click",display)

//data conversion

// let age = window.parseInt(prompt("How old are you?"));
// // age = Number(age);
// age+=1;
// console.log(age);

// const PI = 3.142;
//  let radius = window.parseInt(prompt("Enter the radius"));
//  let circumference = 2 * PI * radius;

// console.log(circumference.toFixed(3))
// let submit = document.getElementById("submit");

// function result(){
//   const PI = 3.142;
//   let radius = document.getElementById("radius").value;
//   let circumference = 2 * PI * radius ;
//   document.getElementById("myH3").textContent = circumference.toFixed(2)

// }
// submit.addEventListener("click", result)

//COUNTER PROGRAM
// const decrease = document.getElementById("btn1");
// const reset= document.getElementById("btn2");
// const increase = document.getElementById("btn3");
// const countLabel =document.getElementById("countLabel");
// let count = 0;

// function toIncrease(){
//   count++;
//   countLabel.textContent = count;
// }

// increase.addEventListener("click", toIncrease)
// increase.onclick= function(){

//   count++;
//   countLabel.textContent = count;
// }
// decrease.onclick= function(){
//   count--;
//   countLabel.textContent = count;
// }
// reset.onclick= function(){
//   count=0;
//   countLabel.textContent = count;
// }

//RANDOM NUMBER GENERATOR
// let randomNum= Math.floor(Math.random()*6) +1 ;   //gives you random number btw 0 and 6
// console.log(randomNum);

// const myBtn = document.getElementById("myBtn");
// const myLabel =document.getElementById("myLabel");
// const min=1;
// const max=2;
// let randomNum;
// myBtn.onclick=()=>{
//   randomNum= Math.floor(Math.random()*6)+min;
//   myLabel.textContent =randomNum;
// }
//IF
// let time = 9;
// if (time<12){
//   console.log("good morning");
// }else{
//   console.log("good afternoon")
// }
// let age = 25;
// let hasLiscence= false;
// if(age>=16){
//   console.log("you are old enough to drive");
//   if(hasLiscence){
//       console.log("you have your liscence");
//   }else{
//       console.log("you do not have your liscence yet")
//   }
// }else{
//   console.log("you must be 16+ to have a liscence")
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const result = document.getElementById("result");
// let age ;
// mySubmit.onclick=()=>{
//   age = parseInt(myText.value);

//   if(age>=16){
//     result.textContent= "you are old enough to drive"
//     console.log();
//     if(hasLiscence){
//       result.textContent= "you have your liscence"
//     }}else{
//       result.textContent ="you do not have your liscence yet"
//    }
// }
//Promise
//new Promise((resolve,reject )=>{asynchronous code})
//})
//Do these tasks in order
//Clean the house
//write some codes
//go for class
//go for meeting
//come back home

// setTimeout(writeCode,2500)
// setTimeout(goToClass,500)
// setTimeout(goToMeeting,2000)
// setTimeout(comeBackHome,1000)
// function cleanHouse(){
//   return new Promise((resolve,reject) => {
//     setTimeout(()=> {
//     resolve("clean the house");
//     },1500);
//   });

// }
// function writeCode(callback){
//   console.log("write some code");
//   callback()
// }
// function goToClass(callback){
//   console.log("go to class");
//   callback()
// }
// function goToMeeting(callback){
//   console.log("go to meeting");
//   callback()
// }
// function comeBackHome(callback){
//   console.log("come back home");
//   callback
// }
// cleanHouse(()=>{
//   writeCode(()=>{
//     goToClass(()=>{
//       goToMeeting(()=>{
//         comeBackHome(()=>console.log("you have finishes the task for the day"));
//       });
//     });
//   });
// });

//checkBox and Radio btn

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCard = document.getElementById("masterCard");
// const payPal = document.getElementById("payPal");
// const submit = document.getElementById("submit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// submit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent =
//       " 🎉congratulations you have successfuly subscribed";
//   } else {
//     subResult.textContent = "❗ Oops! you have to subscribe first";
//   }
//   if (visaBtn.checked) {
//     paymentResult.textContent = "you are paying with visa";
//   } else if (masterCard.checked) {
//     paymentResult.textContent = "you are paying with master card";
//   } else if (payPal.checked) {
//     paymentResult.textContent = "you are paying with PayPal";
//   } else {
//     paymentResult.textContent = "you must select a payment method";
//   }

// };

//tenary Operator= shortcut to if and else statement

// let userName = "theZaraBaby";
// console.log(userName.charAt(0))
// console.log(userName.indexOf("a"))
// console.log(userName.lastIndexOf("a"))
// console.log(userName.length)
// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase())
// console.log(userName.repeat(4))
// console.log(userName.startsWith("a"))
// console.log(userName.endsWith("y"))
// console.log(userName.includes("Zara"))

// let phoneNumber = "081-062-227-153";
// phoneNumber= phoneNumber.replace("-", "");
// console.log(phoneNumber);

// async function getData(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
// }
// getData()


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response =>response.json())
// .then(data => console.log(data));


// let p = new Promise((resolve,reject) => {
//     let num = 3 + 9
//     if(num == 7){
//         resolve("success")

//     }else{
//         reject("failed")
//     }
    
// })
// p.then((message) =>{
//     console.log("this is in the then" + message)
// }).catch((message)=>{
//     console.log("this is in the catch" + message)
// })

const recordVideoOne = newPromise((resolve,reject) =>{
    resolve("video 1 recorded")
})
const recordVideoTwo = newPromise((resolve,reject) =>{
    resolve("video 2 recorded")
})

const recordVideoThree = newPromise((resolve,reject) =>{
    resolve("video 3 recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((messages)=>{
    console.log(messages);
})
