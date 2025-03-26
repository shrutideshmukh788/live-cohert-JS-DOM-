// var btn = document.querySelector("button");
// var h5 = document.querySelector("h5");
// var check =0;

// btn.addEventListener('click',function(){
//     if(check == 0){
//         h5.innerHTML = "Friends"
//         h5.style.color = 'green';
//         btn.innerHTML ='Add Friends';
//         console.log("Friendship h");
//         check = 1;
//     }else{
//         h5.innerHTML = "Stranger"
//         h5.style.color = 'red';
//         btn.innerHTML ='Remove Friends';
//         check = 0;
//     }
// })

//2
var btn = document.querySelector("button");
var h = document.querySelector('box');

btn.addEventListener('click',function(){
      var c1 = Math.floor(Math.random()*256);
      var c2 = Math.floor(Math.random()*256);
      var c3 = Math.floor(Math.random()*256);
      

      box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})