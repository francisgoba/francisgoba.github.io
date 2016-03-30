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
 //BB8modelocabeza.rotation.x=1;
 luzPuntual = new THREE.PointLight(0xffffff);
 luzPuntual.position.x=0;  
 luzPuntual.position.y=10;
 luzPuntual.position.z=30;


 cubo = new THREE.Mesh(new THREE.BoxGeometry(1,4,4), new THREE.MeshNormalMaterial());
 cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1,4,4), new THREE.MeshNormalMaterial());
 
 cubo.position.x=7;
 cubo2.position.x=-7;
 
 escena = new THREE.Scene();
 camara = new THREE.PerspectiveCamera();
 camara.position.z=40;
 
 raycaster1 = new THREE.Raycaster(BB8modelo.position,new THREE.Vector3(1,0,0));
 raycaster2 = new THREE.Raycaster(BB8modelo.position,new THREE.Vector3(-1,0,0));

 escena.add(cubo);
 escena.add(cubo2);
 escena.add(camara);
 escena.add(BB8modelo);
 escena.add(luzPuntual);
 
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
 step=0.1;
 cabezarota=-5.14;	
}

function loop(){

 obstaculo1 = raycaster1.intersectObject(cubo);
 obstaculo2 = raycaster2.intersectObject(cubo2);

 
 BB8modelo.cuerpo.rotation.z+=0.5;

 if ((obstaculo1.length > 0 && (obstaculo1[0].distance<=2)) || 
     (obstaculo2.length > 0 && (obstaculo2[0].distance<=2))) 
 {
  step=-step;
  if(cabezarota==-5.14)
  cabezarota=3.14;
  else
  cabezarota=-5.14;
 }

 BB8modelo.position.x += step;
 BB8modelo.cabeza.rotation.y=cabezarota;
 //BB8modelo.cuello.rotation.y=cabezarota;
 BB8modelo.antena1.rotation.y=cabezarota;
 BB8modelo.antena2.rotation.y=cabezarota;
 
 raycaster1.set(BB8modelo.position, new THREE.Vector3(1,0,0));
 raycaster2.set(BB8modelo.position, new THREE.Vector3(-1,0,0));
 renderer.render(escena,camara);
 requestAnimationFrame(loop);

}
var cubo,cubo2,escena,camara,renderer;
var raycaster1,raycaster2,step,cabezarota;
var obstaculo1,obstaculo2;
setup();
loop();