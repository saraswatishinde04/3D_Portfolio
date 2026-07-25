import * as THREE from 'three';

export function initThreeScene() {
    // Get the container
    const container = document.getElementById('app');
    if (!container) return;

    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = false;

    // Insert canvas at the beginning of container
    const canvas = renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-1';
    document.body.insertBefore(canvas, document.body.firstChild);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xaa88ff, 0.8);
    dirLight2.position.set(-5, -3, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x4466ff, 1.5, 20);
    pointLight.position.set(3, 0, 5);
    scene.add(pointLight);

    // --- Main Torus Knot ---
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 200, 16);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0x6366f1,
        metalness: 0.3,
        roughness: 0.2,
        wireframe: false,
        transparent: true,
        opacity: 0.9,
        emissive: 0x312e81,
        emissiveIntensity: 0.2,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.position.y = 0.5;
    scene.add(torusKnot);

    // --- Orbiting smaller shapes ---
    const shapes = [];

    // Small sphere
    const sphereGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const sphereMat = new THREE.MeshPhysicalMaterial({
        color: 0xf472b6,
        emissive: 0x831843,
        emissiveIntensity: 0.3,
        metalness: 0.5,
        roughness: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(2.5, 1.5, 1);
    scene.add(sphere);
    shapes.push({ mesh: sphere, speed: 0.4, radius: 3, offsetY: 1.5, offsetX: 0 });

    // Small cube
    const cubeGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const cubeMat = new THREE.MeshPhysicalMaterial({
        color: 0x34d399,
        emissive: 0x065f46,
        emissiveIntensity: 0.3,
        metalness: 0.3,
        roughness: 0.4,
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    cube.position.set(-2.8, -0.5, -1);
    scene.add(cube);
    shapes.push({ mesh: cube, speed: 0.6, radius: 3.2, offsetY: -0.5, offsetX: 0 });

    // Small torus
    const torusGeo = new THREE.TorusGeometry(0.2, 0.08, 16, 32);
    const torusMat = new THREE.MeshPhysicalMaterial({
        color: 0xfbbf24,
        emissive: 0x78350f,
        emissiveIntensity: 0.3,
        metalness: 0.4,
        roughness: 0.3,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(0, -2.2, 2);
    scene.add(torus);
    shapes.push({ mesh: torus, speed: 0.3, radius: 2.5, offsetY: -2.2, offsetX: 0 });

    // Small dodecahedron
    const dodeGeo = new THREE.DodecahedronGeometry(0.2);
    const dodeMat = new THREE.MeshPhysicalMaterial({
        color: 0xa78bfa,
        emissive: 0x4c1d95,
        emissiveIntensity: 0.3,
        metalness: 0.4,
        roughness: 0.3,
    });
    const dode = new THREE.Mesh(dodeGeo, dodeMat);
    dode.position.set(2.2, -1.8, -1.5);
    scene.add(dode);
    shapes.push({ mesh: dode, speed: 0.5, radius: 2.8, offsetY: -1.8, offsetX: 0 });

    // --- Stars / Particles ---
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
        starsPositions[i] = (Math.random() - 0.5) * 100;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));

    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.08,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // --- Mouse tracking for parallax ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    document.addEventListener('mousemove', (event) => {
        targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // --- Animation loop ---
    const clock = new THREE.Clock();

    function animate() {
        const elapsed = clock.getElapsedTime();

        // Smooth mouse follow
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Rotate main torus knot
        torusKnot.rotation.x = elapsed * 0.15 + mouseY * 0.2;
        torusKnot.rotation.y = elapsed * 0.2 + mouseX * 0.3;

        // Pulse effect
        const scale = 1 + Math.sin(elapsed * 0.5) * 0.03;
        torusKnot.scale.set(scale, scale, scale);

        // Rotate orbiting shapes
        shapes.forEach((item, index) => {
            const angle = elapsed * item.speed + index * Math.PI / 2;
            item.mesh.position.x = Math.cos(angle) * item.radius;
            item.mesh.position.z = Math.sin(angle) * item.radius;
            item.mesh.position.y = item.offsetY + Math.sin(elapsed * 0.7 + index) * 0.5;
            item.mesh.rotation.x = elapsed * 0.5 + index;
            item.mesh.rotation.y = elapsed * 0.3 + index;
        });

        // Slowly rotate stars
        stars.rotation.x = elapsed * 0.01;
        stars.rotation.y = elapsed * 0.015;

        // Subtle camera movement
        camera.position.x = mouseX * 0.3;
        camera.position.y = mouseY * 0.2;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    // --- Resize handler ---
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // Return cleanup function
    return () => {
        window.removeEventListener('resize', () => { });
        canvas.remove();
        renderer.dispose();
    };
}

