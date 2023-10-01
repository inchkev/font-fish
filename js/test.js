import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from "gsap";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import FontFaceObserver from "fontfaceobserver";
import pako from 'pako';

import { Canvas } from './canvas.ts';
import { Character } from './font.ts';
import { DataArray } from './dataarray.ts';

var fontMeshes = [];

let container, stats;
let camera, scene, raycaster, renderer, controls;
let texture_loader, file_loader;

let INTERSECTED;
let SELECTED;

const pointer = new THREE.Vector2();
const radius = 100;

const mesh_map = new Map();

const DEBUG = true;

let canvas = null;

// store image position information
// let imagePositions;


function view_umap() {
  file_loader.load('font-coordinates-v4u.json', function( obj ) {
    const imagePositions = JSON.parse(obj);
    let fonts = Object.keys(imagePositions);

    for (let i = 0; i < Math.min(fonts.length, fontMeshes.length); i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( fontMeshes[i].position, {
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

    for (let i = 0; i < Math.min(fonts.length, fontMeshes.length); i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( fontMeshes[i].position, {
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

    for (let i = 0; i < Math.min(fonts.length, fontMeshes.length); i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( fontMeshes[i].position, {
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

    for (let i = 0; i < Math.min(fonts.length, fontMeshes.length); i++) {
      var [x, y] = imagePositions[fonts[i]];

      gsap.to( fontMeshes[i].position, {
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


init();
animate();

function init() {
  container = document.getElementById( 'three' );
  document.body.appendChild( container );
  container.classList.add('three__move');

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 75;

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf6f6f5 );

  const light = new THREE.PointLight( 0xffffff, 1, 0 );
  // var light = new THREE.AmbientLight( 0xF6F6F5, 1, 0 );
  // light.position.set(1, 1, 100 );
  // scene.add(light);

  renderer = new THREE.WebGLRenderer( { antialias: false } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  container.appendChild( renderer.domElement );

  // controls = new TrackballControls(camera, renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableRotate = false;
  controls.enableDamping = false;
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.ZOOM,
    RIGHT: THREE.MOUSE.ROTATE,
  };
  controls.zoomSpeed = 2.0;

  // automatically set screen properties
  controls.update();

  raycaster = new THREE.Raycaster();
  texture_loader = new THREE.TextureLoader();
  file_loader = new THREE.FileLoader();

  runOnce();

  if (DEBUG) {
    drawGrid();
    stats = new Stats();
    container.appendChild( stats.dom );
  }

  document.addEventListener('mousemove', onPointerMove);
  document.addEventListener('dblclick', onDblClick);
  window.addEventListener('resize', onWindowResize);
}

function animate() {
  requestAnimationFrame( animate );

  render();

  if (DEBUG) {
    stats.update();
  }
}

function render() {
  // find intersections
  raycaster.setFromCamera( pointer, camera );

  // const intersects = raycaster.intersectObjects( fontMeshes, false );
  // if ( intersects.length > 0 ) {

  //   if ( INTERSECTED != intersects[0].object ) {
  //     if ( INTERSECTED ) {
  //       INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  //     }

  //     // set cursor to intersected
  //     container.classList.remove('three__move');
  //     container.classList.add('three__intersected');

  //     INTERSECTED = intersects[0].object;
  //     INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
  //     INTERSECTED.material.emissive.setHex( 0x999999 );
  //   }

  // } else {

  //   if ( INTERSECTED ) {
  //     INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  //   }
  //   container.classList.remove('three__intersected');
  //   container.classList.add('three__move');
  //   INTERSECTED = null;
  // }

  renderer.render( scene, camera );
}


async function runOnce() {
  canvas = new Canvas(scene, renderer, camera);
  console.log(canvas);
  canvas.addCharacter(await getCharacter('L'.codePointAt(0)));
  canvas.addCharacter(await getCharacter('#'.codePointAt(0)));
  draw();
}

// TODO: draw() on new text input
function onNewText() {
  // canvas...
  draw();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function draw() {
  // for (let i = 0; i < 1500; i++) {
  //   canvas.flushText(getRandomInt(300)-150, getRandomInt(300)-150);
  // }
  canvas.flushText();
}

async function getCharacter(codepoint) {
  const response = await fetch(`./fonts/${codepoint.toString().padStart(4, '0')}.bin.gz`);
  const raw = await response.arrayBuffer();
  const data = await pako.ungzip(raw);
  let ch = new Character(new DataArray(data), codepoint);
  return ch;
}

function drawGrid() {
  const size = 500;
  const divisions = 50;
  const gridHelper = new THREE.GridHelper( size, divisions, 0x5aa60c, 0xafeb73 );
  gridHelper.rotation.x = Math.PI / 2;
  scene.add( gridHelper );
}



function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
  // draw();
  controls.update();
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
