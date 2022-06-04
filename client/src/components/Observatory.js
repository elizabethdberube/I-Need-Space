import * as THREE from 'three';



import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

<div>
    <canvas id="bg"></canvas>
</div>

//creates scene

const scene = new THREE.Scene()


// creates cmamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)







const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),

});



renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


let loadedModel;
const loader = new GLTFLoader();
loader.load('..Assets/solar_system/scene.gltf', (gltf) => {
    loadedModel = gltf.scene;
    scene.add(loadedModel);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(50, 50, 50);
    gltf.scene.rotation.set(0, 0, 0);


    scene.add(gltf.scene);


});

// lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);





const controls = new OrbitControls(camera, renderer.domElement);







// //background

const spaceTexture = new THREE.TextureLoader().load('.Assets/space.jpg');
scene.background = spaceTexture;


function animate() {
    requestAnimationFrame(animate);
    loadedModel.rotation.y += 0.01;


    controls.update();
    renderer.render(scene, camera);


}
animate();

export default scene;