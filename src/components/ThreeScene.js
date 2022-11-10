import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import Sphere from './Sphere'

const CanvasContainer = styled.div`
width: 100vw;
height: 100vh;
z-index: 9;
position: fixed;
top: 0;
left: 0;
`

function ThreeScene() {
  return (
    <CanvasContainer>
        <Canvas orthographic camera={{ zoom: 90 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={ 0.1 }/>
                <pointLight color="#f6f3ea" position={[3, -1, 7]} intensity={1.2}/>   
                <Sphere />
            </Suspense>
        </Canvas>
    </CanvasContainer>
    
  )
}

export default ThreeScene