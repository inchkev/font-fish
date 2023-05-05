import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from "gsap";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import FontFaceObserver from "fontfaceobserver"


var load_once = true;
var all_meshes = [];

let container, stats;
let camera, scene, raycaster, renderer, controls;
let texture_loader, file_loader;

let INTERSECTED;
let SELECTED;
let theta = 0;

const pointer = new THREE.Vector2();
const radius = 100;

const mesh_map = new Map();

// store image position information
// let imagePositions;


function view_umap() {
  file_loader.load('font-coordinates-v4u.json', function( obj ) {
    const imagePositions = JSON.parse(obj);
    let fonts = Object.keys(imagePositions);

    for (let i = 0; i < fonts.length; i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( all_meshes[i].position, {
        duration: 1.5,
        ease: "expo.out",
        x: (x-14)*17,
        y: (y-7)*14,
        z: (i % 5)*0.5,
      } );
    }
  });
}

function view_tsne() {
  file_loader.load('font-coordinates-v4t.json', function( obj ) {
    const imagePositions = JSON.parse(obj);
    let fonts = Object.keys(imagePositions);

    for (let i = 0; i < fonts.length; i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( all_meshes[i].position, {
        duration: 1.5,
        ease: "expo.out",
        x: x*1.6,
        y: y*2,
        z: (i % 5)*0.5,
      } );
    }
  });
}

function view_umap_grid() {
  file_loader.load('font-coordinates-v4lu.json', function( obj ) {
    const imagePositions = JSON.parse(obj);
    let fonts = Object.keys(imagePositions);

    for (let i = 0; i < fonts.length; i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( all_meshes[i].position, {
        duration: 1.5,
        ease: "expo.out",
        x: (x-0.5)*200,
        y: (y-0.5)*80,
        z: 0,
      } );
    }
  });
}

function view_tsne_grid() {
  file_loader.load('font-coordinates-v4lt.json', function( obj ) {
    const imagePositions = JSON.parse(obj);
    let fonts = Object.keys(imagePositions);

    for (let i = 0; i < fonts.length; i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( all_meshes[i].position, {
        duration: 1.5,
        ease: "expo.out",
        x: (x-0.5)*200,
        y: (y-0.5)*80,
        z: 0,
      } );
    }
  });
}

$(document).ready(function() {
  $('.view-selector__option').click(function() {
    if ($(this).hasClass('selected')) {
      return;
    }
    $('.view-selector__option').removeClass('selected');
    $(this).addClass('selected');

    // Run function for selected option
    const value = $(this).data('value');
    switch(value) {
      case 'umap':
        view_umap();
        break;
      case 'umap-grid':
        view_umap_grid();
        break;
      case 'tsne':
        view_tsne();
        break;
      case 'tsne-grid':
        view_tsne_grid();
        break;
      default:
        break;
    }
  });
});


//


init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  //camera.position.z = 5500;
  //camera.position.y = -100;
  camera.position.z = 75;
  //camera.position.y = -100;


  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf6f6f5 );

  const light = new THREE.PointLight( 0xffffff, 1, 0 );
  // var light = new THREE.AmbientLight( 0xF6F6F5, 1, 0 );
  // light.position.set(1, 1, 100 );
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  controls = new TrackballControls(camera, renderer.domElement);
  //var controls = new OrbitControls(camera, renderer.domElement);
  controls.noRotate = true;
  controls.keys = ['KeyA', 'KeyS', 'KeyD'];

  raycaster = new THREE.Raycaster();
  texture_loader = new THREE.TextureLoader();
  file_loader = new THREE.FileLoader();
  init_tsne();

  stats = new Stats();
  // container.appendChild( stats.dom );

  //

  document.addEventListener('mousemove', onPointerMove);
  document.addEventListener('dblclick', onDblClick);
  window.addEventListener('resize', onWindowResize);
}

function animate() {
  requestAnimationFrame( animate );

  render();

  controls.update();
  stats.update();
}

function render() {
  // find intersections
  raycaster.setFromCamera( pointer, camera );

  const intersects = raycaster.intersectObjects( scene.children, false );
  if ( intersects.length > 0 ) {

    if ( INTERSECTED != intersects[0].object ) {
      if ( INTERSECTED ) {
        INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      }

      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0x999999 );
    }

  } else {

    if ( INTERSECTED ) {
      INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    }
    INTERSECTED = null;

  }

  renderer.render( scene, camera );
}


function init_tsne() {
  file_loader.load('font-coordinates-v4t.json', function( obj ) {
    const imagePositions = JSON.parse(obj);
    let fonts = Object.keys(imagePositions);

    for (let i = 0; i < fonts.length; i++) {
      // Load an image file into a custom material
      var material = new THREE.MeshLambertMaterial({
        map: texture_loader.load("previews/" + fonts[i] + ".png")
      });

      // create a plane geometry for the image with a width of 10
      // and a height that preserves the image's aspect ratio
      var geometry = new THREE.PlaneGeometry(5, 5*0.356);

      // combine our image geometry and material into a mesh
      material.transparent = true;
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      all_meshes.push(mesh);

      mesh_map.set(mesh.uuid, fonts[i]);
    }
    load_once = false;

    view_tsne();
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
  controls.handleResize();
};

function onPointerMove( event ) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ( ( event.clientX - rect.left ) / ( rect.width - rect.left ) ) * 2 - 1;
  pointer.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;

  // pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  // pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onDblClick( event ) {
  // on click, print mesh info of intersected object
  if ( SELECTED == INTERSECTED ) return;

  if ( SELECTED ) {
    SELECTED.material.transparent = true;
    gsap.to( SELECTED.position, {
      duration: 0.5,
      ease: "expo.out",
      z: SELECTED.previous_z,
    } );
    SELECTED = null;
  }

  if ( INTERSECTED ) {
    SELECTED = INTERSECTED;
    const font_name = mesh_map.get(SELECTED.uuid);
    SELECTED.material.transparent = false;
    SELECTED.previous_z = SELECTED.position.z;
    gsap.to( SELECTED.position, {
      duration: 0.5,
      ease: "expo.out",
      z: 4,
    } );

    update_font_info(font_name, function() {
      $('#info-container').show();
    });

  } else {
    $('#info-container').hide();
  }
}

function update_font_info(fontString, callback) {
  const fontParts = fontString.split(' ');
  const weight = fontParts.pop();
  const name = fontParts.join(' ');

  // map font weights from numbers to normal/bold
  const weightMap = {
    '400': 'Normal',
    '700': 'Bold'
  };

  // load the Google font dynamically and apply it to the sample text
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = `https://fonts.googleapis.com/css?family=${name.replace(' ', '+')}:${weight}`;
  document.head.appendChild(fontLink);

  // wait for font to be loaded
  const font = new FontFaceObserver(name);
  console.log(`trying to load ${fontString}...`);
  return font.load(weight).then(function() {
    console.log(`loaded ${fontString}`);

    const gfontLink = $('<a>')
      .attr('href', `https://fonts.google.com/specimen/${name.replace(' ', '+')}`)
      .attr('target', '_blank')
      .html(name);
    $('#info h2').html(gfontLink);


    // $('#info-container h2').css('font-family', name);
    $('.font-info .style').text(`${weightMap[weight]} ${weight}`);
    $('.font-sample-sentence, .font-sample-alphabet, .font-custom-input')
      .css('font-family', name).css('font-weight', weight);

    if (callback) callback();
  });
}
