function proj2Canvas() {
	var scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	var mouse = new THREE.Vector3();

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMapEnabled = true;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("project2-canvas-container").appendChild(renderer.domElement);

	window.addEventListener("resize", function() {

		var width = window.innerWidth;
		var height = window.innerHeight;

		renderer.setSize(width, height);

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});

	camera.position.z = 10;
	var controls = new THREE.OrbitControls(camera, renderer.domElement);

	var video2 = document.getElementById("video2");

	var video2Texture = new THREE.VideoTexture(video2);

	window.onload = function() {

		video2.load();
	}

	function createVideoMesh2(geom) {

		var material = new THREE.MeshBasicMaterial({map: video2Texture, side: THREE.DoubleSide});
		var actualMaterial = new THREE.Mesh(geom, material);

		return actualMaterial;
	};

	var video2Plane = createVideoMesh2(new THREE.PlaneGeometry(10, 7, 1));
	scene.add(video2Plane);

	$(document).ready(function() {

		if (windowW >= 320 && windowW<= 480) {

			scene.remove(video2Plane);
		
		} else {

			scene.add(video2Plane);
		}
	});


	document.addEventListener("mousemove", onMouseMove, false);

	function onMouseMove(event) {

		mouseX = event.clientX + window.innerWidth / 2;
		mouseY = event.clientY - window.innerHeight / 2;

		camera.position.x = (mouseX - camera.position.x) * 0.004;
		camera.position.y = (mouseY - camera.position.y) * 0.004;

		mouse.x = (event.clientX / window.innerWidth) * 2 + 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 - 1;

		camera.lookAt(scene.position);
		camera.updateMatrixWorld();

		video2.play();
	}

	var update = function() {

		video2Plane.position.x = 5;
		video2Plane.position.y = -1;
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
}

proj2Canvas();