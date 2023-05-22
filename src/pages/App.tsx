import { Canvas } from "@react-three/fiber";
import Skills from "features/magazine/skills";

function App() {
    return (
        <>
            <div id="canvas-container" className="h-screen bg-gray-500">
                <Canvas>
                    <ambientLight />
                    <Skills />
                </Canvas>
            </div>
        </>
    );
}

export default App;
