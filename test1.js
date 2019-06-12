let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});
// add circle

let semicircles = [];
let colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
  "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b",
  "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];

for (let i = 0; i < 8; i++) {
  semicircles[i] = new Zdog.Ellipse({
    addTo: illo,
    diameter: 200 + 150 * i,
    quarters: 4,
    stroke: 3,
    color: "#fff",
  });
}

let sun = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 100,
  color: '#FFF222',
});

let mercury = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 15,
  color: '#828788',
  translate: {x: 100}
});

let venus = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 40,
  color: '#e7d520',
  translate: {x: 175}
});

let earth = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 40,
  color: '#4f4cb0',
  translate: {x: -250}
});

let mars = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 20,
  color: '#cc1e2c',
  translate: {x: 325 * Math.sin(Math.PI / 3), y: 325 * Math.cos(Math.PI / 3)}
});

let Jupiter = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 65,
  color: '#d8ca9d',
  translate: {x: 400 * Math.sin(2 * Math.PI / 3), y: 400 * Math.cos(2 * Math.PI / 3)}
});

let Saturn = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 55,
  color: '#fceead',
  translate: {x: 475 * Math.sin(4 * Math.PI / 3), y: 475 * Math.cos(4 * Math.PI / 3)}
});

let SaturnRing = new Zdog.Ellipse({
  addTo: illo,
  stroke: 5,
  diameter: 65,
  color: "#e2bf7d",
  rotate: {x: 1},
  translate: {x: 475 * Math.sin(4 * Math.PI / 3), y: 475 * Math.cos(4 * Math.PI / 3)}
});

let Uranus = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 50,
  color: '#62aee7',
  translate: {x: 550 * Math.sin(7 * Math.PI / 6), y: 550 * Math.cos(7 * Math.PI / 6)}
});

let Neptune = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 50,
  color: '#274687',
  translate: {x: 625}
});

illo.rotate.x = 1;

function animate() {
  // rotate illo each frame

  illo.rotate.z += 0.01;
  illo.updateRenderGraph();
  // animate next frae
  requestAnimationFrame( animate );
}
// start animation
animate();
