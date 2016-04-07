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
  this.antena2.position.x=-0.13;
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
  escena = new THREE.Scene();
  escena.add(BB8modelo);
  escena.add(luzPuntual);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=10;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize (window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild( renderer.domElement );
}

function loop(){
  requestAnimationFrame( loop );
  renderer.render( escena, camara);
  //BB8modelo.cabeza.rotation.y+=0.01;
  //BB8modelo.cuello.rotation.y+=0.01;
  //BB8modelo.antena1.rotation.y+=0.01;
  //BB8modelo.antena2.rotation.y+=0.01;
  BB8modelo.cuerpo.rotation.x+=0.5;
  //BB8modelo.rotation.y+=0.01;
  //BB8modelo.rotation.x+=0.01;
}

var escena,luzPuntual,camara,renderer,controls;
var cabezaBB8,cuerpoBB8;

setup();
loop();
