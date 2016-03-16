fuction setup(){
  THREE.ImageUtils.crossOrigin = '';
  var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
  var material = THREE.MeshBasicMaterial({map: textura});
  var forma = THREE.BoxGeometry(1,1,1);
  malla =THREE.Mesh(forma, material);
  escena = new THREE.scene();
  escena.add(malla);
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5;
  
  renderer = new THREE.WEbGLRenderer();
  renderer.setSize(window.innerHeight*0.95,window.innerWeight*0.95);
  document.body.appendChild(renderer.domElement);
}
function loop(){
  requestAnimationFrame(loop);
  malla.rotation.x+=0.01;
  malla.rotation.y+=0.01;
}
setup();
loop();
