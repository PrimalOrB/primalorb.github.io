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
var camera = new THREE.PerspectiveCamera( 140, windowWidth / windowHeight, .01, 50 );
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

//Window Listeners
window.addEventListener( 'resize', resize, false);
window.requestAnimationFrame(render);

//Material
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );

//Geometry
const geometry = new THREE.TorusKnotGeometry( 10, 5, 150, 15 );
const model = new THREE.Mesh( geometry, material );
model.rotation.x = Math.PI /2
model.position.x = geometry.parameters.radius * .4
scene.add( model)

//Run the Render function    
render();

function render() {
    // Request frame loop
    requestAnimationFrame(render);
    // Rotate the model
    model.rotation.x += .000085;
    model.rotation.y += .00021;
    model.rotation.z += .0003;
    // Rotate the camera
    camera.rotation.y += .00015;
    camera.rotation.x += .0003;
    camera.rotation.z += .000085;
    // Render
    renderer.render( scene, camera )
}

//Function for when window is resized
function resize(){
    windowWidth = container.clientWidth;
    windowHeight = container.clientHeight
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( windowWidth, windowHeight );
}
