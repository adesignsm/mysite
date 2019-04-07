function about_canvas() {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
	renderer.shadowMapEnabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("about-page").appendChild(renderer.domElement);

	window.addEventListener("resize", function() {

		var width = window.innerWidth;
		var height = window.innerHeight;

		renderer.setSize(width, height);

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});

	camera.position.z = 10;

	var logoGeo = new THREE.PlaneGeometry(6, 5, 5);
	var logoMaterial = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("assets/logo.png"), side: THREE.DoubleSide});
	var logo = new THREE.Mesh(logoGeo, logoMaterial);
	scene.add(logo);

	var update = function() {

		logo.position.x = 8;
		logo.rotation.y += 0.003;
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

about_canvas();