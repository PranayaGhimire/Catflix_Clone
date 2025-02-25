let allb=document.querySelector(".allb");
let moviesb=document.querySelector(".moviesb");
let seriesb=document.querySelector(".seriesb");
allb.style.backgroundColor="black";
allb.style.color="white";
allb.addEventListener("click",()=>
{
  moviesb.style.backgroundColor="rgba(107, 107, 152, 0.227)";
  moviesb.style.color="black";
  allb.style.backgroundColor="black";
  allb.style.color="white";
  seriesb.style.backgroundColor="rgba(107, 107, 152, 0.227)";
  seriesb.style.color="black";
});
moviesb.addEventListener("click",()=>
{
  moviesb.style.backgroundColor="black";
  moviesb.style.color="white";
  allb.style.backgroundColor="rgba(107, 107, 152, 0.227)";
  allb.style.color="black";
  seriesb.style.backgroundColor="rgba(107, 107, 152, 0.227) ";
  seriesb.style.color="black";
});
seriesb.addEventListener("click",()=>
{
  moviesb.style.backgroundColor="rgba(107, 107, 152, 0.227) ";
  moviesb.style.color="black";
  allb.style.backgroundColor="rgba(107, 107, 152, 0.227) ";
  allb.style.color="black";
  seriesb.style.backgroundColor="black";
  seriesb.style.color="white";
});