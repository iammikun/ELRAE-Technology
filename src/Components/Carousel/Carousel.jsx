import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./Carousel.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={classes.main} id="whatwedo">
        <h2> Everything we do.</h2>
        <div className={classes.carouselContainer}>
          <div div className={classes.carouselContent}>
            <Slider {...settings}>
              <div className={classes.capacityFlex}>
                <h3>CAPACITY DEVELOPMENT</h3>
                <p>
                  We utilize our experiences as entrepreneurs and technologists
                  to deploy resources for identifying and co-building innovative
                  tech start-ups, by providing programs geared towards achieving
                  massive social impact. These programs are focused on
                  developing human capacity and excellent entrepreneurship
                  virtues.
                </p>
              </div>
              <div className={classes.capacityFlex}>
                <h3>ICT INFRASTRUCTURE DEVELOPMENT </h3>
                <p>
                  With a team of high level experts and a keen understanding of
                  the need for scalability, Our priority is ensuring that your
                  product meets the business objectives of your organisation and
                  your clients needs.
                </p>
              </div>
              <div className={classes.capacityFlex}>
                <h3>ENTERPRISE SOFTWARE SOLUTIONS</h3>
                <p>
                  Tailored to meet your unique business needs, we design,
                  develop and deploy cutting edge software solutions that will
                  reposition your organization, ensure access to real time
                  information and enhance efficiency.{" "}
                </p>
              </div>
              <div className={classes.capacityFlex}>
                <h3>SECURITY SOLUTION</h3>
                <p>
                  Our solutions help you preempt security trends, mitigate risks
                  and improve intelligence gathering. We also provide physical
                  security implementations and surveillance systems.
                </p>
              </div>
              <div className={classes.capacityFlex}>
                <h3>CLOUD & SAAS: </h3>
                <p>
                  We offer SaaS and Cloud solutions that enable your
                  organization to carry-out its business functions in real time
                  at a cost typically less than paying for offline licensed
                  applications.
                </p>
              </div>
              <div className={classes.capacityFlex}>
                <h3>CONSULTING</h3>
                <p>
                  Ensure that you derive maximum value from your IT investments
                  and stay one step ahead with our team of highly trained
                  experts in design, development, building and solutions
                  management.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
