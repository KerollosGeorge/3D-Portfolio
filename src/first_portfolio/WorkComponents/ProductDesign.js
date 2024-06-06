import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Camera from './Camera'
import Phone from './Phone'
export default function ProductDesign() {
  return (
    <div className='p_d'>
    <p>we design products with a strong focus on both world class design and ensuring your product is a market success.</p>
    <Canvas className='phone'>
       <Stage environment="city" intensity={.7} >
        <Camera/>
       </Stage>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={5}/>
    </Canvas>
    <Canvas>
        <Stage environment="city" intensity={.7} >
            <Phone/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate rotateSpeed={5}/>
    </Canvas>
 </div>
  )
}
