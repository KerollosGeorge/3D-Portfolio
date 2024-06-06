import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Mac from './Mac'
export default function WebDesign() {
  return (
    <Canvas>
       <Stage environment="city" intensity={.7} >
        <Mac/>
       </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}
