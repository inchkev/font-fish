import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Create the scene and a camera to view it
var scene = new THREE.Scene();

/**
* Camera
**/

// Specify the portion of the scene visiable at any time (in degrees)
var fieldOfView = 75;

// Specify the camera's aspect ratio
var aspectRatio = window.innerWidth / window.innerHeight;

/*
Specify the near and far clipping planes. Only objects
between those planes will be rendered in the scene
(these values help control the number of items rendered
at any given time)
*/
var nearPlane = 0.01;
var farPlane = 50000;

// Use the values specified above to create a camera
var camera = new THREE.PerspectiveCamera(
  fieldOfView, aspectRatio, nearPlane, farPlane
);

// Finally, set the camera's position
//camera.position.z = 5500;
//camera.position.y = -100;
camera.position.z = 120;
//camera.position.y = -100;

/**
* Renderer
**/

// Create the canvas with a renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

// Add support for retina displays
renderer.setPixelRatio( window.devicePixelRatio );

// Specify the size of the canvas
renderer.setSize( window.innerWidth, window.innerHeight );

// Add the canvas to the DOM
document.body.appendChild( renderer.domElement );

/**
* Load External Data
**/

// Create a store for image position information
let imagePositions = null;

// Create the scene and a camera to view it
var scene = new THREE.Scene();

/**
* Image
**/

// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();

// Load the image position JSON file
var file_loader = new THREE.FileLoader();
// loader.load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/data/image_tsne_projections.json', function(data) {
if (true) {
file_loader.load('font-coordinates-v3b.json', function( obj ) {
  imagePositions = JSON.parse(obj);
  let fonts = Object.keys(imagePositions);
  
  for (let i = 0; i < fonts.length; i++) {
    // Load an image file into a custom material
    var material = new THREE.MeshLambertMaterial({
      map: loader.load(fonts[i])
    });

    // create a plane geometry for the image with a width of 10
    // and a height that preserves the image's aspect ratio
    //var geometry = new THREE.PlaneGeometry(10, 10*0.46);
    var geometry = new THREE.PlaneGeometry(3, 3*0.46);

    // combine our image geometry and material into a mesh
    var mesh = new THREE.Mesh(geometry, material);

    // set the position of the image mesh in the x,y,z dimensions
    var [x, y] = imagePositions[fonts[i]];
    mesh.position.set(x, y, (i % 5)*2.0);

    // add the image to the scene
    scene.add(mesh);
  }
});
}

/**
* Lights
**/

// Add a point light with #fff color, .7 intensity, and 0 distance
// var light = new THREE.PointLight( 0xffffff, 1, 0 );
var light = new THREE.AmbientLight( 0xffffff, 1, 0 );

// Specify the light's position
// light.position.set(1, 1, 100 );

// Add the light to the scene
scene.add(light);



var controls = new TrackballControls(camera, renderer.domElement);
//var controls = new OrbitControls(camera, renderer.domElement);
controls.noRotate = true;
controls.keys = ['KeyA', 'KeyS', 'KeyD'];

/**
* Handle window resizes
**/

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  controls.handleResize();
});

/**
* Render!
**/

// The main animation function that re-renders the scene each animation frame
function animate() {
  requestAnimationFrame( animate );
  renderer.setClearColor (0xffffff, 0);
  renderer.render( scene, camera );
  controls.update();
}
animate();