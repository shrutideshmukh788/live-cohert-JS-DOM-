let arr =[
    {
        team:'CSK',
        primary:'green',
        secondary:'yellow'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black'
    },
    {
        team:'MI',
        primary:'Green',
        secondary:'Pink'
    },
    {
        team:'KKR',
        primary:'orange',
        secondary:'black'
    },
    {
        team:'SRH',
        primary:'purple',
        secondary:'pink'
    },
    {
        team:'DC',
        primary:'brown',
        secondary:'skin'
    },
]

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');

btn.addEventListener('click',function(){
  var num = Math.floor(Math.random()*arr.length)
  var winner= arr[num];
  console.log(winner);
  
  h1.innerHTML= winner.team;
  h1.style.backgroundColor = winner.primary;
  h1.style.color = winner.secondary
})