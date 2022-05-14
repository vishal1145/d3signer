
import { Suspense,useRef } from 'react'
import { Canvas} from '@react-three/fiber'
import PendentModel from './PendentModel'
import { OrbitControls } from "@react-three/drei";
import { useSelector } from 'react-redux';
const D3panel = ({ model }) => {

  const { designProps } = useSelector(state => state.designProps)

  const controls = useRef()

  return (
      <Canvas camera={{ position: [0,0, 100] }}  style={{  height: `78vh`,}} >
        <ambientLight  intensity={.5}  />
        <OrbitControls ref={controls} />
        <pointLight  intensity={.2} position={[-50, 0, 0]} />
        <pointLight intensity={.5} position={[-1050, 0, 1000]} />
        <spotLight color={'white'} intensity={1} position={[0, 10, 0]} angle={-3.14}  />
      <pointLight position={[-1, -1, -10]} />
        <Suspense fallback={"Loading"}>
        <group ref={model}  >
        <PendentModel  {...designProps} controls={controls}  />
       
        </group>
        </Suspense>
      </Canvas>
   
  )
}

export default D3panel