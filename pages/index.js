import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as THREE from "three";
import { useEffect } from "react";

export default function Home() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(110);
  renderer.render(scene, camera);

  const geometry = new THREE.TorusGeometry(15, 32, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff6347,
    wireframe: true,
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  const animate = () => {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.001;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.001;
    renderer.render(scene, camera);
  };

  animate();

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="w-full h-full">
          <canvas id="bg" className="w-full h-full fixed "></canvas>
          HJello
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
