// let n = Number(prompt("Enter a no"));
// do{
//     let a = Number(prompt("Enter a First no"));
//     let b= Number(prompt("Enter a second no"));
//     let op = prompt("Enter a op");

//     switch(op){
//         case "+":
//           console.log("result" + (a+b));
//           break;
//         case"-":
//         console.log("result " +(a-b));
//         break;
//         case"/":
//         if(b !== 0)console.log(a/b)
//         else console.log("provide valid code" )
//         break;
        
//         case"%":
//         console.log("resut"+ a%b);
//         default:
//             console.log("not Valid");
        
//     }       
// }while(op === "Yes");

// let com = Math.floor((Math.random()*100)+1);
// let userInput
// do{
//     if(isNaN(userInput) || userInput<0 || userInput>100) {
//         console.log("Please enrte avalid ");
//         continue;
//     }

//     if(userInput>com)  console.log("too high");
//     else if (userInput<com) console.log("too  low");
//     else console.log("congrts");
// }while(userInput == "Yes");



// let a  = prompt("Enter a no").toLowerCase();
// do{
//     let starter =prompt("Enter a First no");
//     let main= prompt("Enter a second no");
//     let desert = prompt("Enter a op");
//     let salad = prompt("Enter a startup");

//     switch(startup){

//         case "startup":
//             do{
//                 console.log("PANER");
//                 switch(dal){
//                     case "DAl":
//                         console.log("Dal");
//                         break;
                
//                     case "Matar":
//                      console.log("Matar");
//                      break;
//                     }
//                }
//         }
//     }

//2..Prime no
//let a = Number(prompt("Enter a no"));

// let isPrime = true;

// for(let i=2; i<=a; i++){
//     if(a % i == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime) console.log( a+ "Prime no");
// else console.log( a+ "Not a Prime");


// 3.. Sum of n terms
// let sum = 0;
// for(let i=1; i<=3; i++){
//      sum += i;
// }
// console.log(sum);

// let n = Number(prompt("Enter a no"));
// let fact = 1;
// for(let i =1; i<=n; i++){
//     fact = fact * i;
// }
// console.log(fact);
let n = Number(prompt("Enter a no"));
let rev =0,rem;

while(n>0){
    rem = n%10;
    rev = (rev*10) + rem;
    n = Math.floor(n/10);
}
console.log(sum);