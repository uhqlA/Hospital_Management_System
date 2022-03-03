import React from 'react'
import Navbar from '../Navbar/Navbar'
import './LandingPage.css'

function LandingPage() {
    return (

        <>
        <Navbar/>
        <div classNameName="container">
            <section className="home" id="home">

                <div className="image">
                    <img src="../assets/LandingPageImages/home.svg" alt="" />
                </div>

                <div className="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <a href="#" className="btn"> contact us  </a>
                </div>

            </section>

        </div >


        </>


    )
}

export default LandingPage