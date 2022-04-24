
let direction = new THREE.Vector3();
let movement = new THREE.Vector3();

function touchEndListener(){
    movement = new THREE.Vector3();
}

function clickListener(ev){
    
    
    let scene = document.getElementById("m-s");
    let camDirection = scene.camera.getWorldDirection();
    camDirection.multiplyScalar(0.4);

    movement.x+=camDirection.x;
    movement.z+=camDirection.z;

    
}


AFRAME.registerComponent('user-control',{
    tick: function(){
        if(movement.length()==0){
            return;
        }

        let cam = document.getElementById("cam");
        let pos = cam.getAttribute('position');

        pos.x+=movement.x;
        pos.z+=movement.z;
        
        cam.setAttribute('poisition',pos);
    },
    init : function(){
      let frontB = document.getElementById("front-btn");

      frontB.addEventListener('touchstart', clickListener);
      frontB.addEventListener('touchend',touchEndListener);
    },
});