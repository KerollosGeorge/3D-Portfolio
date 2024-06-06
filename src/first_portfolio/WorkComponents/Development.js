import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Atom from './Atom'

export default function Development() {
  return (
    <Canvas>
       <Stage environment="city" intensity={.7} >
        <Atom/>
       </Stage>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={10}/>
    </Canvas>
  )
}
