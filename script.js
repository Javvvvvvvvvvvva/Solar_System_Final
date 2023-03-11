import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader()
//const starrySkyTexture = textureLoader.load('/textures/starry-sky.jpeg');
const sun = textureLoader.load('/textures/sun.png')
const mercury = textureLoader.load ('textures/Mercury.jpeg')
const venus = textureLoader.load ('textures/vernus.jpeg')
const earth = textureLoader.load ('textures/earth.jpeg')
const moon = textureLoader.load ('textures/moon.jpeg')
const mars = textureLoader.load ('textures/mars.jpeg')
const jupiter = textureLoader.load ('textures/jupiter.jpeg')
const jupiterRingTexture = textureLoader.load('textures/jupiterring.jpeg');
const saturn = textureLoader.load ('textures/saturn.jpeg')
const uranaus = textureLoader.load ('textures/uranaus.jpeg')
const neptune = textureLoader.load ('textures/neptune.jpeg')
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()

/**
 * Object
*/

//Sun
const geometry = new THREE.SphereGeometry(30, 64, 32)
const material = new THREE.MeshBasicMaterial({ map : sun })
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)
sphere.userData.planetName = 'Sun';
sphere.userData.planetInfo = 'A star at the center of the Solar System, composed mostly of hydrogen and helium.'

//mercury
const geometry2 = new THREE.SphereGeometry( 2, 64, 32);
const material2 = new THREE.MeshBasicMaterial({ map : mercury });
const sphere2 = new THREE.Mesh( geometry2, material2 );
scene.add(sphere2);
sphere2.userData.planetName = 'Mercury';
sphere2.userData.planetInfo = 'The smallest planet in the Solar System, closest to the Sun. It has a heavily cratered surface and no atmosphere.'
const orbitPoints = []
const orbitRadius = 40
const orbitSegments = 64
for (let i = 0; i <= orbitSegments; i++) {
    const angle = (Math.PI * 2 / orbitSegments) * i
    orbitPoints.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius,
    0,
    Math.sin(angle) * orbitRadius
))
}
const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints)
const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial)
scene.add(orbitLine)
//vernus
const geometry3 = new THREE.SphereGeometry( 4, 64, 32);
const material3 = new THREE.MeshBasicMaterial({ map : venus });
const sphere3 = new THREE.Mesh( geometry3, material3 );
scene.add(sphere3);
sphere3.userData.planetName = 'Venus';
sphere3.userData.planetInfo = 'The second planet from the Sun. It has a thick, toxic atmosphere and a hot surface that can melt lead.'
// create the orbit line for Venus
const orbitPoints2 = []
const orbitRadius2 = 50
const orbitSegments2 = 64
for (let i = 0; i <= orbitSegments2; i++) {
    const angle = (Math.PI * 2 / orbitSegments2) * i
    orbitPoints2.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius2,
    0,
    Math.sin(angle) * orbitRadius2
))
}
const orbitGeometry2 = new THREE.BufferGeometry().setFromPoints(orbitPoints2)
const orbitMaterial2 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine2 = new THREE.Line(orbitGeometry2, orbitMaterial2)
scene.add(orbitLine2)

//earth 
const geometry4 = new THREE.SphereGeometry( 8, 64, 32);
const material4 = new THREE.MeshBasicMaterial({ map : earth });
const sphere4 = new THREE.Mesh( geometry4, material4 );
scene.add(sphere4);
sphere4.userData.planetName = 'Earth';
sphere4.userData.planetInfo = 'The third planet from the Sun, known for its abundant liquid water and diverse life forms.'
// create the orbit line for Earth
const orbitPoints3 = []
const orbitRadius3 = 70
const orbitSegments3 = 64
for (let i = 0; i <= orbitSegments3; i++) {
    const angle = (Math.PI * 2 / orbitSegments3) * i
    orbitPoints3.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius3,
    0,
    Math.sin(angle) * orbitRadius3
))
}
const orbitGeometry3 = new THREE.BufferGeometry().setFromPoints(orbitPoints3)
const orbitMaterial3 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine3 = new THREE.Line(orbitGeometry3, orbitMaterial3)
scene.add(orbitLine3)

