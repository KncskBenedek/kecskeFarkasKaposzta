var tombSrc = [];
var kepTomb = [];
function  ID(elem){
    return document.getElementById(elem);
}

window.addEventListener("load", init);

function init(){
    ID("title").innerHTML = "Koncsik Benedek, Dervalics Attila";
    eventBe();
    //kiemel();
    keretHover();
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



function keretHover(){

    kepTomb.push();
    for (let index = 0; index < tombSrc.length; index++) {
        console.log(kepTomb[index])  
    }
}
function mozgatas(){

}


