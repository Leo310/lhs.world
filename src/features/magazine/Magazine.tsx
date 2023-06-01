import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

import Skills from "features/magazine/Skills";
import World from "features/magazine/World";
import Workspace from "features/magazine/Workspace";

const Magazine = () => {
    const group = useRef<Group>(null!);
    const radius = 5;
    let currentAngle = 0.0;

    let aritificialScrollPosition = 0.0;

    useFrame(() => {
        let offset = 0;
        group.current.children.forEach((skill) => {
            skill.position.x = Math.sin(currentAngle - offset) * radius;
            skill.position.y = -Math.cos(currentAngle - offset) * radius;
            skill.position.z = Math.sin(currentAngle - offset) * radius;
            offset -= (360 / group.current.children.length / 180) * Math.PI;
        });
        currentAngle = (aritificialScrollPosition / 10.0 / 180) * Math.PI;
        aritificialScrollPosition += 10;
    });
    return (
        <>
            <group position={[0, 0, -10]} ref={group}>
                <Skills />
                <World />
                <Workspace />
                <Skills />
                <Skills />
            </group>
        </>
    );
};

export default Magazine;
