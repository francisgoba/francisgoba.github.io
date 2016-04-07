function BB8(){
  THREE.Object3D.call(this);
  THREE.ImageUtils.crossOrigin = '';
  var texturahead = THREE.ImageUtils.loadTexture('http://francisgoba.github.io/rv/bb8head2.jpg');
  var textura = THREE.ImageUtils.loadTexture('http://francisgoba.github.io/rv/bb8body.jpg');
  //var textura = THREE.ImagenUtils.load.Texture()

  this.cuerpo=new THREE.Mesh(new THREE.SphereGeometry(2,100,100), new THREE.MeshPhongMaterial({map:textura}));
  this.cabeza=new THREE.Mesh(new THREE.SphereGeometry(1.15,100,50,0,Math.PI*2,3*Math.PI/2,Math.PI),new THREE.MeshPhongMaterial({map:texturahead}));
  this.cuello=new THREE.Mesh(new THREE.CylinderGeometry(1.15,1,0.2,100),new THREE.MeshPhongMaterial({color:0xffffff}));
  this.antena1=new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.8,100),new THREE.MeshPhongMaterial({color:0xffffff}));
  this.antena2=new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.5,100),new THREE.MeshPhongMaterial({color:0xffffff}));

  this.cuerpo.rotation.z=-0.25;  
  this.cabeza.position.y=1.95;
  this.antena1.position.y=3.35;
  this.antena1.position.x=0.13;
  this.antena2.position.y=3.1;
  this.antena2.position.x=-0.15;
  this.cuello.position.y=1.85;

  this.add(this.cabeza);
  this.add(this.cuello);  
  this.add(this.cuerpo);
  this.add(this.cuerpo);
  this.add(this.antena1);
  this.add(this.antena2);
}

BB8.prototype=new THREE.Object3D();

function setup(){

 BB8modelo = new BB8();
 BB8modelo.rotation.x=Math.PI/2; 	
 //BB8modelocabeza.rotation.x=1;
 luzPuntual = new THREE.PointLight(0xffffff);
 luzPuntual.position.x=0;  
 luzPuntual.position.y=10;
 luzPuntual.position.z=30;


 cubo = new THREE.Mesh(new THREE.BoxGeometry(1,20,4), new THREE.MeshNormalMaterial());
 cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1,20,4), new THREE.MeshNormalMaterial());
 cubo3 = new THREE.Mesh(new THREE.BoxGeometry(21,1,4), new THREE.MeshNormalMaterial());
 cubo4 = new THREE.Mesh(new THREE.BoxGeometry(21,1,4), new THREE.MeshNormalMaterial());
 
 
 cubo.position.x=10;
 cubo2.position.x=-10;
 cubo3.position.y=10;
 cubo4.position.y=-10;
 
 escena = new THREE.Scene();
 camara = new THREE.PerspectiveCamera();
 camara.position.z=40;
 
 raycaster1 = new THREE.Raycaster(BB8modelo.position,new THREE.Vector3(1,0,0));
 raycaster2 = new THREE.Raycaster(BB8modelo.position,new THREE.Vector3(-1,0,0));
 raycaster3 = new THREE.Raycaster(BB8modelo.position,new THREE.Vector3(0,1,0));
 raycaster4 = new THREE.Raycaster(BB8modelo.position,new THREE.Vector3(0,-1,0));

 escena.add(cubo);
 escena.add(cubo2);
 escena.add(cubo3);
 escena.add(cubo4);
 escena.add(camara);
 escena.add(BB8modelo);
 escena.add(luzPuntual);
 
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
 step=0.1;
 step2=-0.5;
 cabezarota=3.14;	
}

function loop(){

 obstaculo1 = raycaster1.intersectObject(cubo);
 obstaculo2 = raycaster2.intersectObject(cubo2);
 obstaculo3 = raycaster3.intersectObject(cubo3);
 obstaculo4 = raycaster4.intersectObject(cubo4);
 
 

 if ((obstaculo1.length > 0 && (obstaculo1[0].distance<=2)) || 
     (obstaculo2.length > 0 && (obstaculo2[0].distance<=2)) ||
     (obstaculo3.length > 0 && (obstaculo3[0].distance<=2)) ||
     (obstaculo4.length > 0 && (obstaculo4[0].distance<=2)))
 {
  step=-step;
  step2=-step2;
  if(cabezarota==3.14)
  cabezarota=-5.14;
  else
  cabezarota=3.14;
 }

 BB8modelo.cuerpo.rotation.z+=step2; 
 BB8modelo.position.x+=step;
 BB8modelo.cabeza.rotation.y=cabezarota;
 BB8modelo.cuello.rotation.y=cabezarota;
 BB8modelo.antena1.rotation.y=cabezarota;
 BB8modelo.antena2.rotation.y=cabezarota;
 
 raycaster1.set(BB8modelo.position, new THREE.Vector3(1,0,0));
 raycaster2.set(BB8modelo.position, new THREE.Vector3(-1,0,0));
 raycaster3.set(BB8modelo.position, new THREE.Vector3(0,1,0));
 raycaster4.set(BB8modelo.position, new THREE.Vector3(0,-1,0));	

 renderer.render(escena,camara);
 requestAnimationFrame(loop);

}
var cubo,cubo2,cubo3,cubo4,escena,camara,renderer;
var raycaster1,raycaster2,raycaster3,raycaster4,step,step2,angulo,cabezarota;
var obstaculo1,obstaculo2,obstaculo3,obstaculo4;
setup();
loop();