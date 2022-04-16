
var movies=[
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1D4dDtAHQsXlglnj-zpG-Dk0-ih8raYgZJw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4IDl7-7DGswHLvCDo-Fnt4lHHqsJs5WAUw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR402QupMLPPL_knw200s_COpFdbhtfOvmmEw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D9aHP6fDrm8Y-4nlkXo1MXEHZ23cBf-Cuw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1F5ki6GuwieRwBkl6ZaEGheViDYBoilUVyA&usqp=CAU",
]


localStorage.setItem("list",JSON.stringify(movies));

let i=0;
let id;
let images=document.createElement("img");
images.id="imagesize";

data=JSON.parse(localStorage.getItem("list"))||[];

setInterval(function(){
    document.getElementById("slideshow").innerHTML=null;
    if(i==data.length){
        i=0;
    }
    images.src=movies[i];
    i++;
    document.getElementById("slideshow").append(images)
},3000)