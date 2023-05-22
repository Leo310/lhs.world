import { useFrame, useLoader } from "@react-three/fiber";
import { Group, Mesh, Texture, TextureLoader } from "three";
import PB from "assets/PB.png";
import { useRef } from "react";

const skillIconUrls = Object.values(
    import.meta.glob("/src/assets/skillIcons/*.{png,jpg,jpeg,PNG,JPEG}", { eager: true, as: "url" }),
);

const Skills = () => {
    const PBMap = useLoader(TextureLoader, PB);

    const cube = useRef<Mesh>(null!);
    const radius = 3;

    const skillIconsGroup = useRef<Group>(null!);
    const skillTextures: Texture[] = [];
    for (const skillIconUrl of skillIconUrls) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        skillTextures.push(useLoader(TextureLoader, skillIconUrl));
    }

    const rotateSkillIcons = (angle: number) => {
        let offset = 0;
        const skillIcons = skillIconsGroup.current.children;
        skillIcons.forEach((icon) => {
            icon.position.x = Math.cos(angle - offset) * radius;
            icon.position.z = Math.sin(angle - offset) * radius;
            offset += (360 / skillIcons.length / 180) * Math.PI;
        });
    };

    useFrame(() => {
        cube.current.rotation.y += 0.01;
        rotateSkillIcons(cube.current.rotation.y);
    });

    return (
        <>
            <group position={[2, 2, -2]}>
                <mesh ref={cube}>
                    <boxGeometry />
                    <meshPhongMaterial map={PBMap} />
                </mesh>
                <group ref={skillIconsGroup}>
                    {skillTextures.map((texture, i) => (
                        <mesh key={i}>
                            <planeGeometry />
                            <meshPhongMaterial transparent={true} map={texture} />
                        </mesh>
                    ))}
                </group>
            </group>
        </>
    );
};

export default Skills;
