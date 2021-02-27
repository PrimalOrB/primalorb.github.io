var  lights;

// Canvas
var container = document.querySelector('.canvas');
var windowWidth = container.clientWidth;
var windowHeight = container.clientHeight;
var scale = 10
    
// Scene
var scene = new THREE.Scene();
scene.background = null;

// Camera
var camera = new THREE.PerspectiveCamera( 90, windowWidth / windowHeight, .1, 1000 );
// camera = new THREE.OrthographicCamera( windowWidth / - scale, windowWidth / scale, windowHeight / scale, windowHeight / - scale, .1, 1000 );
camera.aspect = windowWidth / windowHeight
camera.position.z = -1;
    
// Renderer
var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setSize( windowWidth, windowHeight );
container.appendChild( renderer.domElement );

// Lights
const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820);
scene.add(ambient)

// Grid helper
const size = windowWidth / scale;
const divisions = 10;
var gridHelper = new THREE.GridHelper( size, divisions );
//add grid
// scene.add( gridHelper )
    
// Orbit Controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enabled = true;

//Window Listeners
window.addEventListener( 'resize', resize, false);
window.requestAnimationFrame(render);

//Material
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
const material2 = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1, linecap: 'round' } );

//Geometry
const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const model = new THREE.Mesh( geometry, material );
model.rotation.x = Math.PI /2
model.position.x = geometry.parameters.radius * .8
scene.add( model)

    
render();

function render() {
    requestAnimationFrame(render);
    model.rotation.y += .0005
    renderer.render( scene, camera )
}

function resize(){
    windowWidth = container.clientWidth;
    windowHeight = container.clientHeight
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( windowWidth, windowHeight );
}
