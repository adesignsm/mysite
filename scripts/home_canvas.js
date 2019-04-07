var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var mouse = new THREE.Vector3();
var cameraPosX = 0;
var cameraPosY = 0;

var windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMapEnabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("home-page").appendChild(renderer.domElement);

window.addEventListener("resize", function() {

	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer.setSize(width, height);

	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

camera.position.z = 10;
var controls = new THREE.OrbitControls(camera, renderer.domElement);

var starsGeometry = new THREE.Geometry();

for (var i = 0; i < 10000; i ++) {

	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread(1200);
	star.y = THREE.Math.randFloatSpread(500);
	star.z = THREE.Math.randFloatSpread(500);

	starsGeometry.vertices.push(star);
}

var starsMaterial = new THREE.PointsMaterial({color: Math.random() <= 0.5 ? 0x000000 : 0xf85153});
var starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

$(document).ready(function() {

	if (windowW >= 320 && windowW<= 480) {

		console.log("remove");
		scene.remove(starField);
	}
});

var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");

var video1Texture = new THREE.VideoTexture(video1);
var video2Texture = new THREE.VideoTexture(video2);
var video3Texture = new THREE.VideoTexture(video3);

window.onload = function() {

	video1.load();
	video2.load();
	video3.load();
}

function createVideoMesh1(geom) {

	var material = new THREE.MeshBasicMaterial({map: video1Texture, side: THREE.DoubleSide});
	var actualMaterial = new THREE.Mesh(geom, material);

	return actualMaterial;
};

function createVideoMesh2(geom) {

	var material = new THREE.MeshBasicMaterial({map: video2Texture, side: THREE.DoubleSide});
	var actualMaterial = new THREE.Mesh(geom, material);

	return actualMaterial;
};

function createVideoMesh3(geom) {

	var material = new THREE.MeshBasicMaterial({map: video3Texture, side: THREE.DoubleSide});
	var actualMaterial = new THREE.Mesh(geom, material);

	return actualMaterial;
};

var video1Plane = createVideoMesh1(new THREE.PlaneGeometry(10, 7, 1));
var video2Plane = createVideoMesh2(new THREE.PlaneGeometry(10, 7, 1));
var video3Plane = createVideoMesh3(new THREE.PlaneGeometry(10, 7, 1));

document.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(event) {

	mouseX = event.clientX + window.innerWidth / 2;
	mouseY = event.clientY - window.innerHeight / 2;

	camera.position.x = (mouseX - camera.position.x) * 0.0009;
	camera.position.y = (mouseY - camera.position.y) * 0.0009;

	mouse.x = (event.clientX / window.innerWidth) * 2 + 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 - 1;

	camera.lookAt(scene.position);
	camera.updateMatrixWorld();
}

document.getElementById("home-page-span1").onmouseover = function() {

		scene.remove(starField);
		scene.add(video1Plane);
}

document.getElementById("home-page-span1").onmouseleave = function() {

		scene.add(starField);
		scene.remove(video1Plane);
}

document.getElementById("home-page-span1").onmousedown = function(event) {

	$("#project1-canvas-container").delay(700).fadeIn(500);
}

document.getElementById("home-page-span2").onmouseover = function() {

		scene.remove(starField);
		scene.add(video2Plane);
}

document.getElementById("home-page-span2").onmouseleave = function() {

		scene.add(starField);
		scene.remove(video2Plane);
}

document.getElementById("home-page-span2").onmousedown = function(event) {

	$("#project2-canvas-container").delay(700).fadeIn(500);
}

document.getElementById("home-page-span3").onmouseover = function() {

		scene.remove(starField);
		scene.add(video3Plane);
}

document.getElementById("home-page-span3").onmouseleave = function() {

		scene.remove(video3Plane);
		scene.add(starField);
}

document.getElementById("home-page-span3").onmousedown = function(event) {

	$("#project3-canvas-container").delay(700).fadeIn(500);
}

var update = function() {

	camera.position.x += cameraPosX;
	camera.position.y += cameraPosY;

	if (windowW >= 320 && windowW <= 480) {

		camera.position.z = 15;

		video1Plane.position.x = 0;
		video2Plane.position.x = 0;
		video3Plane.position.x = 0;

	} else {

		camera.position.z = 10;

		video1Plane.position.x = 5;
		video1Plane.position.y = -1;

		video2Plane.position.x = 5;
		video2Plane.position.y = -1;

		video3Plane.position.x = 5;
		video3Plane.position.y = -1;
	}
};

var render = function() {

	renderer.render(scene, camera);
};

var animate = function() {

	requestAnimationFrame(animate);

	update();
	render();
};

animate();