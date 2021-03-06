
import { useRef, useEffect, useState, Suspense } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { extend } from '@react-three/fiber'
import { fonts } from './assets/allFonts';


import Diamond from './diamond'
import Bails from './Bails'
import Symbol from './Symbols.js'


// import {useTexture} from '@react-three/drei'
// import { Union } from '@react-three/drei';


extend({ TextGeometry })


const TextMesh = (props) => {

    const {
        text,
        base,
        length,
        width,
        thickness,
        font: currFont,
        model,
        bails,
        symbol
    } = props

    const [boundingBoxPoints, setBoundingBoxPoints] = useState({ max: {}, min: {} })
    const [boundingBoxPoints2, setBoundingBox2Points] = useState({ max: {}, min: {} })

    const text3d = useRef()
    const textGroup = useRef()
    const textWsymGrp = useRef()
    // const crimptxtr = useTexture('/assets/crimps/dmdtxt.png');




    const font = new FontLoader().parse(fonts.filter(ff => ff.familyName === currFont)[0]);



    useEffect(() => {
        setTimeout(()=>{
            var helper = new THREE.Box3().setFromObject(textGroup.current);
        setBoundingBoxPoints(helper)

        var boundingBox = new THREE.Box3().setFromObject(textWsymGrp.current);
        setBoundingBox2Points(boundingBox)
    },100)
        
    }, [props])




    return (

        <group ref={model}  >
            <group ref={textWsymGrp} >
                <group ref={textGroup} >
                    <mesh position={[-50, 0, 0]}>
                        <textGeometry ref={text3d} args={[text, { font, size: length, height: thickness, curveSegments: 100, bevelEnabled: true, bevelThickness: 1, bevelSize: 1, bevelOffset: 0, }]} />
                        <meshStandardMaterial attach='material' color={base} metalness={.6} roughness={0.2} />
                    </mesh>
                </group>
                {
                symbol&&
                    <Symbol props={{symbol, boundingBoxPoints,base,length,thickness,model }} />
                }
            </group>
            <Bails
                props={{bails ,base, boundingBoxPoints:boundingBoxPoints2,symbol}}
            />

          
                {/* <Diamond  props={{boundingBoxPoints }}/> */}
          



        </group>

    )
}

export default TextMesh










// useEffect(() => {
//     // model.current.remove( textGroup.current.children[1] );
//     // const geometry = text3d.current
//     // geometry.deleteAttribute( 'normal' );
//     // 		geometry.deleteAttribute( 'uv' );
//     // 		const vertices = [];
//     // 		const positionAttribute = geometry.getAttribute( 'position' );

//     //     for ( let i = 0; i<positionAttribute.count; i ++ ){
//     //       const vector = new THREE.Vector2();
//     //        vector.fromBufferAttribute( positionAttribute, i );
//     //       //  delete vector.z
//     //        vertices.push(vector)

//     //       }
//     //       console.log(vertices)
//     //     //   setPoints(vertices)

//     //     const pointsMaterial = new THREE.MeshBasicMaterial( {

//     //         color: 0x0080ff,



//     //       } );
//     //     const pointsGeometry = new THREE.BufferGeometry().setFromPoints( vertices );

//     // 		const points = new THREE.Mesh( pointsGeometry, pointsMaterial );
//     //         points.position.set(-50,0,-10)
//     // model.current.add( points );



// }, [props])