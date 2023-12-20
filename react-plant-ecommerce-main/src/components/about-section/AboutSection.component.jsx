import React from "react";

const AboutSection = () => {
  return (
    <div className="row  m-lg-5 m-sm-1">
      <div className="col-lg-6 col-sm-12 mt-5 mb-lg-5 mb-sm-3">
        <img
          className="img-fluid w-75"
          src="https://i.pinimg.com/564x/fb/21/4e/fb214ee6f1c1a4cafe6ff2d2e84edd95.jpg"
          alt="about image"
        />
      </div>
      <div className="col-lg-6 col-sm-10 mt-lg-5 mt-sm-0 mb-5">
        <div className="row justify-content-center ml-sm-0 ml-lg-3 mr-sm-0 mr-lg-3 mt-3 mb-3">
          <h2>ABOUT US</h2>
          <hr />
          <h4 className="mb-3">
            “Flowers always make people better, happier and more useful. They are sunshine, food and medicine for the soul."
          </h4>
          <p className="p-4">
           Our site is dedicated to selling house plants and flowers.There are many types of plants.
              You can find what you like. We are always ready to serve you.We offer our ultimate gratitude towards this amazing nature by providing the best agricultural plants in order sustain a greener future.


          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
