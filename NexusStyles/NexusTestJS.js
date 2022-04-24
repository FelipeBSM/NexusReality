var screenValue = 0;
var actualValue = 0;

const nextButton = document.getElementById("btn-next");
const jumpButton = document.getElementById("btn-jump");

const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const holeTut = document.getElementById("tuto-plane-cointainer");
const tutoImageDiv = document.getElementsByClassName("removable");
const imagesContainers = document.getElementsByClassName("order-images");

const mobileInputContainer =  document.getElementById("mobile-input-container");




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
        
        for(var i=0,len=tutoImageDiv.length; i< len;i++){
            tutoImageDiv[i].innerHTML='';
            
        }


        
        var t1 = "Use o seu giroscópio para rotacionar sua visão.";
        var t2 = "No canto inferior direto, segure o botão ilustrado abaixo para movimentar-se pelo ambiente.";
        var p1= document.createElement('p');
        var p2= document.createElement('p');
        p1.innerHTML=t1;
        p2.innerHTML=t2;
        tutoImageDiv[0].appendChild(p1);
        tutoImageDiv[2].appendChild(p2);

        var i1= document.createElement('img');
        var i2= document.createElement('img');

        i1.setAttribute("src", "Modelos/rotate_info.png")
        imagesContainers[0].appendChild(i1);

        i2.setAttribute("src", "Modelos/mobileInput.png")
        imagesContainers[1].appendChild(i2);

        


        var script = document.createElement("script");
        script.setAttribute("type","text/javascript");
        script.setAttribute("src", "NexusStyles/MobileController.js");
        document.body.appendChild(script);
    }
    else{
        console.log("nop mob");
        mobileInputContainer.remove();
    }
}
function DetectMobile(){
    return ((window.innerWidth<=820) && (window.innerHeight<=1200));
}
