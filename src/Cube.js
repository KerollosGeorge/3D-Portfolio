import { PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Cube() {
    const textRef = useRef(null)
    useFrame(state=>{textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2})
  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0,0,5]}/>
                <color attach='background' args={["pink"]} />
                <Text ref={textRef} color='#555' fontSize={3}>
                    hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}
