import React from "react";
import '../css/Details.css'


export const Details = () => {
  return (
    <div class="support-area mt-5 pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src={require('../images/support-1.png')}
                  alt=""
                ></img>
              </div>
              <div class="support-content">
                <h5>Free Shipping</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src={require('../images/support-2.png')}
                  alt=""
                ></img>
              </div>
              <div class="support-content">
                <h5>Support 24/7</h5>
                <p>Support team available</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src={require('../images/support-3.png')}
                  alt=""
                ></img>
              </div>
              <div class="support-content">
                <h5>Money Return</h5>
                <p>Get your money in your account</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src={require('../images/support-4.png')}
                  alt=""
                ></img>
              </div>
              <div class="support-content">
                <h5>Order Discount</h5>
                <p>Discount on every order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
