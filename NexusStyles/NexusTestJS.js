var screenValue = 0;
var actualValue = 0;

const nextButton = document.getElementById("btn-next");
const jumpButton = document.getElementById("btn-jump");

const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const holeTut = document.getElementById("tuto-plane-cointainer");
const tutoImageDiv = document.getElementById("removable");

window.onload = ResolvePlat();

nextButton.addEventListener('click',event=>{

    screenValue+=1;
    if(screenValue===1){
        StepForward();
    }
    else if(screenValue===2){
        QuitTutorial();
    }

})


jumpButton.addEventListener('click',event=>{

    QuitTutorial();
})

function QuitTutorial(){
 holeTut.innerHTML='';
 holeTut.style.display="none";
 
}
function StepForward(){
    i1.style.display="none";    
    i2.style.display="block";
}
function ResolvePlat(){
    if(DetectMobile() === true){
        tutoImageDiv.setAttribute('class','none')
        tutoImageDiv.innerHTML='';

        
        var t = "Use o touch para se movimentar no ambiente";
        var p= document.createElement('p');
        p.innerHTML=t;
        tutoImageDiv.appendChild(p);
    }
    else{
        console.log("nop mob");
    }
}
function DetectMobile(){
    return ((window.innerWidth<=820) && (window.innerHeight<=1200));
}
