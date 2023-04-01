import React from "react";
import '../css/Footer.css'

export const Footer = () => {
  return (
    <div>
      <footer class="footer-area bg-gray pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-sm-4">
              <div class="copyright mb-30">
                <div class="footer-logo">
                  <a href="/">
                    <img alt="" src="/assets/img/logo/logo.png"></img>
                  </a>
                </div>
                <p>
                  {/* © 2023 */}
                  {/* <br></br> */}
                  <a class="pt-5"
                    href="https://hasthemes.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                   <h2><b style={{fontFamily:'Delicious Handrawn',color:'brown',marginTop:100}}>FRASER</b></h2>
                  </a>
                  {/* <br></br> */}
                  © 2023
                  <br></br> All Rights Reserved
                </p>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="footer-widget mb-30 ml-30">
                <div class="footer-title">
                  <h3>ABOUT US</h3>
                </div>
                <div class="footer-list">
                  <ul>
                    <li class='lii' >
                      <a href="/about">About us</a>
                    </li>
                    <li class='lii'>
                      <a href="/#/">Store location</a>
                    </li>
                    <li class='lii'>
                      <a href="/contact">Contact</a>
                    </li>
                    <li class='lii'>
                      <a href="/#/">Orders tracking</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="footer-widget mb-30 ml-50">
                <div class="footer-title">
                  <h3>LINKS</h3>
                </div>
                <div class="footer-list">
                  <ul>
                    <li class='lii'>
                      <a href="/#/">Returns</a>
                    </li>
                    <li class='lii'>
                      <a href="/#/">Support Policy</a>
                    </li>
                    <li class='lii'>
                      <a href="/#/">Size guide</a>
                    </li>
                    <li class='lii'>
                      <a href="/#/">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget mb-30 ml-75">
                <div class="footer-title">
                  <h3>FOLLOW US</h3>
                </div>
                <div class="footer-list">
                  <ul>
                    <li class='lii'>
                      <a
                        href="//www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li class='lii'>
                      <a
                        href="//www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li class='lii'>
                      <a
                        href="//www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li class='lii'>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="footer-widget mb-30 ml-70">
                <div class="footer-title">
                  <h3>SUBSCRIBE</h3>
                </div>
                <div class="subscribe-style">
                  <p>
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  <div>
                    <div class="subscribe-form">
                      <div class="mc-form">
                        <div>
                          <input
                            id="mc-form-email"
                            class="email"
                            type="email"
                            placeholder="Enter your email address..."
                          ></input>
                        </div>
                        <div class="clear">
                          <button class="button">SUBSCRIBE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
