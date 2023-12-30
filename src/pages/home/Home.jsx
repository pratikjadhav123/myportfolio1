import React from 'react'
import profile from "../../assets/home.jpeg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
     <section className="home section grid">
        <img src={profile} alt="" className="home__img" />

        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title">
                    <span>I'm Pratik Jadhav.</span> Software Developer
                </h1>
                <p className="home__description">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Aut ut, magnam 
                    exercitationem mollitia ratione eveniet similique 
                    consequuntur velit provident voluptas?
                </p>
                <Link to="/about" className='button'>
                    More About Me <span className="button__icon"><FaArrowRight /></span>
                </Link>
            </div>
        </div>
        <div className="color__block"></div>
     </section>
  )
}

export default Home