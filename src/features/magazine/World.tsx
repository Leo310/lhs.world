import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const World = () => {
    const myWorld = useRef<Mesh>(null!);

    useFrame(() => {
        myWorld.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={myWorld}>
            <sphereGeometry />
            <meshPhongMaterial wireframe={true} wireframeLinewidth={2} color={0x8be9fd} />
        </mesh>
    );
};

export default World;
