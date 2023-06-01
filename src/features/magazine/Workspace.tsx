import { Mesh, MeshPhongMaterial, VideoTexture } from "three";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import WorkspaceGLB from "assets/workspace/Workspace.glb";
import MonitorVideo from "assets/workspace/Monitorvideo.mp4";
import { useEffect, useRef } from "react";

const Workspace = () => {
    const gltf = useGLTF(WorkspaceGLB) as GLTF;
    gltf.scene.scale.set(0.3, 0.3, 0.3);

    const video = useRef<HTMLVideoElement>(null!);

    useEffect(() => {
        const videoTexture = new VideoTexture(video.current);
        gltf.scene.traverse((child) => {
            if (child.name === "screen1" || child.name === "screen2") {
                (child as Mesh).material = new MeshPhongMaterial({ map: videoTexture });
            }
        });
    });

    useFrame(() => {
        gltf.scene.rotation.y += 0.01;
    });

    return (
        <>
            <Html>
                <video ref={video} src={MonitorVideo} autoPlay loop muted playsInline hidden />
            </Html>
            <primitive object={gltf.scene} />
        </>
    );
};

export default Workspace;
