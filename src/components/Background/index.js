// derived from sample using react-three-fiber
// https://bestofreactjs.com/repo/react-spring-react-three-fiber-react-react-integration

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Effects from '../Effects'
import Sparks from '../Sparks'
import Particles from '../Particles'

const Background = () => {
    const mouse = useRef( [ 0, 0 ] )
    const isMobile = /iPhone|iPad|iPod|Android/i.test( navigator.userAgent )

    return (
    <Canvas
        className="background"
        style={{position:'fixed', top:0, right:0, left: 0, bottom: 0, zIndex:'-999'}}
        linear
        dpr={ [1, 1] }
        camera={ { fov: 70, position: [ 0, 0, 30 ] } }
        onCreated={ ( { gl } ) => {
            gl.toneMapping = THREE.ReinhardToneMapping
            gl.setClearColor( new THREE.Color( '#020207' ) )
        } }>
        <fog attach="fog" args={ [ 'white', 50, 250 ] } />
        <pointLight distance={ 100 } intensity={ 5 } color="white" />
        <Particles count={ isMobile ? 5000 : 10000 } mouse={ mouse } />
        <Sparks count={ 15 } mouse={ mouse } colors={ [ '#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue' ] } />
        <Effects />
    </Canvas>
    // <Canvas className="background"
    //     style={{position:'fixed', top:0, right:0, left: 0, bottom: 0, zIndex:'-999', backgroundColor:"#020207"}}
      
    //   />
    )
}

export default Background
