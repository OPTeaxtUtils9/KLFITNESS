import React from "react";
import "./style.css";
import loading from "./FitnessLover.png";
import logo from "./KL-removebg-preview.png";
import Boy from "./boyjym90.png";
import Jym1 from "./Jym1.jpg";
import Jym2 from "./Jym2.jpg";
import Jym3 from "./Jym3.jpg";
import Jym4 from "./Jym4.jpg";
import Trainer from "./Trainer.jpg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light my-4">
        <div className="container">
          {/* <!-- Logo Section --> */}
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Bootstrap"
              id="Bootstrap"
              width="150"
              height="79"
            />
          </a>

          {/* <!-- Navbar Toggle (for mobile view) --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar Links --> */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white px-4"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-4" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-4" href="#">
                  Gallary
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-4" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-4" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section 1 */}
      <section>
        <div className="container-fluid text-white container-custom">
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- Left Section: Text --> */}
              <div
                className="col-md-6 my-3 order-md-1 order-2"
                id="section1text"
              >
                <h1>KL FITNESS</h1>
                <h2>
                  The pain you feel today will be the strength you feel
                  tomorrow.
                </h2>
                <p id="para">
                  "At KL Fitness, we believe in empowering individuals to
                  achieve their fitness goals through hard work, dedication, and
                  expert guidance. Our state-of-the-art facility is equipped
                  with the latest workout machines, free weights, and functional
                  training equipment to help you get stronger, fitter, and
                  healthier. Whether you're a beginner or an experienced
                  athlete, our certified trainers are here to provide
                  personalized support and motivation. Join us today and be a
                  part of a community that thrives on fitness, well-being, and
                  the pursuit of a healthier lifestyle."
                </p>
                <button className="btn">JOIN NOW</button>
              </div>

              {/* <!-- Right Section: Image --> */}
              <div className="col-md-6 text-center image-section order-md-2 order-1">
                <img src={loading} id="rightimg" alt="Mobile Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Step */}

      <div className="container-fluid text-white container-custom" id="card">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 ">
              <div className="card " style={{ width: "18rem" }}>
                <img className="card-img-top" src={Jym1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Lifting Machine</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={Jym2} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Jym Machines</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={Jym3} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Back Machines</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={Jym4} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Lower Back</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <section>
        <div className="container-fluid text-white container-custom my-5">
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- Right Section: Image --> */}
              <div className="col-md-6 text-center image-section">
                <img src={Boy} alt="Mobile Image" />
              </div>

              {/* <!-- Left Section: Text --> */}
              <div className="col-md-6 my-2">
                <h1>KL FITNESS</h1>
                <p>
                  "At KL Fitness, we believe in empowering individuals to
                  achieve their fitness goals through hard work, dedication, and
                  expert guidance.Our state-of-the-art facility is equipped with
                  the latest workout machines, free weights, and functional
                  training equipment to help you get stronger, fitter, and
                  healthier. Whether you're a beginner or an experienced
                  athlete, our certified trainers are here to provide
                  personalized support and motivation. Join us today and be a
                  part of a community that thrives on fitness, well-being, and
                  the pursuit of a healthier lifestyle."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      
      <footer className="bg-dark text-white pt-5 ">
  <div className="container">
    <div className="row">
      {/* <!-- Left Section (Brand and Description) --> */}
      <div className="col-md-4 mb-4">
        <h4 className="text-uppercase font-weight-bold">KL FITNESS</h4>
        <p>The pain you feel today will be the strength you feel tomorrow.     

        </p>
        {/* <!-- Social Media Icons --> */}
        <div className="row">
          <div className="col-lg-4 text-center my-2">
            <img className="rounded-circle" src={Trainer} alt="Generic placeholder image" width="140" height="140"/>
            <h5 className="py-3">Suresh Sharma
              <br/>
              Jym Trainer
              </h5>            
          </div>        
          
        </div>
      </div>

      {/* <!-- Quick Links Section --> */}
      <div className="col mb-4">
        <h4 className="text-uppercase font-weight-bold">Quick Links</h4>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About Us</a></li>
          <li><a href="#" className="text-white">Gallery</a></li>
          <li><a href="#" className="text-white">Blog</a></li>
          <li><a href="#" className="text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* <!-- Our Services Section --> */}
      <div className="col mb-4">
        <h4 className="text-uppercase font-weight-bold">Our Services</h4>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Jym Trainer</a></li>
          <li><a href="#" className="text-white">Coffee Tea</a></li>
          <li><a href="#" className="text-white">Cardio</a></li>
          <li><a href="#" className="text-white">Strength</a></li>
          <li><a href="#" className="text-white">Dancing</a></li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h4 class="text-uppercase font-weight-bold">Get In Touch</h4>
        <address>
          Agra Road Purani chungi<br/>
          Jamdoli Road, in front of silvan park<br/>        
          <strong>Phone:</strong> 6350477369<br/>
          <strong>Email:</strong> klfitnes0909@gmail.com
        </address>
      </div>
  </div>
  </div>

  {/* <!-- Footer Bottom --> */}
  <div className="text-center py-3 mt-4" id="footerbg">
    <p className="mb-0">KL Fitness :- © 2020 -2024</p>
  </div>
</footer>

    </>
  );
}