//moon
const geometry5 = new THREE.SphereGeometry( 1, 64, 32);
const material5 = new THREE.MeshBasicMaterial({ map : moon });
const sphere5 = new THREE.Mesh( geometry5, material5 );
sphere4.add(sphere5); // add moon to the Earth object
const orbitPointsMoon = []
const orbitRadiusMoon = 15 // adjust the radius as needed
const orbitSegmentsMoon = 64
for (let i = 0; i <= orbitSegmentsMoon; i++) {
    const angle = (Math.PI * 2 / orbitSegmentsMoon) * i
    orbitPointsMoon.push(new THREE.Vector3(
        Math.cos(angle) * orbitRadiusMoon,
        0,
        Math.sin(angle) * orbitRadiusMoon
    ))
}

const orbitMoon = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(orbitPointsMoon),
    new THREE.LineBasicMaterial({ color: 0xffffff })
)
sphere4.add(orbitMoon)

//Mars
const geometry6 = new THREE.SphereGeometry(5, 64, 32);
const material6 = new THREE.MeshBasicMaterial({ map : mars });
const sphere6 = new THREE.Mesh( geometry6, material6 );
scene.add(sphere6);
sphere6.userData.planetName = 'Mars';
sphere6.userData.planetInfo = 'The fourth planet from the Sun, often called the "Red Planet" due to its rusty appearance. It has a thin atmosphere and a history of water on its surface.'
// create the orbit line for Mars
const orbitPoints4 = []
const orbitRadius4 = 100
const orbitSegments4 = 64
for (let i = 0; i <= orbitSegments4; i++) {
    const angle = (Math.PI * 2 / orbitSegments4) * i
    orbitPoints4.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius4,
    0,
    Math.sin(angle) * orbitRadius4
))
}
const orbitGeometry4 = new THREE.BufferGeometry().setFromPoints(orbitPoints4)
const orbitMaterial4 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine4 = new THREE.Line(orbitGeometry4, orbitMaterial4)
scene.add(orbitLine4)

//Jupiter
const geometry7 = new THREE.SphereGeometry(15, 64, 32);
const material7 = new THREE.MeshBasicMaterial({ map : jupiter });
const sphere7 = new THREE.Mesh( geometry7, material7 );
scene.add(sphere7);
sphere7.userData.planetName = 'Jupiter';
sphere7.userData.planetInfo = 'The largest planet in the Solar System, composed mostly of hydrogen and helium. It has a strong magnetic field and a system of moons and rings.'
// create the orbit line for Jupiter
const orbitPoints5 = []
const orbitRadius5 = 180
const orbitSegments5 = 64
for (let i = 0; i <= orbitSegments5; i++) {
  const angle = (Math.PI * 2 / orbitSegments5) * i
  orbitPoints5.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius5,
    0,
    Math.sin(angle) * orbitRadius5
  ))
}
const orbitGeometry5 = new THREE.BufferGeometry().setFromPoints(orbitPoints5)
const orbitMaterial5 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine5 = new THREE.Line(orbitGeometry5, orbitMaterial5)
scene.add(orbitLine5)

//Saturn
const geometry8 = new THREE.SphereGeometry( 13, 64, 32);
const material8 = new THREE.MeshBasicMaterial({ map : saturn });
const sphere8 = new THREE.Mesh( geometry8, material8 );
scene.add(sphere8);
sphere8.userData.planetName = 'Saturn';
sphere8.userData.planetInfo = 'he sixth planet from the Sun, known for its iconic rings. It is also composed mostly of hydrogen and helium, and has a system of moons and moonlets.'
const saturnRingGeometry = new THREE.RingGeometry(30, 10, 45, 128);
const saturnRingMaterial = new THREE.MeshBasicMaterial({
  map: jupiterRingTexture,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 3
});
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRing.rotation.x = Math.PI / 3;
saturnRing.rotation.z = Math.PI / 5;
sphere8.add(saturnRing);
// create the orbit line for Saturn
const orbitPoints6 = []
const orbitRadius6 = 230
const orbitSegments6 = 64
for (let i = 0; i <= orbitSegments6; i++) {
  const angle = (Math.PI * 2 / orbitSegments6) * i
  orbitPoints6.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius6,
    0,
    Math.sin(angle) * orbitRadius6
  ))
}
const orbitGeometry6 = new THREE.BufferGeometry().setFromPoints(orbitPoints6)
const orbitMaterial6 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine6 = new THREE.Line(orbitGeometry6, orbitMaterial6)
scene.add(orbitLine6)


