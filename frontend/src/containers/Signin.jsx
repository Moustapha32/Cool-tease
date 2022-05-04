import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import BackgroundImage from '../assets/img/background.png'
import Logo from '../assets/img/logo.png'
import Icon1 from '../assets/img/search-icon.svg'
import Icon2 from '../assets/img/shopping-cart.png'
import Icon3 from '../assets/img/user-icon.png'
import Love1 from '../assets/img/img-1.png'
import Love2 from '../assets/img/img-2.png'
import Love3 from '../assets/img/img-3.png'
import Love4 from '../assets/img/img-4.png'


function Signin() {
  return (
    <>
    <Header />
    
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="style.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign in</title>
</head>

<body>
    <section class="sign_up">
        <div class="sign">
            <h2 id="signup_h2">
                Sign In
            </h2>
            <br />
            <p id="signup_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />

            </p>

            <input type="email" placeholder="email" id="signupbar" /> <br />
            <input type="password" placeholder="password" id="signupbar" /> <br />
            <input type="checkbox" />
            <label> I agree to the Google Terms of Service and
                Privacy Policy
            </label>
            <br/> <br />
            <button class="signup-button">Sign In</button> <br/> <br/>
            <a id="alreadyamember" href="./signup.html">Not a member Sign up</a>
        </div>
    </section>

    <header>
        <div class="header">
            <img class="logo" src={Logo} alt="" />
            <div class="icons">
                <img class="icon" src={Icon1} alt="" />
                <img class="icon" src={Icon2} alt="" />
                <img class="icon" src={Icon3} alt="" />
            </div>
        </div>

    </header>
    <section class="main">
        <div class="cool-tees">
            <img class="background-img" src={BackgroundImage} alt="" />
            <h1 id="heading1">
                Cool Tees For <br />
                MEN & WOMEN

            </h1>
        </div>
        <h1 class="Heading2">Selected For you </h1>
        <ul class="container">
            <li class="menus">
                <div class="cards">
                    <img class="card-img" src={Love1} alt="" />
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
                    <img class="card-img" src={Love2} alt="" />
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
                    <img class="card-img" src={Love3} alt="" />
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
                    <img class="card-img" src={Love4} alt="" />
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
</body>
        <Footer />
    
    
    
    </>
  )
}

export default Signin