import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.141.0/examples/jsm/loaders/GLTFLoader.js';

let scene = new THREE.Scene();

let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  antialias: true,
  alpha: true,
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 0, 550);

renderer.setClearColor(0x000000, 0);

let light = new THREE.DirectionalLight(0x777777, 10);
scene.add(light);

let loader = new GLTFLoader();
loader.load('tiger/scene.gltf', function (gltf) {
  scene.add(gltf.scene);
  renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame(animate);
    gltf.scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});
