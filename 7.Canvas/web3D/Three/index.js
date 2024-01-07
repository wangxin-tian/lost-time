// import * as THREE from 'three';
import initControls from './controls/index.js';
import * as THREE from './node_modules/three/build/three.module.js';

// 场景
const scene = new THREE.Scene();

// 视点
const camera = new THREE.PerspectiveCamera(
  45, window.innerWidth / window.innerHeight, 1, 1000
);
// const camera = new THREE.OrthographicCamera(
//   -10, 10, 10, -10, 1, 1000
// );

// 相机位置
camera.position.set(0, 0, 20);
// 创建一个渲染器
const renderer = new THREE.WebGLRenderer();

// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 创建了一个立方体对象
// 创建对应材质
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const lamberMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false });

const cubeMaterial = new THREE.ShaderMaterial({
  uniforms: {
    a: {
      type: 'f',
      value: 1.0
    }
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float a;
    
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, a);
    }
  `,
  transparent: true,
});
const cube = new THREE.Mesh(cubeGeometry, lamberMaterial);
scene.add(cube);

// 添加一个球体
const sphereGeometry = new THREE.SphereGeometry(1, 10, 10);
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00, wireframe: false });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(3, 1);
scene.add(sphere);

// 添加一个平面用来接收阴影
const planeGeometry = new THREE.PlaneGeometry(20, 30);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

plane.rotateZ(20);
plane.position.z = -10;
plane.position.x = 3;

const mesh = {
  plane,
}
scene.add(mesh.plane);

// 添加一个灯光
const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-10, 10, 90);
scene.add(ambientlight);
scene.add(spotLight);

spotLight.shadow.mapSize.width = 10000;  // default
spotLight.shadow.mapSize.height = 10000; // default


// 让两个三维物体产生阴影，使用平面接收阴影
// 让渲染器支持阴影
cube.castShadow = true;
sphere.castShadow = true;
plane.receiveShadow = true;
spotLight.castShadow = true;
renderer.shadowMap.enabled = true;

// 添加雾化
scene.fog = new THREE.Fog(0xffffff, 1, 50);

initControls(planeGeometry, camera, mesh, scene, planeMaterial);
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();