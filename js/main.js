let toggleBtn = document.getElementById("toggleBtn");

let links = document.getElementById("links");

toggleBtn.onclick = function () {
  
    links.classList.toggle("list");

};

document.addEventListener("click", (e) => {

    if(e.target !== toggleBtn && e.target !== links){

        if(links.classList.contains("list")){

            links.classList.toggle("list");

        }

    } 
});

links.onclick = function (e) {

    e.stopPropagation();

}
