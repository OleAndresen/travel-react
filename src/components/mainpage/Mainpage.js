import React from 'react'
import './Mainpage.css'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

import Picture from '../../assets/pictures/hero-picture.jpg'
import EuropePicture from '../../assets/pictures/europe-picture.jpg'
import AsiaPicture from '../../assets/pictures/asia-picture.jpg'
import AfricaPicture from '../../assets/pictures/africa-picture.jpg'
import images from './images'
import asiaimages from './asia-images'
import africaimages from './africa-images'
import { HiArrowNarrowRight} from 'react-icons/hi'
import { CgArrowLongLeft, CgArrowLongRight} from 'react-icons/cg'

function Mainpage() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='container'>
        <section className='hero section'>
          <img src={Picture} alt=""/>
          <div className='content'>
            <h1>Travel around the world with us.</h1>
            <h2>Our favorite locations worldwide.</h2>
          </div>
        </section>
        <section className='europe section'>
          <img src={EuropePicture} alt=""/>
          <div className='content'>
            <div className='text'>
              <h1>Europe</h1>
              <p>Get inspired for your next trip to Europe. Plan your vacation to discover European culture, heritage, architecture, gastronomy and stunning landscapes.</p>
              <a href="/europe" className='slide'>Explore<HiArrowNarrowRight className='icon' /></a>
            </div>  
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
              <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                {images.map(image => {
                  return(
                    <motion.div className='item' key={image}>
                      <img src={image} alt="" />
                    </motion.div>
                  );
                })}
              </motion.div>
              <div className='arrows'>
                <CgArrowLongLeft className='arrow-icon' />
                <CgArrowLongRight className='arrow-icon' />
              </div>
            </motion.div>
          </div>
        </section>
        <section className='asia section'>
          <img src={AsiaPicture} alt=""/>
            <div className='content'>
              <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}} id='b'>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                  {asiaimages.map(image => {
                    return(
                      <motion.div className='item' key={image}>
                        <img src={image} alt="" />
                      </motion.div>
                    );
                  })}
                </motion.div>
                <div className='arrows'>
                  <CgArrowLongLeft className='arrow-icon' />
                  <CgArrowLongRight className='arrow-icon' />
                </div>
              </motion.div>
              <div className='text' id='a'>
                <h1>Asia</h1>
                <p>Get inspired for your next trip to Asia. Plan your vacation to discover Asian culture, heritage, architecture, gastronomy and stunning landscapes.</p>
                <a href="/asia" className='slide'>Explore<HiArrowNarrowRight className='icon' /></a>
              </div>
            </div>
        </section>
        <section className='africa section'>
          <img src={AfricaPicture} alt=""/>
            <div className='content'>
              <div className='text'>
                <h1>Africa</h1>
                <p>Get inspired for your next trip to Africa. Plan your vacation to discover African culture, heritage, architecture, gastronomy and stunning landscapes.</p>
                <a href="/africa" className='slide'>Explore<HiArrowNarrowRight className='icon' /></a>
              </div>  
              <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                  {africaimages.map(image => {
                    return(
                      <motion.div className='item' key={image}>
                        <img src={image} alt="" />
                      </motion.div>
                    );
                  })}
                </motion.div>
                <div className='arrows'>
                  <CgArrowLongLeft className='arrow-icon' />
                  <CgArrowLongRight className='arrow-icon' />
                </div>
              </motion.div>
            </div>
        </section>
        <div className='overlay'></div>
    </div>
  )
}

export default Mainpage