import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg"
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg"
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg"
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg"
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import * as THREE from "three"
import { useRef } from "react"

export default function Sphere(props) {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

    const earthRef = useRef();
    const cloudRef = useRef();

    useFrame(( {clock} ) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 24;
        cloudRef.current.rotation.y = elapsedTime / 24;
    });

    return <>
        <mesh ref={cloudRef} position= {[3,0,0]}>
            <sphereGeometry args={[3.005, 64, 64]} />
            <meshPhongMaterial map={cloudsMap} opacity={0.2} depthWrite= {true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
        <mesh ref={earthRef} position= {[3,0,0]}>
            <sphereGeometry args={[3, 64, 64]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
        </mesh>
    </>;
}