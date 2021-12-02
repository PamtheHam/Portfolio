import React from "react";

const NameCard = () => {
  return (
    <>
      <p className="nav-link">Pamela Hammond</p>
      <div className="name-div">
        <h5>
          Full Stack Web Developer | Hammondpamelac@gmail.com |{" "}
          <a
            href="../../public/images/PHResume.pdf"
            download="../../public/images/PHResume.pdf"
            className="home-button"
          >
            Download Resume
          </a>{" "}
        </h5>
      </div>
      <div>
        <br />
        <h6 className="about-paragraph">
          After working within technology in higher education, I developed an
          interest in programming and completed the University of North Carolina
          - Chapel Hill’s Coding Bootcamp. Full-stack web developer with
          experience working in student services within higher education and the
          full-stack of web development. With excellent attention to detail and
          organizational skills, I am dedicated to building original and
          efficient web applications from start to finish with proficient skills
          in HTML, CSS, and Javascript. I enjoy being challenged and working
          outside of my comfort zone. Looking for the perfect match with a
          company that will test and further my knowledge of web development.
        </h6>
        <br />
      </div>
    </>
  );
};

export default NameCard;
