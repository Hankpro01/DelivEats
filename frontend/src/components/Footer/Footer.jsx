import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Welcome to <b>DelivEats</b>, your go-to destination for delicious meals delivered right to your door. With a diverse menu from your favorite local restaurants, we promise fresh, hot, and satisfying food every time. Sit back, relax, and let us take care of your cravings. Fast, friendly, and always delicious—order now and taste the difference."</p>
            <div className="footer-social-icons">
                <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"><img src={assets.twitter_icon} alt="Twitter" /></a>
                <a href="https://www.facebook.com/?stype=lo&deoia=1&jlou=AfeCj-oNRt0loy-zRp7giNKxpjzG5FUf1sAJsfcZh6qx3zImrqyiJoUzDIhH_77cRgeF7AA-RUI7ftO1KkRUB1BNb1peKZ1wu9OYZH2X-Kxkiw&smuh=37493&lh=Ac9Lp3uUlLfc08PNDBg"><img src={assets.facebook_icon} alt="Facebook" /></a>
                <a href="https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join"><img src={assets.linkedin_icon} alt="Linkdin" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8112-32-1907</li>
                <li>+91-6386-58-6761</li>
                <li>contact@deliveats.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © DelivEats.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
