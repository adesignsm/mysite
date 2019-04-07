function proj3Canvas() {
	var scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	var mouse = new THREE.Vector3();

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMapEnabled = true;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("project3-canvas-container").appendChild(renderer.domElement);

	window.addEventListener("resize", function() {

		var width = window.innerWidth;
		var height = window.innerHeight;

		renderer.setSize(width, height);

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});

	camera.position.z = 10;
	var controls = new THREE.OrbitControls(camera, renderer.domElement);

	var video3 = document.getElementById("video3");

	var video3Texture = new THREE.VideoTexture(video3);

	window.onload = function() {

		video3.load();
	}

	function createVideoMesh3(geom) {

		var material = new THREE.MeshBasicMaterial({map: video3Texture, side: THREE.DoubleSide});
		var actualMaterial = new THREE.Mesh(geom, material);

		return actualMaterial;
	};

	var video3Plane = createVideoMesh3(new THREE.PlaneGeometry(10, 7, 1));
	scene.add(video3Plane);

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

		video3.play();
	}

	var update = function() {

		video3Plane.position.x = 5;
		video3Plane.position.y = -1;
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

proj3Canvas();