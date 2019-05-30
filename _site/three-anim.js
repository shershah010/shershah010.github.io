// ------------------------------------------------
// THREE JS BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 7;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#ffffff");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.x = -1
scene.add( directionalLight );

// Create a Cube Mesh with basic material
var geometry = new THREE.SphereGeometry(4, 32, 32);
var material = new THREE.MeshPhysicalMaterial( { color: "#ff1111" } );
var sphere = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( sphere );

// Render Loop
var t = 0.01;
var render = function () {
  requestAnimationFrame( render );

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.position.x =  5 * Math.sin(t);
  t += 0.01;
  // Render the scene
  renderer.render(scene, camera);
};

render();
