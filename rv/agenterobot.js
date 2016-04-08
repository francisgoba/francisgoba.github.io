function Agent(x=0, y=0){
 THREE.Object3D.call(this);
 this.position.x=x;
 this.position.y=y;
}

Agent.prototype = new THREE.Object3D();
Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment() {
 THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function() {
 for(var i=0; i<this.children.length; i++){
  if(this.children[i].sense!==undefined)
   this.children[i].sense(this);
 }
}

Environment.prototype.plan = function() {
 for(var i=0; i<this.children.length; i++){
  if(this.children[i].plan!==undefined)
   this.children[i].plan(this);
 }
}

Environment.prototype.act = function() {
 for(var i=0; i<this.children.length; i++){
  if(this.children[i].act!==undefined)
   this.children[i].act(this);
 }
}

Environment.prototype.setMap=function(map){
 var offset=Math.floor(map.length/2);
 for(var i=0;i<map.length;i++){
  for(var j=0;j<map.length;j++){
   if(map[i][j]=="x")
    this.add(new Wall(1,j-offset,-(i-offset)));
   else if(map[i][j]=="r")
    this.add(new BB8(0.5,j-offset,-(i-offset)));
  }
 }
}