const viewbutton = document.querySelectorAll(".viewbutton");
const viewcontent = document.querySelectorAll(".viewcontent");



for(let i=0;i<3;i++){
    viewbutton[i].addEventListener("click",()=>{
        if(viewcontent[i].style.display == "none"){
            viewbutton[i].innerHTML = "View Less";
            viewcontent[i].style.display = "block";
        }
        else{
            viewbutton[i].innerHTML = "View More";
            viewcontent[i].style.display = "none";

        }
    })
}

console.log(viewbutton);