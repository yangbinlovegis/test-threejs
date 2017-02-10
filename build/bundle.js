/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by bin.yang on 2016/11/10.
	 */
	
	// require('./three.js-dev/build/three.js');
	var greeter = __webpack_require__(/*! ./Greeter.js */ 1);
	document.getElementById('root').appendChild(greeter());
	let _geometryType={
	    cube:0,
	    plane:1,
	    sphere:2,
	    circle:3,
	    cylinder:4,
	    torus:5 //环形
	};
	(function() {
	
	    // alert('3');
	    // drawEx1();
	    // drawPerspectiveCamera();
	    // drawPlaneGeometry();
	    // drawSphere();
	    draw3DGeometry(_geometryType.torus);
	})();
	function drawEx1() {
	    let render = new THREE.WebGLRenderer({
	        canvas:document.getElementById('mainCanvas')
	        });
	    render.setClearColor(0x000000);
	    let scene = new THREE.Scene();
	    // let camera = new THREE.PerspectiveCamera(45,4/3,1,1000);
	    let camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
	    // camera.position.set(4,-3,5);
	    // camera.lookAt(new THREE.Vector3(0,0,0));
	    scene.add(camera);
	    /**
	    * 这样写有对角线
	    */
	    // let cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
	    //     new THREE.MeshBasicMaterial({
	    //         color: 0xff0000,
	    //         wireframe: true
	    //     }));
	
	    let sphere = new THREE.SphereGeometry(1,1,1);
	    let object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(
	        {color:0xff0000}
	    ));
	    let cube = new THREE.BoxHelper(object);
	
	    scene.add(cube);
	    render.render(scene,camera);
	}
	/**
	 * 透视图
	 */
	function drawPerspectiveCamera() {
	    let render = new THREE.WebGLRenderer({
	        canvas:document.getElementById('mainCanvas')
	    });
	    render.setClearColor(0x000000);
	    let scene = new THREE.Scene();
	    let camera = new THREE.PerspectiveCamera(45,400/300,1,10);
	    camera.position.set(0,0,5);
	    scene.add(camera);
	    let cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1,2,2,3),
	    new THREE.MeshBasicMaterial({
	        color:0xff0000,
	        wireframe:true
	    }));
	    scene.add(cube);
	    render.render(scene,camera);
	}
	/**
	 * 平面
	 */
	function drawPlaneGeometry() {
	    let render = new THREE.WebGLRenderer({
	        canvas:document.getElementById('mainCanvas')
	    });
	    render.setClearColor(0x000000);
	    let scene = new THREE.Scene();
	    // let camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
	    let camera = new THREE.PerspectiveCamera(45,400/300,1,10);
	    camera.position.set(0,0,5);
	    scene.add(camera);
	    let plane = new THREE.PlaneGeometry(2,3);
	    let cube = new THREE.Mesh(plane,
	        new THREE.MeshBasicMaterial({
	            color: 0xff0000,
	            wireframe: true
	        }));
	    scene.add(cube);
	    render.render(scene,camera);
	}
	/**
	 * 球体
	 */
	function drawSphere() {
	    let render = new THREE.WebGLRenderer({
	        canvas:document.getElementById('mainCanvas')
	    });
	    render.setClearColor(0x000000);
	    let scene = new THREE.Scene();
	    let camera = new THREE.PerspectiveCamera(45,400/300,1,10);
	    camera.position.set(0,0,5);
	    // let camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
	    // camera.position.set(0,0,5);
	    // camera.lookAt(new THREE.Vector3(0,0,0));
	    scene.add(camera);
	    let sphere = new THREE.Mesh(
	        new THREE.SphereGeometry(1,10,4,Math.PI/6,Math.PI/3),
	        new THREE.MeshBasicMaterial(
	            {
	                color:0xff0000,
	                wireframe:true
	            }
	        )
	    );
	    scene.add(sphere);
	    render.render(scene,camera);
	}
	function draw3DGeometry ( geoType ) {
	    let render = new THREE.WebGLRenderer({
	        canvas:document.getElementById('mainCanvas')
	    })
	    render.setClearColor(0x000000);
	    let scene = new THREE.Scene();
	    let camera = new THREE.PerspectiveCamera(10,400/300,1,100);
	    // let camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
	    // camera.position.set(0,0,5);
	    camera.position.set(25, 25, 25);
	    camera.lookAt(new THREE.Vector3(0,0,0));
	    scene.add(camera);
	
	    //light
	    let light = new THREE.PointLight(0xffffff,1,100);
	    light.position.set(10,15,5);
	    scene.add(light);
	
	    let geometry=null;
	    switch (geoType) {
	        case _geometryType.cube:
	            geometry = new THREE.Mesh(
	                new THREE.CubeGeometry(1,1,1),
	                new THREE.MeshLambertMaterial( 
	                    {
	                        color:0xffff00,
	                        emissive:0xff0000,
	                        // morphNormals:true,
	                        // morphTargets:true,
	                        // wireframe:true
	
	                    }
	                )
	            )
	            break;
	        case _geometryType.sphere:
	            geometry = new THREE.Mesh(
	                new THREE.SphereGeometry(1,6,4),
	                new THEEE.MeshBasicMaterial(
	                    {
	                        color:0xff0000,
	                        wireframe:true
	                    }
	                )
	            )
	            break;
	        case _geometryType.circle:
	            geometry = new THREE.Mesh(
	                new THREE.CircleGeometry(2,1000),
	                new THREE.MeshLambertMaterial(
	                    {
	                        // color:0xff0000,emissive:0xff0000
	                        color:0xe8101300,
	                        emissive:0xf1f904
	                        // wireframe:true
	                    }
	                )
	            )
	            break;
	        case _geometryType.cylinder:
	            geometry = new THREE.Mesh(
	                new THREE.CylinderGeometry(1,1,3,10,3,true),
	                new THREE.MeshBasicMaterial(
	                    {
	                        color:0xff0000,
	                        wireframe:true
	                    }
	                )
	            )
	            break;
	        case _geometryType.torus:
	            geometry = new THREE.TorusGeometry(3,1,4,8)
	            break;
	        default:
	            break;
	    }
	    scene.add(geometry);
	    render.render(scene,camera);
	}


/***/ },
/* 1 */
/*!************************!*\
  !*** ./app/Greeter.js ***!
  \************************/
/***/ function(module, exports) {

	/**
	 * Created by bin.yang on 2016/11/16.
	 */
	
	module.exports = function() {
	    var greet = document.createElement('div');
	    greet.textContent = "Hi there and greetings !";
	    return greet;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map