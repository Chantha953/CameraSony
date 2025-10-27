import React from "react";
import aboutCamera from "../assets/images/aboutCamera.png";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile4.png";
import profile3 from "../assets/images/profile5.png";
import {
  faCameraRetro,
  faScrewdriverWrench,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutPage = () => {
  return (
    <div className="container my-5 text-white aboutPage">
      <section className="text-center mb-5">
        <h1 className="text-uppercase gradient-text">About</h1>
        <p className="text-white fs-5">
          We bring the world of photography closer to you.
        </p>
      </section>

      {/* Intro Section */}
      <section className="row align-items-center mb-5">
        <div
          className="col-md-6 mb-4 mb-md-0"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          <img
            src={aboutCamera}
            alt="Camera Store"
            className="img-fluid rounded-4 border"
          />
        </div>
        <div
          className="col-md-6 border p-3 rounded-4 bg-blur"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          <p style={{ fontSize: "22px" }}>
            At Camera Store, we’re passionate about bringing the art of
            photography to everyone. From cutting-edge digital cameras to
            professional lenses, tripods, and accessories — we provide only the
            best equipment from trusted brands like Sony, Canon, Nikon, and
            Fujifilm.
          </p>
          <p style={{ fontSize: "22px" }}>
            Our goal is simple: to empower every creator — from curious
            beginners to seasoned professionals — with the right tools to turn
            moments into masterpieces.
          </p>
          <p style={{ fontSize: "22px" }}>
            We don’t just sell products; we deliver reliability, guidance, and
            lifelong support for every photography journey.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="row text-center mb-5 g-4">
        <div
          className="col-md-6"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
            <h2 className="text-white mb-3">Our Mission</h2>
            <p>
              To empower creators by providing them with the tools and
              technology needed to capture life’s best moments in perfect
              detail.
            </p>
          </div>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
            <h2 className="text-white mb-3">Our Vision</h2>
            <p>
              To become the leading photography store known for quality, trust,
              and innovation in the camera industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="text-center mb-5">
        <h2 className="fw-bold text-primary mb-4 fs-1 gradient-text">
          What We Offer
        </h2>
        <div className="row g-4">
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
              <FontAwesomeIcon icon={faCameraRetro} className="fs-1 mb-3" />
              <h4>Camera Sales</h4>
              <p>
                Explore the latest models from Sony, Canon, Nikon, and more.
              </p>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="fs-1 mb-3"
              />
              <h4>Maintenance</h4>
              <p>
                Professional cleaning and repair services for your equipment.
              </p>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
              <FontAwesomeIcon icon={faGraduationCap} className="fs-1 mb-3" />
              <h4>Workshops</h4>
              <p>Learn photography skills and camera setup from experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="fw-bold text-white mb-4 fs-1 gradient-text">
          Meet Our Team
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-out">
            <div
              className="border bg-blur p-5 rounded-4"
              style={{ height: "500px" }}
            >
              <img
                src={profile2}
                alt="Team Member"
                className="img-fluid  mb-3 rounded"
                style={{ height: "79%" }}
              />
              <h5>Olivia Hughes</h5>
              <p className="text-secondary">Founder & CEO</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-out">
            <div
              className="border bg-blur p-5 rounded-4"
              style={{ height: "500px" }}
            >
              <img
                src={profile3}
                alt="Team Member"
                className="img-fluid  mb-3 rounded"
                style={{ height: "79%" }}
              />
              <h5>Ethan Parker</h5>
              <p className="text-secondary">Marketing Manager</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-out">
            <div
              className="border bg-blur p-5 rounded-4"
              style={{ height: "500px" }}
            >
              <img
                src={profile1}
                alt="Team Member"
                className="img-fluid  mb-3 rounded"
                style={{ height: "79%" }}
              />
              <h5>James Carter</h5>
              <p className="text-secondary">Camera Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
