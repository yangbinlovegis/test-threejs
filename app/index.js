/**
 * Created by bin.yang on 2016/11/10.
 */

// require('./three.js-dev/build/three.js');
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
let _geometryType={
    cube:0, //立方体
    plane:1, //平面
    sphere:2, //球体
    circle:3, //圆
    cylinder:4, //圆柱
    torus:5, //环形
    torusKnot:6 //环形打结
};
(function() {

    // alert('3');
    // drawEx1();
    // drawPerspectiveCamera();
    // drawPlaneGeometry();
    // drawSphere();
    // draw3DGeometry(_geometryType.circle);
    draw3DGeometry(_geometryType.cube);
    // draw3DGeometry(_geometryType.torus);
    // draw3DGeometry(_geometryType.torusKnot);
})();
function draw3DGeometry ( geoType ) {
    let render = new THREE.WebGLRenderer({
        canvas:document.getElementById('mainCanvas')
    })
    render.setClearColor(0x000000);
    let scene = new THREE.Scene();
    //let camera = new THREE.PerspectiveCamera(10,400/300,1,100);
    //camera.position.set(0,0,5);

    let camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100); 
    //camera.position.set(25, 25, 25);
    camera.position.set(5,15,25);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);

    //light
    // let light = new THREE.PointLight(0xffffff,1,100); //点光源
    // light.position.set(10,15,5);

    //let light = new THREE.DirectionalLight(); //平行光
    //light.position.set(2,5,3);

    let geometry=null;
    switch (geoType) {
        case _geometryType.cube:
            geometry = new THREE.Mesh(
                new THREE.CubeGeometry(1,1,1),
                new THREE.MeshLambertMaterial( 
                    {
                        color:0x00ff00,
                        // ambient:0xffffff
                        // emissive:0xff0000,
                    }
                )
            )
            break;
        case _geometryType.sphere:
            geometry = new THREE.Mesh(
                new THREE.SphereGeometry(3,18,12),
                new THREE.MeshBasicMaterial(
                    {
                        color:0xfff000,
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
            geometry = new THREE.Mesh(
                new THREE.TorusGeometry(3,1,10,12),
                new THREE.MeshBasicMaterial(
                    {
                        color:0xff0000,
                        wireframe:true
                    }
               )
            )
            break;
        case _geometryType.torusKnot:
            geometry = new THREE.Mesh(
                new THREE.TorusKnotGeometry(2,0.5,32,8),
                new THREE.MeshBasicMaterial(
                    {
                        color:0xff0000,
                        wireframe:true
                    }
                )
            )
        default:
            break;
    }
    let light = new THREE.SpotLight(0xffff00,1,100,Math.PI/6,25); //聚光灯
    light.position.set(2,5,3);
    scene.add(light);
    light.target = geometry;
    light.castShadow = true;
    geometry.castShadow = true;

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8, 16, 16),
    new THREE.MeshLambertMaterial({color: 0xcccccc}));
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);    
    let ambient = new THREE.AmbientLight(0x666666); //环境光
    scene.add(ambient);

    scene.add(geometry);
    //render.render(scene,camera);
    // id = setInterval( ()=>{
    //         geometry.rotation.y = (geometry.rotation.y+0.01)%(Math.PI*2);
    //         render.render(scene,camera);
    //     },
    //     20
    // );
    id = requestAnimationFrame(draw);
    function draw() {
        geometry.rotation.y = (geometry.rotation.y+0.1)%(Math.PI*2);
        render.render(scene,camera);
        id = requestAnimationFrame(draw);
    }
}
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