function Cuerpo(){
  THREE.Object3D.call(this);
  this.cuerpo=new THREE.Mesh(new THREE.SphereGeometry(2,100,100));
  this.add(this.cuerpo)
}

function Cabeza(){
  THREE.Object3D.call(this);
  this.cabeza=new THREE.Mesh(new THREE.SphereGeometry(1.15,100,50,0,Math.PI*2,3*Math.PI/2,Math.PI));
  var puntos=[];
    puntos.push(new THREE.Vector2(1.175,2.4));
    puntos.push(new THREE.Vector2(0.95,2));
  this.cuello=new THREE.Mesh(new THREE.LatheGeometry(puntos,100));
  this.antena1=new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.8,100));
  this.antena2=new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.5,100));
  this.cabeza.position.y=2.35;
  this.antena1.position.y=3.85;
  this.antena1.position.x=0.13;
  this.antena2.position.y=3.6;
  this.antena2.position.x=-0.15;
  this.add(this.cabeza);
  this.add(this.cuello);
  this.add(this.antena1);
  this.add(this.antena2);
}

Cuerpo.prototype=new THREE.Object3D();
Cabeza.prototype=new THREE.Object3D();

function setup(){
  cuerpoBB8 = new Cuerpo();
  cabezaBB8 = new Cabeza();
  escena = new THREE.Scene();
  escena.add(cuerpoBB8);
  escena.add(cabezaBB8);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=10;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize (window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild( renderer.domElement );
}

function loop(){
  requestAnimationFrame( loop );
  renderer.render( escena, camara);
  cuerpoBB8.rotation.y+=0.01;
  cabezaBB8.rotation.x+=0.01;
}

var escena,camara,renderer;
var cabezaBB8,cuerpoBB8;

setup();
loop();
