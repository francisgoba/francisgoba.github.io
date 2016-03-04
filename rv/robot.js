function setup() {
  
  var esferaForma = new THREE.SphereGeometry(2,100,100);
  var mediaesferaForma = new THREE.SphereGeometry( 1.15, 100, 50, 0, Math.PI*2, 3*Math.PI/2, Math.PI);
  var puntos=[];
      puntos.push(new THREE.Vector2(1.175,2.4));
      puntos.push(new THREE.Vector2(0.95,2));
  var revo = new THREE.LatheGeometry(puntos,100); 
  var cilindroForma = new THREE.CylinderGeometry(0.5,0.5,5,20);
  
  materialcilindro = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
      
  var esfera1 = new THREE.Mesh(esferaForma);
  var mediaesfera1 = new THREE.Mesh(mediaesferaForma);
  var revomalla = new THREE.Mesh(revo);
  
  mediaesfera1.position.y=2.35;

  var forma = new THREE.Geometry();
  
  //THREE.GeometryUtils.merge(forma, esfera1);
  THREE.GeometryUtils.merge(forma, mediaesfera1);
  THREE.GeometryUtils.merge(forma, revomalla);
  
  material = new THREE.MeshBasicMaterial( { color: 0x777777 } );
  
  cilindromalla = new THREE.Mesh( cilindroForma, materialcilindro );
  malla = new THREE.Mesh( forma, material );

  malla.rotation.x +=Math.PI/2;
  cilindromalla.rotation.x +=Math.PI/2;
  
  escena = new THREE.Scene();
  escena.add( malla );
  escena.add( cilindromalla );
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild( renderer.domElement );
}

function loop() {
  requestAnimationFrame( loop );
  
  //malla.rotation.x += 0.01;
  //malla.rotation.y += 0.01;
  
  renderer.render( escena, camara);
}

var escena, camara, render,material,materialcilindro,cilindromalla,malla;

setup();
loop();
