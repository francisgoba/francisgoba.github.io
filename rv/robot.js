function setup() {
  
  var esferaForma = new THREE.SphereGeometry(2,100,100);
  
  var esfera1 = new THREE.Mesh(esferaForma);

  var forma = new THREE.Geometry();
  
  THREE.GeometryUtils.merge(forma, esfera1);
  
  material = new THREE.MeshBasicMaterial( { color: 0x777777 } );
  
  malla = new THREE.Mesh( forma );
  
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
  
  malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  
  renderer.render( escena, camara);
}

var escena, camara, render, malla, material;

setup();
loop();
