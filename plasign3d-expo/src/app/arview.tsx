import React from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { useLocalSearchParams } from 'expo-router';

export default function ARView() {
  const { qr } = useLocalSearchParams(); // QR data passed from scanner

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={(gl: WebGLRenderingContext) => {
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        );
        camera.position.z = 2;

        // Example cube (replace with blueprint model later)
        const cube = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({ color: 'blue' })
        );
        scene.add(cube);

        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);

          // ✅ Fix endFrameEXP warning
          (gl as any).endFrameEXP();
        };
        animate();
      }}
    />
  );
}
