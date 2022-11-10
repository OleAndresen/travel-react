import React from 'react'
import '../europe/Locations.css'
import { HiArrowNarrowRight, HiLocationMarker } from 'react-icons/hi'
import { AiOutlinePlayCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillSignpostSplitFill } from 'react-icons/bs'
import { FaPhotoVideo } from 'react-icons/fa'

import { Link } from 'react-scroll'

import Asiapage from '../../assets/pictures/asia-page-picture.jpg'
import Asiapage2 from '../../assets/pictures/asia-page-footer.jpg'
import VideoPic2 from '../../assets/pictures/video2.jpg'
import VideoPic3 from '../../assets/pictures/video3.jpg'
import Accommodation from '../../assets/pictures/accommodation.jpg'
import Food from '../../assets/pictures/food.jpg'
import Adventure from '../../assets/pictures/adventure.jpg'
import asia1 from '../../assets/pictures/asia/asia1.jpg'
import asia2 from '../../assets/pictures/asia/asia2.jpg'
import asia3 from '../../assets/pictures/asia/asia3.jpg'
import asia4 from '../../assets/pictures/asia/asia4.jpg'
import Video1 from '../../assets/videos/video1.mp4'
import Video2 from '../../assets/videos/video2.mp4'
import Video3 from '../../assets/videos/video3.mp4'

function Asia() {

    const handleCloseVideo = () => {
        const videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.style.display = 'none';
    }

    const handlePlayVideo = (file) => {
        const videoPlayer = document.getElementById("videoPlayer");
        const myVideo = document.getElementById("myVideo");
        myVideo.src = file;
        videoPlayer.style.display = 'block';
    }

  return (
    <div className='container'>
        <section className='europe-hero'>
            <img src={Asiapage} alt=""/>
            <div className='europe-content'>
                <div className='europe-text'>
                    <h1>Visit</h1>
                    <h1>Asia</h1>
                </div>
                <ul className='europe-nav'>
                    <li><p className='location-text'><HiLocationMarker className='nav-icon' />Come and explore our favorite spots in Asia.</p><Link to='spots' smooth={true} duration={500}><button className='location-btn'>Explore<HiArrowNarrowRight className='loc-icon' /></button></Link></li>
                    <li><p className='location-text'><BsFillSignpostSplitFill className='nav-icon' />Accommodation, Food and Adventures. Things to do in Asia.</p><Link to='explore' smooth={true} duration={500} offset={-70}><button className='location-btn'>Explore<HiArrowNarrowRight className='loc-icon' /></button></Link></li>
                    <li><p className='location-text'><FaPhotoVideo className='nav-icon' />Videos about the beautiful Landscape of Asia.</p><Link to='video' smooth={true} duration={500}><button className='location-btn'>Explore<HiArrowNarrowRight className='loc-icon' /></button></Link></li>
                </ul>
            </div>
        </section>
        <section className='europe-spots' name='spots'>
            <div className='fav-spots'>
                <h1>Favorite Spots</h1>
                <div className='card-container'>
                    <div className='card'>
                        <img src={asia1} alt="" />
                        <div className='card-content'>
                            <h2>Hong Kong</h2>
                            <h3>China</h3>
                        </div>
                        <div className='middle'>
                            <button className='card-btn'>More<HiArrowNarrowRight className='explore-icon' /></button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={asia2} alt="" />
                        <div className='card-content'>
                            <h2>Sensō-ji</h2>
                            <h3>Japan</h3>
                        </div>
                        <div className='middle'>
                            <button className='card-btn'>More<HiArrowNarrowRight className='explore-icon' /></button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={asia3} alt="" />
                        <div className='card-content'>
                            <h2>Penang</h2>
                            <h3>Malaysia</h3>
                        </div>
                        <div className='middle'>
                            <button className='card-btn'>More<HiArrowNarrowRight className='explore-icon' /></button>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={asia4} alt="" />
                        <div className='card-content'>
                            <h2>Tokyo</h2>
                            <h3>Japan</h3>
                        </div>
                        <div className='middle'>
                            <button className='card-btn'>More<HiArrowNarrowRight className='explore-icon' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='europe-explore' name='explore'>
            <h1>Things to do</h1>
            <div className='explore-content'>
                <div className='explore-text'>
                    <h2>Accommodation</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis repellat tempora cupiditate aut qui sint quae sunt, voluptatibus laudantium debitis, reiciendis quasi fugiat, eum sed dignissimos veritatis dicta sapiente.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis repellat tempora cupiditate aut qui sint quae sunt, voluptatibus laudantium debitis, reiciendis quasi fugiat, eum sed dignissimos veritatis dicta sapiente.</p>
                    <button className='explore-btn'>View<HiArrowNarrowRight className='explore-icon' /></button>
                </div>
                <img src={Accommodation} alt="" />
            </div>
            <div className='explore-content'>
                <img src={Food} alt="" />
                <div className='explore-text text-right'>
                    <h2>Food</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis repellat tempora cupiditate aut qui sint quae sunt, voluptatibus laudantium debitis, reiciendis quasi fugiat, eum sed dignissimos veritatis dicta sapiente.</p>
                    <button className='explore-btn btn-right'>View<HiArrowNarrowRight className='explore-icon' /></button>
                </div>             
            </div>
            <div className='explore-content'>
                <div className='explore-text'>
                    <h2>Adventures</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis repellat tempora cupiditate aut qui sint quae sunt, voluptatibus laudantium debitis, reiciendis quasi fugiat, eum sed dignissimos veritatis dicta sapiente.</p>
                    <button className='explore-btn'>View<HiArrowNarrowRight className='explore-icon' /></button>
                </div>
                <img src={Adventure} alt="" />
            </div>
        </section>
        <section className='europe-video' name='video'>
            <img src={Asiapage2} alt=""/>
            <div className='video-content'>
                <div className='video-text'>
                    <h1>Travel and</h1>
                    <h1>inspire your</h1>
                    <h1>life</h1>
                    <AiOutlinePlayCircle className='video-button' onClick={() => {handlePlayVideo(Video1)}}/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ullam similique vel iure in modi odit voluptatem delectus sint cum, aspernatur itaque ut atque, cupiditate veniam quaerat neque repudiandae? Voluptatem.</p>
                </div>
                <div className='videos'>
                    <div className='video-img'>
                        <img src={VideoPic2} alt="" />
                        <AiOutlinePlayCircle className='video-play' onClick={() => {handlePlayVideo(Video2)}}/>
                    </div>
                    <div className='video-img'>
                        <img src={VideoPic3} alt="" />
                        <AiOutlinePlayCircle className='video-play' onClick={() => {handlePlayVideo(Video3)}}/>
                    </div>
                </div>
            </div>
            <div className='video-player' id='videoPlayer'>
                <video src={Video1} width="100%" controls="controls" autoPlay={true} id='myVideo'/>
                <AiOutlineCloseCircle className='video-close' onClick={handleCloseVideo}/>
            </div>
        </section>    
    </div>
  )
}

export default Asia