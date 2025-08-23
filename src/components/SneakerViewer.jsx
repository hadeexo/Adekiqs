import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";

const SneakerModel = () => {
  const group = useRef();
  const { scene } = useGLTF("/up.glb");

  useEffect(() => {
    if (scene && group.current) {
      const clonedScene = scene.clone(true);
      group.current.add(clonedScene);
    }

    return () => {
      if (group.current) {
        while (group.current.children.length) {
          group.current.remove(group.current.children[0]);
        }
      }
    };
  }, [scene]);

  return <group ref={group} scale={2} />;
};

const SneakerViewer = () => {
  return (
    <div className="w-full sm:w-[500px] h-[400px]">
      <Canvas className="mt-14">
        <ambientLight intensity={2} />
        <directionalLight position={[10, 2, 2]} />

        <Suspense
          fallback={
            <Html center>
              <p className="text-center">Loading model...</p>
            </Html>
          }
        >
          <SneakerModel />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default SneakerViewer;
