import { Canvas } from "@react-three/fiber";

function App() {
    return (
        <>
            <div id="canvas-container" className="h-screen bg-red-100">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <mesh rotation={[1, 0, 0]}>
                        <boxGeometry args={[10, 1, 1]} />
                        <meshStandardMaterial color="hotpink" />
                    </mesh>
                </Canvas>
            </div>
        </>
    );
}

export default App;
