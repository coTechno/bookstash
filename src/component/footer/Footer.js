import React from 'react';
import './Footer.css';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-top">

        <div className="footer-col">

          <div className="footer-logo">
            <h1>BookStash</h1>
          </div>
          <div className="footer-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
          <div className="footer-contact">
            <p>Give Us A Call</p>
            <span>+91-98765 43210</span>
          </div>
        </div>


        <div className="footer-col">
          <table>
            <thead>
              <tr>
                <th>About BookStash</th>
                <th>Help & FAQs</th>
                <th>Ways to Shop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carrier</td>
                <td>My Account</td>
                <td>Online Ordering</td>
              </tr>
              <tr>
                <td>Supply Chain Transparency</td>
                <td>Shipping</td>
                <td>BestSellers</td>
              </tr>
              <tr>
                <td>Reward Bazaar</td>
                <td>Billing</td>
                <td>Beauty Magazines</td>
              </tr>
              <tr>
                <td>Bookstash Global Sites</td>
                <td>Flash Unlimited Shipping</td>
                <td>Contact Us</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with <span>💗</span> by Zehra Khan.</p>
      </div>
    </div>
  )
}

export default Footer