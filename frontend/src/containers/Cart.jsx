import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Product1 from '../assets/img/img-1.png'
import Product2 from '../assets/img/img-4.png'
import Product3 from '../assets/img/img-2.3.png'


function Cart() {
  return (
    <>
    <Header/>

    <hr >
      <main>
        <div class="heading">
          <h2>Wish List</h2>
        </div>
        <table>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
          <tr>
          <td>
            <div class="product">
              <img src={Product1} alt="image" width="50" height="50" />
              <p>Galaxy</p>
            </div>
          </td>
          <td>XL</td>
          <td><button>+ 1 -</button></td>
          <td>$ 89.99</td>
          </tr>
          </table>
          {/* <td>
            <div class="product">
              <img src={Product2} alt="image" width="50" height="50" />
              <p>Nype</p>
              <p></p>
            </div>
          </td>
          <td>Large</td>
          <td><button>+ 1 -</button></td>
          <td>$ 69.99</td>
          <tr/>
          <td>
            <div class="product">
              <img src={Product3} alt="image" width="50" height="50" />
              <p>We Stand</p>
              <p></p>
            </div>
          </td>
          <td>XL</td>
          <td><button>+ 1 -</button></td>
          <td>$14</td>
          <tr/>
        </table>
        <hr /> */}
  {/* <div class="heading">
    <h2>Shopping Cart</h2>
  </div>
  <table>
    <tr>
      <th>Product</th>
      <th>Size</th>
      <th>Amount</th>
      <th>Price</th>
    </tr>
    </table> */}
    </main>
    </hr>


    <Footer/>
    
    </>
  )
}

export default Cart