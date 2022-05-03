import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import backgroundImg from '../assets/img/background.png'
import cardImg1 from '../assets/img/img-1.png'
import cardImg2 from '../assets/img/img-2.png'
import cardImg3 from '../assets/img/img-3.png'
import cardImg4 from '../assets/img/img-4.png'


function Home() {
  return (
    <>
   <Header />
   <section class="main">
        <div class="cool-tees">
            <img class="background-img" src={backgroundImg} alt=""/>
            <h1 id="heading1">
                Cool Tees For <br/>
                MEN & WOMEN

            </h1>
        </div>
        <h1 class="Heading2">Selected For you </h1>
        <ul class="container">
            <li class="menus">
                <div class="cards" >
                    <img class="card-img" src={cardImg1} alt="" />
                </div>
                <div class="names">
                    <div class="price&name">
                        <p>Gallaxy</p>
                        <h3>$ 19.99</h3>
                    </div>
                    <button class="addtocart">Add to cart</button>

                </div>
            </li>
            <li class="menus">
                <div class="cards">
                    <img class="card-img" src={cardImg2} alt="" />
                </div>
                <div class="names">
                    <div class="price&name">
                        <p>Hoodiboi</p>
                        <h3>$ 29.99</h3>
                    </div>
                    <button class="addtocart">Add to cart</button>

                </div>
            </li>
            <li class="menus">
                <div class="cards">
                    <img class="card-img" src={cardImg3} alt="" />
                </div>
                <div class="names">
                    <div class="price&name">
                        <p>Bruh</p>
                        <h3>$ 16.99 </h3>
                    </div>
                    <button class="addtocart">Add to cart</button>

                </div>
            </li>
            <li class="menus">
                <div class="cards">
                    <img class="card-img" src={cardImg4} alt="" />
                </div>
                <div class="names">
                    <div class="price&name">
                        <p>Nype</p>
                        <h3>$ 11.99</h3>
                    </div>
                    <button class="addtocart">Add to cart</button>

                </div>
            </li>
            </ul>
           </section>
    <Footer/>
    </>
  )
}

export default Home