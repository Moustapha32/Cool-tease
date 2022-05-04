import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

function Order() {
  return (
    <>
    <Header />
<body>
    <div class="thanks">
            <p>Order your items</p>
        </div>
        <section class="details">
            <div class="product-details">
                <h3>Shipment Details</h3>
                <h4>Please Check your details and confirm it </h4>
                <div class="box2">
                <table>
                    <tr>
                        <td class="td-item">Trinidad</td>
                        <td class="td-quantity">1</td>
                        <td class="td-price">$89.99</td>
                    </tr>
                    <tr>
                        <td class="td-items">Pergamino</td>
                        <td class="td-quantitys">1</td>
                        <td class="td-prices">$69.99</td>
                    </tr>
                    <tr class="border">
                        <td>Total Price</td>
                        <td>2</td>
                        <td>$159.98</td>
                    </tr>
                </table>
                <br />
                <br />
            </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">Full name</label>
                    <input type="text" id="name" placeholder="Enter Recepient's Name" />
                </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">Phone Number</label>
                    <input type="text" id="name" placeholder="Enter phone number" />
                </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">Street Address or P.O Box</label>
                    <input type="text" id="name" placeholder="Enter street address or P.O box" />
                </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">Pin Code</label>
                    <input type="text" id="name" placeholder="Enter pin code" />
                </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">Apt, Suite, Unit, Building, Floor, etc.</label>
                    <input type="text" id="name" placeholder="Enter Apt, Suite, Unit, Building, Floor, etc."/>
                </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">City</label>
                    <input type="text" id="name" placeholder="Enter city" />
                </div>
            </div>
            <div class="dispatch">
                <div class="form">
                    <label class="supplie" for="name">State</label>
                    <input type="text" id="name" placeholder="Enter state" />
                </div>
            </div>
            <div class="message-me">
               <a href="./thankYou.html"><button class="submit">SUBMIT</button></a>
            </div>
        </section>
</body>
    
    
    <Footer />
    </>
  )
}

export default Order