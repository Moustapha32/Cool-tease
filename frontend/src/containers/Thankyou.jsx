import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'


function Thankyou() {
  return (
    <>
   
 

<body>

   <Header />
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