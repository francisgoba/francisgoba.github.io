function setup(){
 cubo = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
 cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
 cubo.position.x=0.7;
 cubo2.position.x=-0.7;
 escena = new THREE.Scene();
 camara = new THREE.PerspectiveCamera();
 camara.position.z=5;
 raycaster = new THREE.Raycaster();
 raycaster.setFromCamera(new THREE.Vector2(0,0), camara);
 escena.add(cubo);
 escena.add(cubo2);
 escena.add(camara);
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
 step=0.01;
}
function loop(){
 var intersects = raycaster.intersectObjects(escena.children);
 if (intersects.length > 0) step=-step;
 cubo.rotation.x += step;
 cubo.rotation.y += step;
 cubo2.rotation.x += step;
 cubo2.rotation.y +=step;  
 renderer.render(escena,camara);
 requestAnimationFrame(loop);
}
var cubo,cubo2,escena,camara,renderer;
var raycaster,step;
setup();
loop();