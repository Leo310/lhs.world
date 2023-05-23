import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { NoToneMapping } from "three";

import Magazine from "features/magazine/Magazine";

function App() {
    return (
        <>
            <div id="canvas-container" className="h-screen bg-darker">
                <Canvas
                    onCreated={({ gl }) => {
                        gl.toneMapping = NoToneMapping;
                    }}
                >
                    <ambientLight />
                    <Magazine />
                </Canvas>
                <Stats />
            </div>
        </>
    );
}

export default App;
