import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { VideoTexture } from "three";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./laptop_holoscreen/scene.gltf");
  const videoFile = "assets/PERNappDemoBackend.mp4";
  const video = document.createElement("video");
  video.src = videoFile;
  video.crossOrigin = "anonymous";
  video.loop = true;
  video.muted = true;
  video.play();
  const videoTexture = new VideoTexture(video);

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={50} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={15}
        position={isMobile ? [0, -3, -2.2] : [0, -2.25, -1.5]}
        rotation={[0.5, 0, 0]}
      >
        <mesh
          name="Schermo"
          position={[0, 0.14, -0.112]}
          rotation={[-0.23, 0, 0]}
        >
          <planeGeometry args={[0.35, 0.21, 1]} />
          <meshStandardMaterial map={videoTexture} transparent />
        </mesh>
      </primitive>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a Listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      // Remove the listener when the component is unmounted
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