//Uranus
const geometry9 = new THREE.SphereGeometry( 7.5, 64, 32);
const material9 = new THREE.MeshBasicMaterial({ map : uranaus });
const sphere9 = new THREE.Mesh( geometry9, material9 );
scene.add(sphere9);
sphere9.userData.planetName = 'Uranaus';
sphere9.userData.planetInfo = 'The seventh planet from the Sun, with a tilted axis that causes its seasons to last for years. It is an ice giant with a faint ring system and a system of moons.'
// create the orbit line for Uranus
const orbitPoints7 = []
const orbitRadius7 = 300
const orbitSegments7 = 64
for (let i = 0; i <= orbitSegments7; i++) {
  const angle = (Math.PI * 2 / orbitSegments7) * i
  orbitPoints7.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius7,
    0,
    Math.sin(angle) * orbitRadius7
  ))
}
const orbitGeometry7 = new THREE.BufferGeometry().setFromPoints(orbitPoints7)
const orbitMaterial7 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine7 = new THREE.Line(orbitGeometry7, orbitMaterial7)
scene.add(orbitLine7)

//Neptune
const geometry10 = new THREE.SphereGeometry( 7, 64, 32);
const material10 = new THREE.MeshBasicMaterial({ map : neptune });
const sphere10 = new THREE.Mesh( geometry10, material10 );
scene.add(sphere10);
sphere10.userData.planetName = 'Neptune';
sphere10.userData.planetInfo = 'The eighth and farthest planet from the Sun, with a deep blue color due to the presence of methane in its atmosphere. It is also an ice giant with a system of moons and rings.'
// create the orbit line for Neptune
const orbitPoints8 = []
const orbitRadius8 = 400
const orbitSegments8 = 64
for (let i = 0; i <= orbitSegments8; i++) {
const angle = (Math.PI * 2 / orbitSegments8) * i
orbitPoints8.push(new THREE.Vector3(
    Math.cos(angle) * orbitRadius8,
    0,
    Math.sin(angle) * orbitRadius8
))
}
const orbitGeometry8 = new THREE.BufferGeometry().setFromPoints(orbitPoints8)
const orbitMaterial8 = new THREE.LineBasicMaterial({ color: 0xffffff })
const orbitLine8 = new THREE.Line(orbitGeometry8, orbitMaterial8)
scene.add(orbitLine8)

const stars = new THREE.SphereGeometry(1.5, 64, 32)
const starss = new THREE.MeshMatcapMaterial({color:0xFFFFFF})
for(let i =0; i < 1000; i++ )
{
  const randomstars = new THREE.Mesh(stars,starss);
  randomstars.position.x = (Math.random() - 0.5) * 800
  randomstars.position.y = (Math.random() - 0.5) * 800
  randomstars.position.z = (Math.random() - 0.5) * 800



  randomstars.rotation.x = Math.random() * Math.PI
  randomstars.rotation.y = Math.random() * Math.PI

  const scale = Math.random()
  randomstars.scale.set(scale, scale, scale)

  scene.add(randomstars)
}


