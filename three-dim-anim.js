// Global Vairables
let renderer = new THREE.WebGLRenderer();
let scene = new THREE.Scene();
let width = window.innerWidth - 15;
let height = window.innerHeight - 100;
let camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
let animationFrame = null;
let planets = [];

class Planet {
  constructor(planet, orbit) {
    this.planet = planet;
    this.orbit = orbit;
  }
}

function createRenderer() {
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1);
  document.body.appendChild(renderer.domElement);
}

function setupCamera() {
  camera.position.z = 30;
}

function createLighting() {
  let directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
  let ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  directionalLight.position.set(-10, 10, -5);
  directionalLight.target.position.set(10, 0, 0);
  scene.add(directionalLight);
  scene.add(ambientLight);
}

function createPlanet(radius, smoothness, color) {
  let geometry = new THREE.SphereGeometry(radius, smoothness, smoothness);
  let material = new THREE.MeshLambertMaterial({ color: color, flatShading: THREE.FlatShading });
  return new THREE.Mesh(geometry, material);
}

function createOrbitUpdateFn(origin, xRadius, yRadius, zRadius, speed) {
  let t = 0;
  return function orbitUpdate(planet) {
    planet.position.x = origin[0] + xRadius * Math.sin(t);
    planet.position.y = origin[1] + yRadius * Math.sin(t);
    planet.position.z = origin[2] + zRadius * Math.cos(t);
    t += speed;
  }
}

function createSatelliteOrbitUpdateFn(dist, xRadius, yRadius, zRadius, speed) {
  let t = 0;
  return function orbitUpdate(planet, oPlanet) {
    planet.position.x = oPlanet.position.x + dist; //+ xRadius * Math.sin(t);
    planet.position.y = oPlanet.position.y + dist; //+ yRadius * Math.sin(t);
    planet.position.z = oPlanet.position.z + dist; //+ zRadius * Math.cos(t);
    t += speed;
  }
}

function initPlanets() {
  planets.push(new Planet(createPlanet(5, 32, 0xeeeeee), null));
  planets.push(new Planet(createPlanet(1, 32, 0xeeeeee), null));
  planets[0].orbit = createOrbitUpdateFn([0, 0, 0], 20, 10, 5, 0.02);
  planets[1].orbit = createSatelliteOrbitUpdateFn(6, -5, 0, 5, 0.02);
  for (let i = 0; i < planets.length; i++) {
    planets[i].planet.rotation.y = 15;
    scene.add(planets[i].planet);
  }
}

function rotate() {
  animationFrame = requestAnimationFrame(rotate);
  planets[0].orbit(planets[0].planet);
  planets[1].orbit(planets[1].planet, planets[0].planet);
  for (let i = 0; i < planets.length; i++) {
    planets[i].planet.rotation.x += 0.01;
  }
  renderer.render(scene, camera);
};

function movePlanets() {
  animationFrame = requestAnimationFrame(movePlanets);

  renderer.render(scene, camera);
  if (planets[planetIndex].planet.position.y > 13) {
    planetIndex += 1;
    cancelAnimationFrame(animationFrame);
    rotate();
  }
}

function mate() {
  cancelAnimationFrame(this.animationFrame);
  movePlanets();
}

function init() {
  createRenderer();
  setupCamera();
  createLighting();
  initPlanets();
  rotate();
}

init();
