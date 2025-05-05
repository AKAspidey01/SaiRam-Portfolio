import React , { useState , useEffect , useRef } from 'react';
import './Home.scss';
import BgVideo from '../../assets/images/background-video.mp4';
import CVDownload from '../../assets/images/Yedida Sai Ram.pdf';
import Profile from '../../assets/images/profile.png';
import Lottie from 'lottie-react';
import Pacman from '../../assets/images/pacman.json'
import AboutPic from '../../assets/images/about-pic.png'
import Unreal from '../../assets/images/unreal.svg';
import Character from '../../assets/images/character-design.svg'
import GitHubImg from '../../assets/images/git.svg';

import DroneRampAbt from '../../assets/images/drone-ramp-about.png';
import EscapeAbt from '../../assets/images/escape-about.png';

import Btech from '../../assets/images/btech.svg';

import AboutGamePad from '../../assets/images/about-game-ag.svg';

import GamePad from '../../assets/images/gamepad.svg';
import PuzzelGame from '../../assets/images/puzzle-game.svg';

import ContactIcon from '../../assets/images/contact-icon.svg';


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow , Pagination , Autoplay } from 'swiper/modules';


// import "swiper/css";
// import "swiper/css/effect-coverflow";



import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


import DroneSlide1 from '../../assets/images/drone-slide.png';
import DroneSlide2 from '../../assets/images/drone-slide-1.png';
import DroneSlide3 from '../../assets/images/drone-slide-3.png';
import DroneSlide4 from '../../assets/images/drone-slide-4.png';
import DroneSlide5 from '../../assets/images/drone-slide-5.png';


import PuzzleGame1 from '../../assets/images/puzzle-game-1.png';
import PuzzleGame2 from '../../assets/images/puzzle-game-2.png';
import PuzzleGame3 from '../../assets/images/puzzle-game-3.png';
import PuzzleGame4 from '../../assets/images/puzzle-game-4.png';
import PuzzleGame5 from '../../assets/images/puzzle-game-5.png';
// import { LightGallery } from 'lightgallery/lightgallery';

import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/faceboook.svg';
// import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import { NavLink } from 'react-router-dom';
import { contactFormValidation } from '../../../utils/Validations';

import { Formik , Field, Form } from 'formik';

import emailjs from '@emailjs/browser'
import Loader from '../../../utils/Loader/Loader';
import Modal from "react-modal";
import toast from 'react-hot-toast';
import ResumePdf from './YedidaSaiRam_Resume.pdf'

