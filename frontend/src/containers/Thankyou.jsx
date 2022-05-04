import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Logo from '../assets/img/logo.png'
import Icon1 from '../assets/img/search-icon.svg'
import Icon2 from '../assets/img/shopping-cart.png'
import Icon3 from '../assets/img/user-icon.png'

function Thankyou() {
  return (
    <>
    <Header />
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You</title>
</head>

<body>

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
    <section>
        <div class="thanks">
            <p>Thank you for Ordering</p>
        </div>
    </section>
    <div class="message">
        <p>
            Thank you for ordering. We received your request. <br />
            Our staff will be contacting with you to tell next steps.
        </p>
        <center>        <a href="./homepage.html"><button class="backtohome">BACK TO HOME</button></a>
        </center>

    </div>
</body>
    
    
    
    <Footer />
    </>
  )
}

export default Thankyou