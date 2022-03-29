var tombSrc = [];

function  ID(elem){
    return document.getElementById(elem);
}

window.addEventListener("load", init);

function init(){
    ID("title").innerHTML = "Koncsik Benedek, Dervalics Attila";
    eventBe();
    rarakKiemel();
}

function $(elem){
    return document.querySelectorAll(elem);
}

function tombAd(){
    var src = event.target.src;
    //console.log(src);
    tombSrc.push(src);
    for (let index = 0; index < tombSrc.length; index++) {
        console.log(tombSrc[index]);
        
    }
}

function eventBe(){   
    for (let index = 0; index < 3; index++) {
        $("img")[index].addEventListener("click", tombAd);
    }
}




function rarakKiemel(){
    
    for (let index = 0; index < 3; index++) {
        $("img")[index].addEventListener("mouseover", kiemel);
        $("img")[index].addEventListener("mouseout", kiemelLeszed);
    }
}

function kiemel(){
    var i = 0;
        var melyik = event.target.src;
        
        while (i < 3 && !(melyik.includes($("img")[i].src))) {
            i++;
        }
        $("img")[i].style.border = "2px solid red";

}

function kiemelLeszed(){
    for (let index = 0; index < 3; index++) {
        $("img")[index].style.border = "0px solid red";
    }
    

}