const Home = () => {

  const [activeSection, setActiveSection] = useState('');
  const [aboutTab , setAboutTab] = useState('Skills');
  const [headerBar , setHeaderBar] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setActiveSection(visibleEntry.target.id);
          }, 100); // Adjust delay as needed
        }
      },
      {
        threshold: 0.5,
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => {
      clearTimeout(timeoutRef.current);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);



  const aboutTabsList = [
    {
      link: 'Skills'
    },
    {
      link: 'Experience'
    },
    {
      link: 'Education'
    },
    {
      link: 'Certifications'
    }
  ]

  const droneSlides = [
    {
      image: DroneSlide1,
    },
    {
      image: DroneSlide2,
    },
    {
      image: DroneSlide3,
    },
    {
      image: DroneSlide4,
    },
    {
      image: DroneSlide5,
    },
    {
      image: DroneSlide3,
    },

  ];

  const puzzleSlides = [
    {
      image: PuzzleGame1,
    },
    {
      image: PuzzleGame2,
    },
    {
      image: PuzzleGame3,
    },
    {
      image: PuzzleGame4,
    },
    {
      image: PuzzleGame5,
    },
    {
      image: PuzzleGame3,
    },

  ];


  const socialLinks = [
    {
      icon: Instagram,
      link: 'https://www.instagram.com/sairam_yedida/'
    },
    {
      icon: Facebook,
      link: ''
    },
    {
      icon: GitHubImg,
      link: 'https://github.com/sairam1606'
    },
    {
      icon: LinkedIn,
      link: 'https://www.linkedin.com/in/sairam-yedida-9b367a253/'
    },
  ]

  const contactValues = {
    email: "",
    name: "",
    number: "",
    message: "",
  }


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      borderRadius: 18,
      paddingLeft: 40,
    },
  };







  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
      setHeaderBar(true)
    }
    if(window.pageYOffset <= 500) {
      setHeaderBar(false)
    }
  });
  



  const handleOpenGameLink = (link) => {
    window.open(link , "_blank")
  } 


  const handleOpenSocial = (link) => {
    window.open(link , "_blank")
  } 



  
  function numbersOnly(e) {
    var key = e.key;
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      e.preventDefault();
    } else {
      // console.log("You pressed a key: " + key);
    }
  }


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePdf; 
    link.setAttribute('download', ResumePdf); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };



  const handleCreateContact = async( values , {resetForm}) => {
    const serviceId = 'service_pmhenqm';
    const templateId = 'template_azfe1di';
    const publicKey = 'oNcgTP-T2uwhaecfS';
  
    const templateParams = {
      name: values.name,
      email: values.email,
      number: values.number,
      message: values.message,
    };

    setModalIsOpen(true); 

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      if(response?.status == 200){
        setModalIsOpen(false); 
        toast.success("Message Sent Successfully");
        // console.log('SUCCESS!', response.status, response.text , response);
        resetForm(); 
      }
    })
    .catch((err) => {
      setModalIsOpen(false); 
      // console.error('FAILED...', err);
      toast.error("Error while sending message");
    });
  }



  return (
    <div className="Home"> 
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Loader />
      </Modal>
      <div className="bg-video">
        <video src={BgVideo} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
      </div>
      <header className='header-section fixed top-0 left-0 w-full z-10'>
        <div className="inner-header-section py-6">
          <div className="container">
            <div className="inner-header-nav flex items-center flex-wrap justify-between">
              <div className="left-image-header relative rounded-full overflow-hidden">
                  <img src={Profile} className='w-16 h-16  rounded-full shadow-xl' alt="" />
                  <button type='button' onClick={scrollToTop} className={`top-arrow-section-on-profile absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 duration-500 origin-center rounded-full ${headerBar ? 'scale-100' : 'scale-0'}`}>
                    <i class="bi bi-arrow-up text-3xl text-white"></i>
                  </button>
              </div>
              <div className="right-navigation-header">
                <nav>
                  <ul className='flex items-center  gap-x-1  bg-black bg-opacity-30 rounded-full'>
                    {['home' ,'about', 'games', 'portfolio', 'contact'].map((section) => (
                      <li key={section}>
                        <a href={`#${section}`} className={`font-semibold gradient-changer-link text-lg w-full rounded-full duration-500 px-6 hover:bg-white hover:bg-opacity-30 py-1 ${activeSection === section ? 'gradientBg bg-opacity-100 bg-white text-black' : 'none-gradient-bg text-white'}`}>
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="top-name-section pt-[250px] pb-16" id='home'>
          <div className="container">
            <div className="inner-name-role-section bg-black bg-opacity-20 rounded-[40px] w-fit mx-auto px-16 py-16 shadow-2xl border-4 border-white border-opacity-15">
                  <h1 className='text-white text-center font-bold text-[80px]'>Hi, I'm <span>SaiRam</span></h1>
                  <div className="flex items-center mt-4 gap-x-4 justify-center">
                    <img src={Unreal} className='w-10' alt="" />
                    <p className='text-white font-semibold text-4xl text-center '>Unreal Game Developer</p>
                  </div>
                  {/* <div className="bg-white rounded-full w-fit mx-auto">
                    <Lottie animationData={Pacman} style={{ width: 100 }}/>
                  </div> */}
            </div>
          </div>
      </section>
      <section id="about" className='pt-[200px] pb-100p'>
          <div className="about-section-inner">
            <div className="container">
              <div className="inner-about-grid-section grid grid-cols-12 gap-10">
                    <div className="left-profile-image col-span-4 relative group overflow-hidden rounded-3xl">
                      <img src={AboutPic} className='rounded-3xl object-cover' alt="" />
                      <div className="download-cv absolute w-full bottom-0 text-center py-8 rounded-2xl bg-black bg-opacity-20 translate-y-[110px] duration-500 group-hover:translate-y-0">
                        <button type="button" onClick={handleDownload} className='bg-[#FF5353] px-8 py-2 text-xl font-medium text-white rounded-full'>Download CV <i className="bi bi-cloud-arrow-down ml-4"></i></button>
                      </div>
                    </div>
                    <div className="right-about-details-section col-span-8">
                        <div className="inner-about-descript-section">
                          <div className="top-heading-about">
                            <div className="about-me-heading-part flex items-center gap-5">
                              <img src={AboutGamePad} className='w-16 h-16' alt="" />
                              <h2 className='text-white font-semibold text-6xl'>About Me</h2>
                            </div>
                            <div className="about-des-list mt-5">
                              <ul className='list-disc flex flex-col gap-y-2'>
                                <li className='text-white font-Manrope text-lg font-medium'>Passionate Unreal Engine developer with experience in Blueprints and C++.</li>
                                <li className='text-white font-Manrope text-lg font-medium'>Looking for an internship to build engaging gameplay experiences and deepen my expertise in game development.</li>
                                <li className='text-white font-Manrope text-lg font-medium'>Strong foundation in game programming, prototyping, AI behavior, and Unreal Engine workflows.</li>
                                <li className='text-white font-Manrope text-lg font-medium'>Actively working on multiplayer mechanics and advanced Unreal Engine features.</li>
                              </ul>
                            </div>
                            <div className="about-bottom-tabs-section bg-black bg-opacity-30 mt-5 rounded-3xl overflow-hidden">
                              <div className="top-tabs-links-sec grid grid-cols-12 relative py-2 border-b border-white border-opacity-20">
                                {aboutTabsList.map((items , index) => {
                                  return (
                                    <div className="single-about-tab col-span-3" key={index}>
                                      <button type="button" onClick={() => setAboutTab(items.link)} className={`w-full py-2 text-white duration-300 text-lg capitalize ${items.link == aboutTab ? 'opacity-100' : 'opacity-65'}`}>{items?.link}</button>
                                    </div>
                                  )
                                })}
                                <div className={`sliding-tabber bg-red-500 absolute bottom-0 w-1/4 duration-500 h-[3px] ${aboutTab == 'Skills' ? 'left-0' : aboutTab == 'Experience' ? 'left-1/4' : aboutTab == 'Education' ? 'left-1/2' : 'left-[75%]'}`}></div>
                              </div>
                              <div className="bottom-tab-about-content px-5 py-4 h-[300px]">
                                {aboutTab == "Skills" ? 
                                  <div className="single-tab-section-about flex flex-col gap-8">
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={Unreal} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Unreal Engine 5</h4>
                                        <p className='text-white font-medium opacity-70'>Blueprints, C++</p>
                                      </div>
                                    </div>
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={Character} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Gameplay Programming</h4>
                                        <p className='text-white font-medium opacity-70'>(Player movement, AI behavior, obstacle interactions,Health and damage systems) <br /> Game Optimization & Debugging</p>
                                      </div>
                                    </div>
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={GitHubImg} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Version Control</h4>
                                        <p className='text-white font-medium opacity-70'>Git, GitHub</p>
                                      </div>
                                    </div>
                                </div> : null }
                                {aboutTab == "Experience" ? 
                                  <div className="single-tab-section-about flex flex-col gap-8">
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={DroneRampAbt} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Drone Rampage (Blueprints) - Unreal Engine 5</h4>
                                        <p className='text-white font-medium opacity-70'>Designed and developed a drone-based action game using Unreal Engine Blueprints. Implemented player movement, shooting mechanics, and enemy interactions.Created interactive UI elements and game logic.</p>
                                      </div>
                                    </div>
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={EscapeAbt} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Escape Island (C++) - Unreal Engine 5</h4>
                                        <p className='text-white font-medium opacity-70'>Developed a C++-based obstacle course game where players navigate moving obstacles.Implemented custom player movement and obstacle behavior using C++.Designed multiple levels with increasing difficulty.</p>
                                      </div>
                                    </div>
                                </div> : null }
                                {aboutTab == "Education" ? 
                                  <div className="single-tab-section-about flex flex-col gap-8">
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={Btech} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Bachelors of technology</h4>
                                        <p className='text-white font-medium opacity-70'>CSE (AI&ML) -2025</p>
                                      </div>
                                    </div>
                                </div> : null }
                                {aboutTab == "Certifications" ? 
                                  <div className="single-tab-section-about flex flex-col gap-8">
                                    <div className="inner-single-tab-blks flex items-center gap-x-4">
                                      <div className="left-about-tab-icon">
                                        <img src={GitHubImg} loading='lazy' className='w-16 h-16 min-w-16' alt="" />
                                      </div>
                                      <div className="right-text-about-tab">
                                        <h4 className='font-medium text-xl text-[#ff68a1]'>Git Version Control</h4>
                                        {/* <p className='text-white font-medium opacity-70'>CSE (AI&ML) -2025</p> */}
                                      </div>
                                    </div>
                                </div> : null }
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
      </section>
      <section id="games" className='py-[100px]'>
        <div className="inner-games-section">
          <div className="container">
            <div className="about-me-heading-part flex items-center gap-5">
              <img src={AboutGamePad} className='w-16 h-16' alt="" />
              <h2 className='text-white font-semibold text-6xl'>My Games</h2>
            </div>
            <div className="games-youtube-section grid grid-cols-12 mt-10 gap-10">
              <div className="single-game-section px-7 py-8 rounded-[30px] bg-white shadow-2xl  col-span-6">
                  <div className="top-game-img-playbtn flex items-center justify-between flex-wrap gap-x-4">
                    <img src={GamePad} className='h-60p w-fit' alt="" />
                    <div className="playbtn">
                      <button type="button" onClick={() => handleOpenGameLink("https://sairamyedida.itch.io/drone-rampage")} className='bg-[#FF5353] px-8 py-2 text-xl font-medium text-white rounded-full duration-500 hover:scale-95'>Play Now</button>
                    </div>
                  </div>
                  <div className="top-content-single-game text-left">
                    <h2 className='text-2xl font-medium text-black mt-5'>Drone Rampage</h2>
                    <p className='text-black font-medium opacity-70 '>An action-packed drone shooting game built with <br /> Unreal Engine Blueprints.</p>
                  </div>
                  <div className="youtube-video-sec rounded-3xl overflow-hidden mt-6">
                    <iframe className='w-full ' width="" height="280" src="https://www.youtube.com/embed/saw9HczIb18?si=d0B_xGQ0WNayQDGK" 
                    title="Drone Rampage Gameplay"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen> </iframe>
                  </div>
              </div>
              <div className="single-game-section px-7 py-8 rounded-[30px] bg-white shadow-2xl  col-span-6">
                  <div className="top-game-img-playbtn flex items-center justify-between flex-wrap gap-x-4">
                    <img src={PuzzelGame} className='h-60p w-fit' alt="" />
                    <div className="playbtn">
                      <button type="button" onClick={() => handleOpenGameLink("https://sairamyedida.itch.io/escape-island")} className='bg-[#FF5353] px-8 py-2 text-xl font-medium text-white rounded-full duration-500 hover:scale-95'>Play Now</button>
                    </div>
                  </div>
                  <div className="top-content-single-game text-left">
                    <h2 className='text-2xl font-medium text-black mt-5'>Escape Island</h2>
                    <p className='text-black font-medium opacity-70 '>A fun-packed 3d platformer with Zombie attacks and dangerous obstacles made with a combination of c++ and Blueprints</p>
                  </div>
                  <div className="youtube-video-sec rounded-3xl overflow-hidden mt-6">
                    <iframe className='w-full ' width="" height="280" src="https://www.youtube.com/embed/2moyD3tCQqE?si=m0XRGMw2MYCGMYyM" 
                    title="Drone Rampage Gameplay"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen> </iframe>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className='py-[100px]'>
          <div className="inner-portfolio-section">
            <div className="container">
              <div className="top-demo-section-flexer flex items-center justify-between">
                <div className="about-me-heading-part flex items-center gap-5">
                  <img src={AboutGamePad} className='w-16 h-16' alt="" />
                  <h2 className='text-white font-semibold text-6xl'>Demo</h2>
                </div>
                <div className="right-see-more-sec">
                  <button type="button" onClick={() => handleOpenGameLink('https://sairamyedida.itch.io/')} className='text-white text-xl hover:text-[#ff004f] group duration-300 flex items-center gap-2'><p className='font-semibold'>See More</p><i className="bi bi-arrow-right h-[24px] group-hover:translate-x-4 duration-500"></i> </button>
                </div>
              </div>
              <div className="iner-portfolio-grid-section grid grid-cols-12 gap-10 mt-10">
                <div className="single-portfolio-slider col-span-6 slider-heading-parts bg-[#262626] rounded-20p">
                  <div className=" px-6 py-5 border-b border-white border-opacity-30">
                    <h2 className='text-3xl text-white font-medium'>Drone Rampage</h2>
                  </div>
                  <div className="lightroom-react-gallery-section p-5">
                    <LightGallery
                      speed={500}
                      plugins={[lgThumbnail, lgZoom]}
                    >
                      {droneSlides.map((img, index) => (
                        <a href={img.image} key={index} className="col-span-6 block">
                          <img
                            src={img.image}
                            alt=""
                            className="h-[160px] w-full object-cover rounded-2xl"
                          />
                        </a>
                      ))}
                    </LightGallery>
                  </div>
                  {/* <Swiper
                      effect="coverflow"
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView="2"
                      speed={600}
                      loop={true}
                      initialSlide={2}
                      preventClicks={true}
                      coverflowEffect={{
                          rotate: 0,
                          stretch: 300,
                          depth: 500,
                          modifier: 1,
                          slideShadows: true,
                      }}
                      autoplay={{
                          delay: 2500,
                          disableOnInteraction: false
                      }}
                      pagination={{
                          clickable: true,
                      }}
                      breakpoints={{
                        2000: {
                            slidesPerView: 2,
                            
                        },
                        1700 : {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 1
                        },
                        674: {
                            slidesPerView: 1
                        },
                        375: {
                            slidesPerView: 1,
                        },
                        75: {
                            slidesPerView: 1
                        }
                    }}
                      modules={[EffectCoverflow , Autoplay]}
                      className="mySwiper"
                      onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)} 
                      >
                      {droneSlides.map((slide, index) => (
                          <SwiperSlide key={index}>
                              <div className="single-banner-slides-section-1 ">
                                  <img src={slide.image} className='h-full object-cover rounded-3xl' alt="" />
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper> */}
                </div>
                <div className="single-portfolio-slider col-span-6 slider-heading-parts bg-[#262626] rounded-20p">
                  <div className=" px-6 py-5 border-b border-white border-opacity-30">
                    <h2 className='text-3xl text-white font-medium'>Escape Island</h2>
                  </div>
                  <div className="lightroom-react-gallery-section p-5">
                    <LightGallery
                      speed={500}
                      plugins={[lgThumbnail, lgZoom]}
                    >
                      {puzzleSlides.map((img, index) => (
                        <a href={img.image} key={index} className="col-span-6 block">
                          <img
                            src={img.image}
                            alt=""
                            className="h-[160px] w-full object-cover rounded-2xl"
                          />
                        </a>
                      ))}
                    </LightGallery>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id="contact" className='pt-[100px]'>
          <div className="inner-portfolio-section">
            <div className="container">
              <div className="about-me-heading-part flex items-center gap-5">
                <img src={ContactIcon} className='w-16 h-16' alt="" />
                <h2 className='text-white font-semibold text-6xl'>Contact</h2>
              </div>
              <div className="inner-contact-form-section bg-[#262626] p-8 rounded-2xl mt-10">
                  <div className="inner-contat-section-grid grid grid-cols-12">
                      <div className="left-follow-section-contact col-span-4 flex flex-col justify-between gap-10">
                        <div className="reachout-to-me">
                          <h2 className='text-2xl font-regular'>Reach out to me</h2>
                          <div className="reach-number-email flex flex-col gap-4 mt-6">
                            <a href="mailto:sairamyedidaoffl@gmail.com" className='text-xl text-white font-medium inline-block duration-300 leading-[24px] hover:text-[#FF5353]'><i class="bi bi-envelope mr-2"></i> sairamyedidaoffl@gmail.com</a>
                            <a href="tel:+916309641235" className='text-xl text-white font-medium inline-block duration-300 leading-[24px] hover:text-[#FF5353]'><i class="bi bi-telephone mr-2"></i> +91 630 964 1235</a>
                          </div>
                          <div className="download-cv py-8 rounded-2xl duration-500">
                            <button type="button" onClick={handleDownload} className='bg-[#277dff] px-8 py-2 text-xl font-medium text-white rounded-full'>Download CV <i className="bi bi-cloud-arrow-down ml-4"></i></button>
                          </div>
                        </div>
                        <div className="social-media-section">
                          <h2 className='text-2xl font-regular'>Follow me on</h2>
                          <div className="social-media-icons flex flex-wrap gap-6 mt-6">
                              {socialLinks.map((items , index) => {
                                return (
                                  <button type="button" key={index} onClick={() => handleOpenSocial(items.link)} className='single-social-icon-footer duration-300 hover:scale-95'>
                                    <img src={items.icon} className='w-10 h-10 rounded-full' alt="" />
                                  </button>
                                )
                              })}
                          </div>
                        </div>
                      </div>
                      <div className="right-form-section-contact col-span-8">
                          <div className="inner-contact-form-section">
                            <Formik
                              validationSchema={contactFormValidation}
                              initialValues={contactValues}
                              onSubmit={(values , {resetForm}) => handleCreateContact(values , {resetForm})}
                            >
                              {({ errors, touched, handleSubmit, values }) => (
                                <Form>
                                  <div className="main-business-former-sec flex flex-col gap-5">
                                    <div className="single-form-section-business business-basic-details  rounded-[15px] bg-white">
                                      <div className="inner-fields-grid-outer-main p-6 grid grid-cols-12 gap-5 items-end">
                                        <div className="form-inputsec relative col-span-6">
                                          <div className="label-section mb-1">
                                            <p className="text-BusinessFormLabel text-black opacity-60">
                                              Name
                                            </p>
                                          </div>
                                          <Field
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            className={`outline-none border font-semibold focus:border-Secondary focus:bg-LightBlue duration-300 px-5 py-3 rounded-lg bg-white w-full text-Black  ${
                                              errors.name && touched.name
                                                ? "border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500"
                                                : "text-Black border-LoginFormBorder placeholder:text-Black"
                                            }`}
                                          />
                                        </div>
                                        <div className="form-inputsec relative col-span-6">
                                          <div className="label-section mb-1">
                                            <p className="text-BusinessFormLabel text-black opacity-60">
                                              Mobile Number
                                            </p>
                                          </div>
                                          <Field
                                            type="tel"
                                            name="number"
                                            placeholder="Enter Mobile Number"
                                            maxLength={10}
                                            onKeyPress={(e) => numbersOnly(e)}
                                            className={`outline-none border font-semibold focus:border-Secondary focus:bg-LightBlue duration-300 px-5 py-3 rounded-lg bg-white w-full text-Black  ${
                                              errors.number &&
                                              touched.number
                                                ? "border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500"
                                                : "text-Black border-LoginFormBorder placeholder:text-Black"
                                            }`}
                                          />
                                        </div>
                                        <div className="form-inputsec relative col-span-12">
                                          <div className="label-section mb-1">
                                            <p className="text-BusinessFormLabel text-black opacity-60">
                                              Email Address
                                            </p>
                                          </div>
                                          <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            className={`outline-none border font-semibold focus:border-Secondary focus:bg-LightBlue duration-300 px-5 py-3 rounded-lg bg-white w-full text-Black  ${
                                              errors.email && touched.email
                                                ? "border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500"
                                                : "text-Black border-LoginFormBorder placeholder:text-Black"
                                            }`}
                                          />
                                        </div>
                                        <div className="form-inputsec relative col-span-12">
                                          <div className="label-section mb-1">
                                            <p className="text-BusinessFormLabel text-black opacity-60">
                                              Email Address
                                            </p>
                                          </div>
                                          <Field
                                            as="textarea"
                                            name="message"
                                            placeholder="Enter your message"
                                            className={`outline-none border font-semibold h-[150px] resize-none focus:border-Secondary focus:bg-LightBlue duration-300 px-5 py-3 rounded-lg bg-white w-full text-Black  ${
                                              errors.message && touched.message
                                                ? "border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500"
                                                : "text-Black border-LoginFormBorder placeholder:text-Black"
                                            }`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bottom-form-submitter col-span-5  overflow-hidden relative group ">
                                      <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full py-4 px-4 rounded-xl text-white font-medium text-lg h-full bg-[#FF5353] disabled:bg-opacity-35 "
                                      >
                                        Send Message 
                                      </button>
                                    </div>
                                  </div>
                                </Form>
                              )}
                            </Formik>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="bottom-privacy-section bg-white bg-opacity-15 py-8 mt-12">
                <div className="container">
                  <div className="privacy-links">
                      <ul className='flex items-center justify-center gap-10'>
                        <li><NavLink className={'text-white font-medium hover:text-[#FF5353] duration-300'}>Terms & Conditions</NavLink></li>
                        <li><NavLink className={'text-white font-medium hover:text-[#FF5353] duration-300'}>Privacy Policy</NavLink></li>
                        <li><NavLink className={'text-white font-medium hover:text-[#FF5353] duration-300'}>Refund & Cancellation Policy</NavLink></li>
                      </ul>
                  </div>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
