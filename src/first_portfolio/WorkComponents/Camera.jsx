/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 camera.gltf --transform 
Files: camera.gltf [15.61MB] > camera-transformed.glb [681.46KB] (96%)
Author: Just8 (https://sketchfab.com/Just8)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cctv-camera-281b2b84260447e49ab4a6b34bf78697
Title: CCTV camera
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/camera-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material} />
      <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.glass} position={[2.377, 0, 0]} rotation={[0, 0, -Math.PI / 3]} scale={[0.5, 0.051, 0.5]} />
    </group>
  )
}

useGLTF.preload('/camera-transformed.glb')