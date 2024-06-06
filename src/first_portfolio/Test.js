import { OrbitControls} from '@react-three/drei'
import './Test.css'
import { Canvas } from '@react-three/fiber'
import Cube from '../Cube'
export default function Test() {
  return (
    <div className='canvas_body'>
        <Canvas className='canvas' camera={{fov:25 ,position:[5,5,5]}}>
            <OrbitControls enableZoom={false}  autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Cube/>
        </Canvas>
    </div>
  )
}
