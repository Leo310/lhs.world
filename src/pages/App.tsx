import { Canvas } from "@react-three/fiber";
import { Loader, Stats } from "@react-three/drei";
import { NoToneMapping } from "three";

import Magazine from "features/magazine/Magazine";
import { Suspense } from "react";

function App() {
    return (
        <>
            <div id="canvas-container" className="fixed -z-10 h-full w-full bg-darker">
                <Canvas
                    onCreated={({ gl }) => {
                        gl.toneMapping = NoToneMapping;
                    }}
                >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <Magazine />
                    </Suspense>
                </Canvas>
                <Loader />
                <Stats />
            </div>
            <div id="content-container">
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1 className="red">hello world</h1>
            </div>
        </>
    );
}

export default App;
