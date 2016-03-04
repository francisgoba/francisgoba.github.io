function setup() {
  
  var esferaForma = new THREE.SphereGeometry(2,100,100);
  var mediaesferaForma = new THREE.SphereGeometry( 1.15, 100, 50, 0, Math.PI*2, 3*Math.PI/2, Math.PI);
  var mediaesferaForma2 = new THREE.SphereGeometry( 1.5, 100, 50, 0, Math.PI*2, 7*Math.PI/4, Math.PI/4);
  
  
  var esfera1 = new THREE.Mesh(esferaForma);
  var mediaesfera1 = new THREE.Mesh(mediaesferaForma);
  var mediaesfera2 = new THREE.Mesh(mediaesferaForma2);
  
  mediaesfera1.position.y=2.5;
  mediaesfera2.rotation.x=Math.PI;
  mediaesfera2.position.y=3.55;
  

  var forma = new THREE.Geometry();
  
  THREE.GeometryUtils.merge(forma, esfera1);
  THREE.GeometryUtils.merge(forma, mediaesfera1);
  THREE.GeometryUtils.merge(forma, mediaesfera2);
  
  material = new THREE.MeshBasicMaterial( { color: 0x777777 } );
  
  malla = new THREE.Mesh( forma, material );
  
  escena = new THREE.Scene();
  escena.add( malla );
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild( renderer.domElement );
}

function loop() {
  requestAnimationFrame( loop );
  
  //malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  
  renderer.render( escena, camara);
}

var escena, camara, render,material,malla;

setup();
loop();
