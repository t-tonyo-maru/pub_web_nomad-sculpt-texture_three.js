import "./reset.css";
import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const VITE_GITHUB_PAGES_PATH = import.meta.env.BASE_URL || "/";

const width = window.innerWidth;
const height = window.innerHeight;

// レンダラー
const renderer = new THREE.WebGLRenderer({
	antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setSize(width, height);
renderer.shadowMap.enabled = true;

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

// 地面
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x213573 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// 環境光源
const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

// スポットライト
const spotLight = new THREE.SpotLight(0xffffff, 24, 12, Math.PI / 4, 10, 0.5);
spotLight.position.set(0, 8, 0);
spotLight.castShadow = true;
spotLight.shadow.mapSize.set(4096, 4096);
scene.add(spotLight);
const spotLightHepler = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHepler);

// OrbitControls
const orbitController = new OrbitControls(camera, renderer.domElement);
orbitController.minDistance = 0.1;
orbitController.maxDistance = 10000;
orbitController.autoRotateSpeed = 1.0;

// gltfオブジェクト
let gltfObject: GLTF;
let gltfObjectHelper: THREE.BoxHelper;

// gltfファイルの読み込み
const gltfLoader = new GLTFLoader();
gltfLoader.load(`${VITE_GITHUB_PAGES_PATH}/assets/models/model.glb`, (data) => {
	gltfObject = data;

	// 不要っぽい
	// gltfObject.scene.traverse((child) => {
	// 	child.castShadow = true;
	// });

	gltfObject.scene.scale.set(4, 4, 4);
	gltfObject.scene.position.set(0, 2.5, 0);
	scene.add(gltfObject.scene);

	gltfObjectHelper = new THREE.BoxHelper(gltfObject.scene, 0xffff00);
	scene.add(gltfObjectHelper);
});

const wrapper = document.querySelector<HTMLDivElement>("#app");
wrapper?.appendChild(renderer.domElement);

// 画面に表示＋アニメーション
const ticker = () => {
	requestAnimationFrame(ticker);
	// helperの更新
	spotLightHepler.update();
	if (gltfObjectHelper) gltfObjectHelper.update();
	// orbitControlsの更新
	orbitController.update();
	renderer.render(scene, camera);
};
ticker();

// リサイズ
const resize = () => {
	const width = window.innerWidth;
	const height = window.innerHeight;

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	camera.aspect = width / height;
	camera.updateProjectionMatrix();
};

let resizeTimeout: number | null;
window.addEventListener("resize", () => {
	if (resizeTimeout) {
		clearTimeout(resizeTimeout);
	}
	resizeTimeout = window.setTimeout(resize, 200);
});
