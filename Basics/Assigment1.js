1.//  let age = prompt('Enter a no');
// if(age<18){
//     console.log("You are minor");
// }
// else if(age>18 && age<60){
//     console.log("You are adult");
// }
// else{
//     console.log("You are senior citizen");
// }
// ---------------------------------------------
2// let a = prompt("Enter a no");
// let b = prompt("Enter a 2nd no:");
// let c = a+b;
// if(c % 2 == 0){
//     console.log("Even Sum");
// }
// else{
//     console.log("OddSum");
// }// ---------------------------------------------

3.// function check(charcter){
//     if(charcter === charcter.toUpperCase()){
//         return 'Uppercase';
//     }
//     else if(charcter === charcter.toLowerCase()){
//         return 'Lowercase';
//     }
//     else{
//         return"Mixed case";
//     }     
// }
// console.log(check('G'));
// console.log(check('g'));
// console.log(check('Geeks'));

4.// let a = prompt("Enter a no");
// let b = prompt("Enter a 2nd no:");
// let c = prompt('Enter a 3rd No');
// if(a>b && a>c){
//     console.log("A is Largest");
// }
// else if(b>a && b>c){
//     console.log("B is Largest");
// }
// else{
//     console.log("C is Largest");
// }

5.// function isleap(year){
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
6.// let year = prompt("Enter a year");
// year = parseInt(year);

// if (isleap(year)) {
//     console.log(year + " is a Leap Year.");
// } else {
//     console.log(year + " is NOT a Leap Year.");
// }

7.// function check(Name,hour){
//     let time = parseInt(time.split(":")[0]);
//     if(time >"5AM" && time <"12PM"){
//         console.log("Good Morning", [Name]);
//     }
//     else if(time >"12PM" && time <"5PM"){
//         console.log("Good Afternoon", [Name]);
//     }
//     else if(time >"5PM" && time <"9PM"){
//         console.log("Good Evening", [Name]);
//     }
//     else{
//         console.log("Good Night", [Name]);
//     }     
// }


8.// let  Name = prompt('Enter a Name:');
// let  password = prompt("Enter a password:");
// let n = "Shruti";
// let x = 'abcd';

// if(Name === n && password === x){
//     console.log("login Succesful");
// }
// else{
//     console.log("Incorrect Username")
// }

9.// let a = Number(prompt("Enter a no"));
// function Palidrome(){

// }
// let sum = 0;rem = 0;
// while(a > 0){
//    rem = a % 10;
//    sum +=rem;
//    a = Math.floor(a/10);
// }
// console.log(rev);

//  10.let word = prompt('Enter a word').toLowerCase();
// function isPalidrome(word){
//       let left = 0 , right  = word.length-1;
//       while(left<right){
//           if(word[left] !== word[right]){
//                   return false;
          
//           left++;
//           right--;
//           }
//       }
//       return true;
// }
// console.log(isPalidrome(word)?"Palidrome": "Not a Palidrome");

// let a = Number( prompt("Enter a no"));
// let b = Number(prompt("Enter a 2nd no:"));
// let op = prompt("Enter a op:");
// let result ;

// if(op == '+'){
//   result = a + b;
// }
// else if(op == "-"){
//     result = a-b;
// }
// else if(op == "*"){
//     result = a*b;
// }
// else{
//     result= a/b;
// }
// console.log( `${a} ${op} ${b} = ${result}`);