//position
sphere2.position.set(40, 0, 0) 
sphere3.position.set(50, 0, 0)
sphere4.position.set(70, 0, 0)
sphere5.position.set(15, 0, 0); // set moon's initial position relative to the Earth
sphere6.position.set(100, 0, 0)
sphere7.position.set(180, 0, 0)
sphere8.position.set(230, 0, 0)
sphere9.position.set(300, 0, 0)
sphere10.position.set(400, 0, 0)
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
window.addEventListener('resize', () =>
{
// Update sizes
sizes.width = window.innerWidth
sizes.height = window.innerHeight
  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Initialize camera and controls
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 3000)
camera.position.set(0, 0, 200)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.zoomSpeed = 0.5
controls.panSpeed = 0.5


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//Debug
//
const gui = new dat.GUI()
gui.add(material,'wireframe')

gui
    .add(camera.position, 'y')
    .min(- 1000)
    .max(1000)
    .step(30)
    .name('elevation')  

// Add a boolean flag to control animation
let isAnimationPlaying = true;  
const animationController = gui.add({ toggleAnimation: function() {
  isAnimationPlaying = !isAnimationPlaying;  
  animationController.name(isAnimationPlaying ? 'Pause Animation' : 'Resume Animation');
}}, 'toggleAnimation').name('Pause Animation');
/**
 * Animate
 */
const clock = new THREE.Clock()
const tick = () =>
{
  if (isAnimationPlaying) {
    const elapsedTime = clock.getElapsedTime()
    // mercury's position relative to the Sun
    const mercuryDistance = 40
    const mercuryAngle = elapsedTime * 9.76
    sphere2.position.set(
        Math.cos(mercuryAngle) * mercuryDistance,
        0,
        Math.sin(mercuryAngle) * mercuryDistance
    )
     // venus's position relative to the Sun
    const vernusDistance = 50
     const vernusAngle = elapsedTime * 3.5
    sphere3.position.set(
        Math.cos(vernusAngle) * vernusDistance,
        0,
        Math.sin(vernusAngle) * vernusDistance
    )
     // earth's position relative to the Sun
    const earthDistance = 70
    const earthAngle = elapsedTime * 0.3
    sphere4.position.set(
        Math.cos(earthAngle) * earthDistance,
        0,
        Math.sin(earthAngle) * earthDistance
    )
    const moonDistance = 15; // distance from the Earth
    const moonAngle = elapsedTime * 0.22; // angle of rotation around the Earth
    sphere5.position.set(
        Math.cos(moonAngle *2) * moonDistance,
            0,
            Math.sin(moonAngle * 2) * moonDistance
        );
    const marsDistance = 100
    const marsAngle = elapsedTime * 0.16
    sphere6.position.set(
         Math.cos(marsAngle) * marsDistance,
        0,
         Math.sin(marsAngle) * marsDistance
    )   
    const jupiterDistance = 180
    const jupiterAngle = elapsedTime * 0.03
    sphere7.position.set(
         Math.cos(jupiterAngle) * jupiterDistance,
        0,
         Math.sin(jupiterAngle) * jupiterDistance
    )
    const saturnDistance = 230
    const saturnAngle = elapsedTime * 0.01
    sphere8.position.set(
         Math.cos(saturnAngle) * saturnDistance,
        0,
         Math.sin(saturnAngle) * saturnDistance
    )
    const uranausDistance = 300
    const uranausAngle = elapsedTime * 0.0004
    sphere9.position.set(
         Math.cos(uranausAngle) * uranausDistance,
        0,
         Math.sin(uranausAngle) * uranausDistance
    )
    const neptuneDistance = 400
    const neptuneAngle = elapsedTime * 0.0002
    sphere10.position.set(
         Math.cos(neptuneAngle) * neptuneDistance,
        0,
         Math.sin(neptuneAngle) * neptuneDistance
    )
  }
  //Camera
    camera.lookAt(sphere.position)
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()
// Create a raycaster object
const raycaster = new THREE.Raycaster();

// Add an event listener to the renderer that listens for mouse clicks
renderer.domElement.addEventListener('click', onMouseClick, false);

function onMouseClick(event) {
  // Calculate the mouse position in normalized device coordinates
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Set the raycaster's origin and direction based on the mouse position
  raycaster.setFromCamera(mouse, camera);

  // Find all objects that intersect with the raycaster
  const intersects = raycaster.intersectObjects(scene.children);

  // Loop through all the objects that intersect with the raycaster
  for (let i = 0; i < intersects.length; i++) {
    const object = intersects[i].object;

    // If the intersected object is a SphereGeometry, display the text board
    if (object instanceof THREE.Mesh && object.geometry instanceof THREE.SphereGeometry) {
      displayTextBoard(object.userData.planetName, object.userData.planetInfo);
      break;
    }
  }
}

function displayTextBoard(planetName, planetInfo) {
  // Create a white text board
  const textBoard = document.createElement('div');
  textBoard.style.position = 'absolute';
  textBoard.style.width = '200px';
  textBoard.style.height = '150px';
  textBoard.style.background = '#040404';
  textBoard.style.color ='#F9F7F7'
  textBoard.style.top = '50px';
  textBoard.style.left = '50px';
  textBoard.style.padding = '10px';
  textBoard.style.fontSize = '16px';
  textBoard.style.textAlign = 'left';
  textBoard.innerHTML = `<h3>${planetName}</h3><p>${planetInfo}</p>`;

  // Add the text board to the DOM
  document.body.appendChild(textBoard);
}
