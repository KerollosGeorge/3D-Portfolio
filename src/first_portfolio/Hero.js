import './Hero.css'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
export default function Hero() {
  const[toggle,setToggle] = useState(false)
  return (
    <section className='f_hero'>
        <nav className='hero_nav'> 
          <div className='f_nav'>
            <img src='./img/logo.png' alt="logo" className='hero_logo'/>
            <ul className='fhero_btns'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
          <div className='sec_nav'>
            <img src="../img/search.png" alt="search"  className='shero_search'/>
            <button>Hire Now</button>
          </div>
          <button className='fabars' onClick={()=>setToggle(!toggle)}><FaBars/></button>
        </nav>
        {toggle && <div className='fhero_sidebar'>
          <ul className='fhero_sidebar_btns'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
        </div>}
        <main className='fhero_main'>
          <div className='fhero_content'>
            <h1>Think. Make. Solve</h1>
            <h4><div className='before_text'></div> What we Do</h4>
            <p>we enjoy creating delightfull, human-centerd digital experiences</p>
            <button>learn more</button>
          </div>
          <div className='right_img'>
            <Canvas>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1.4,250,300]} scale={1.7}>
                <MeshDistortMaterial  
                  color='#3d1c56' attach='material' distort={.5} speed={2}
                  />
              </Sphere>
              
            </Canvas>
            <img src="../img/moon.png" alt="" className='fhero_img' />
          </div>
        </main>
    </section>
  )
}
