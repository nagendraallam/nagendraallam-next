"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, Suspense } from "react";
import * as THREE from "three";

// Add a simple loading component
function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Model({ url }: { url: string }) {
  const { scene, animations } = useGLTF(url) as unknown as {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
  };
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const firstAction = actions && Object.keys(actions)[0];
    if (
      firstAction &&
      actions[firstAction] !== null &&
      actions[firstAction] !== undefined
    ) {
      // @ts-ignore
      actions[firstAction].play();
    }
  }, [actions]);

  return <primitive object={scene} />;
}

export default function My3DModel({
  url,
  controls,
}: {
  url: string;
  controls: boolean;
}) {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{
          position: [0, 2, 2], // Changed camera position to be front-facing
          fov: 50, // Adjusted field of view
          near: 0.1,
          far: 1000,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={2.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Model url={url} />

        <OrbitControls
          minDistance={1} // Reduced minimum zoom distance
          maxDistance={3}
          enableZoom={true}
          target={[0, 1, 0]} // Added target to look at the center of the model
          enableDamping={true} // Added smooth camera movement
          dampingFactor={0.05}
        />
      </Canvas>
    </Suspense>
  );
}
