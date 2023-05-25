 //timer countdown
 let day=document.getElementById("day");
 let hrs=document.getElementById("hrs");  
 let min=document.getElementById("min");   
 let sec=document.getElementById("sec");
 function countDown(){
 let todayDate= new Date();
 let newYear= new Date("1 1 2023");        
 let difference=newYear-todayDate;
 let Day=Math.floor(difference/1000/60/60/24);
 let Hrs=Math.floor((difference/1000/60/60)%24);
 let Min=Math.floor((difference/1000/60)%60);
 let Sec=Math.floor((difference/1000)%60);
 day.innerText=Day<10? "0"+Day:Day;
 hrs.innerText=Hrs<10? "0"+Hrs:Hrs;
 min.innerText=Min<10? "0"+Min:Min;     
 sec.innerHTML=Sec<10? "0"+Sec:Sec;
 }
 const myInterval = setInterval(countDown,1000);


let priceBox =document.querySelectorAll(".price-card");
let priceplan =document.querySelectorAll(".price-card h2");
for(let i=0;i<=priceBox.length;i++){
    priceBox[i].addEventListener("mouseover",borderNone);
    priceBox[i].addEventListener("mouseleave",borderActive);
    function borderNone(){
        priceBox[i].style.border="transparent"
        priceBox[i].style.transition="all .4s ease"
        priceplan[i].style.color="#0d6efd"
    }
    function borderActive(){
        priceBox[i].style.border="1px solid #ccc"
        priceplan[i].style.color="#000"
    }
    
};




