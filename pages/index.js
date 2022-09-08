import Head from "next/head";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model";
import { useEffect, useRef, useCallback } from "react";
// import { DogSpinner, DogContainer } from "../components/voxel-dog-loader";
import Circle from "../components/Circle";
import Landing from "../components/Landing";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export default function Home() {
  useEffect(() => {
    const element = document.querySelector("#main");
    element.addEventListener("wheel", (e) => {
      e.preventDefault();

      element.scrollLeft += e.deltaY;
    });
  }, []);

  const refContainer = useRef();
  // const [loading, setLoading] = useState(true);
  const refRenderer = useRef();

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, "/dog.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  const circleRefs = useRef([]);
  circleRefs.current = [];

  useEffect(() => {
    circleRefs.current.forEach((ref) =>
      ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div className="">
      <Head>
        <title></title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          id="main"
          className="flex overflow-x-scroll h-screen  text-white bg-black"
        >
          {/* <div className="w-full max-h-screen relative bg-blue-200 ">
            <h1>HELLO</h1>
            <DogContainer className="w-40 h-40 " ref={refContainer}>
              {loading && <DogSpinner />}
            </DogContainer>
          </div> */}

          <div className="w-screen max-h-screen relative ">
            {/* <div className='absolute bottom-0 right-0 mt-[-100px] mr-[-390px] w-full h-full z-0 bg-center bg-cover bg-[url("/webe.png")]'></div> */}

            <Landing />

            <Circle size={12} ref={addCircleRef} delay={0} />
            <Circle size={8} ref={addCircleRef} delay={0.1} />
            <Circle size={4} ref={addCircleRef} delay={0.2} />
          </div>
          <div className="w-screen max-h-screen relative  ">
            <About />
          </div>
          <div className="w-screen max-h-screen relative  ">
            <Work />
          </div>
          <div className="w-screen max-h-screen relative  ">
            <Contact />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
